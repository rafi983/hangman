import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { gameMachine } from '@/state';
import { Word } from './Word';

// Styled Container for HangmanWord layout
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.75rem, 0.5115rem + 1.0178vw, 1rem);
`;

export function HangmanWord() {
  const {
    context: { wordToGuess, gameResult, guessedLetters },
  } = useSnapshot(gameMachine.getStore());

  const [scope, animate] = useAnimate();
  const tokens = wordToGuess.split(' ');

  useEffect(() => {
    if (gameResult === 'win') {
      animate(
        '[data-effect="shine"]',
        { x: [0, 100, 180], skewX: '-25deg' },
        { duration: 1, times: [0, 0.7, 1] }
      );
    }
  }, [gameResult]);

  return (
    <Container ref={scope}>
      {tokens.map((token, index) => (
        <Word
          key={token + index}
          word={token}
          guessedLetters={guessedLetters.filter((letter) => token.includes(letter)).join('')}
        />
      ))}
    </Container>
  );
}
