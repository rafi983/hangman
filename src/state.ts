import createMachine from 'valtio-fsm';
import { getRandomWord } from './data';
import { loseSfx, rightSfx, winSfx, wrongSfx } from './sounds';

export type GameState =
  | 'mainmenu'
  | 'howtoplay'
  | 'categorypick'
  | 'playing'
  | 'paused'
  | 'game_over';
type Screen = 'main_menu' | 'how_to_play' | 'category_pick' | 'playing';
type GameResult = 'win' | 'lose' | null;
type GameContext = {
  screen: Screen;
  category: string | null;
  wordToGuess: string;
  guessedLetters: string[];
  remainingAttempts: number;
  gameResult: GameResult;
};

// Based on specs, players lose after eight wrong guesses.
const HP = 8;

export const gameMachine = createMachine<GameState, GameContext>(
  'mainmenu',
  {
    mainmenu: {
      transitions: ['howtoplay', 'categorypick'],
      onEnter: (ctx) => {
        ctx.screen = 'main_menu';
        ctx.category = null;
        ctx.wordToGuess = '';
        ctx.guessedLetters = [];
        ctx.remainingAttempts = HP;
        ctx.gameResult = null;
      },
    },
    howtoplay: {
      transitions: ['mainmenu'],
      onEnter: (ctx) => {
        ctx.screen = 'how_to_play';
      },
    },
    categorypick: {
      transitions: ['mainmenu', 'playing'],
      onEnter: (ctx) => {
        ctx.screen = 'category_pick';
        ctx.category = null;
        ctx.wordToGuess = '';
        ctx.guessedLetters = [];
        ctx.remainingAttempts = HP;
        ctx.gameResult = null;
      },
    },
    playing: {
      transitions: ['paused', 'game_over'],
      onEnter: (ctx, category) => {
        ctx.screen = 'playing';

        // Scenario 1: User picks a category from the category pick screen
        if (ctx.category == null && typeof category === 'string') {
          ctx.category = category;
          ctx.wordToGuess = getRandomWord(ctx.category);
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
        }

        // Scenario 2: User continues game from the pause menu
        // Do nothing

        // Scenario 3: User starts a new game in the same category from the game over menu
        if (ctx.category && (ctx.gameResult === 'win' || ctx.gameResult === 'lose')) {
          ctx.wordToGuess = getRandomWord(ctx.category);
          ctx.guessedLetters = [];
          ctx.remainingAttempts = HP;
          ctx.gameResult = null;
        }
      },
    },
    paused: {
      transitions: ['playing', 'categorypick', 'mainmenu'],
    },
    game_over: {
      transitions: ['playing', 'categorypick', 'mainmenu'],
      onEnter: (ctx, result) => {
        if (result === 'win' || result === 'lose') {
          ctx.gameResult = result;
        }
      },
    },
  },
  {
    screen: 'main_menu',
    category: null,
    wordToGuess: '',
    guessedLetters: [],
    remainingAttempts: 8,
    gameResult: null,
  }
);

gameMachine.onContextChange((ctx, changes) => {
  if (changes.map((c) => c.key).includes('wordToGuess')) {
    const word = changes.find((c) => c.key === 'wordToGuess')!;

    if (word.value !== word.previousValue) {
      return;
    }

    // Don't pick the same word when starting a new game in the same category
    let newWord = ctx.wordToGuess;
    while (newWord === word.previousValue) {
      newWord = getRandomWord(ctx.category!);
    }
    ctx.wordToGuess = newWord;
  }

  if (changes.map((c) => c.key).includes('gameResult')) {
    if (ctx.gameResult === 'win') {
      setTimeout(() => {
        winSfx.play();
      }, 1000);
    }
    if (ctx.gameResult === 'lose') {
      loseSfx.play();
      return;
    }
  }

  if (changes.map((c) => c.key).includes('guessedLetters')) {
    const lastGuess = ctx.guessedLetters[ctx.guessedLetters.length - 1];
    if (ctx.wordToGuess.includes(lastGuess)) {
      rightSfx.play();
    } else {
      wrongSfx.play();
    }
  }
});

gameMachine.on('guessLetter', (ctx, letter) => {
  if (typeof letter === 'string' && letter.length === 1 && /^[a-z]$/.test(letter)) {
    ctx.guessedLetters.push(letter);

    if (!ctx.wordToGuess.replace(/\s/g, '').split('').includes(letter)) {
      ctx.remainingAttempts--;
    }
  }
});

export const navigate = (state: GameState) => {
  gameMachine.moveTo(state);
};

export const guessLetter = (letter: string) => {
  if (!gameMachine.isIn('playing')) {
    throw new Error('You can only guess while playing.');
  }

  gameMachine.fire('guessLetter', letter);

  if (gameMachine.context.remainingAttempts === 0) {
    gameMachine.moveTo('game_over', 'lose');
    return;
  }

  // Check if all letters are guessed
  const wordLetters = new Set(gameMachine.context.wordToGuess.replace(/\s/g, '').split(''));
  const guessedLetters = new Set(gameMachine.context.guessedLetters);
  if (wordLetters.isSubsetOf(guessedLetters)) {
    gameMachine.moveTo('game_over', 'win');
  }
};
