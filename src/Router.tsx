import { AnimatePresence } from 'motion/react';
import { useSnapshot } from 'valtio';
import { CategoryPick } from './screens/CategoryPick.screen';
import { HowToPlay } from './screens/HowToPlay.screen';
import { InGame } from './screens/InGame.screen';
import { MainMenu } from './screens/MainMenu.screen';
import { gameMachine } from './state';

export function Router() {
  const {
    context: { screen },
  } = useSnapshot(gameMachine.getStore());

  let currentScreen = <MainMenu key={screen} />;

  if (screen === 'how_to_play') {
    currentScreen = <HowToPlay key={screen} />;
  }

  if (screen === 'category_pick') {
    currentScreen = <CategoryPick key={screen} />;
  }

  if (screen === 'playing') {
    currentScreen = <InGame key={screen} />;
  }

  return <AnimatePresence mode="wait">{currentScreen}</AnimatePresence>;
}
