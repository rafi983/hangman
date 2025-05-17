import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { Modal } from '@mantine/core';
import { gameMachine, navigate } from '@/state';
import { MenuButton } from '../MenuButton';
import classes from './InGameMenu.module.css';

type ModalTitle = 'Paused' | 'You Win' | 'You Lose';
type PlayingAction = 'Continue' | 'Play Again!';

export function InGameMenu() {
  const {
    state,
    context: { gameResult },
  } = useSnapshot(gameMachine.getStore());
  const [title, setTitle] = useState<ModalTitle>('Paused');
  const [playing, setPlaying] = useState<PlayingAction>('Continue');

  useEffect(() => {
    if (state === 'game_over' && gameResult != null) {
      setTitle(gameResult === 'win' ? 'You Win' : 'You Lose');
      setPlaying('Play Again!');
    }

    if (state === 'paused') {
      setTitle('Paused');
      setPlaying('Continue');
    }
  }, [state]);

  return (
    <Modal.Root
      opened={['paused', 'game_over'].includes(state)}
      onClose={() => navigate('playing')}
      centered
      transitionProps={{
        transition: state === 'game_over' ? 'pop' : 'fade-down',
        enterDelay: gameResult === 'win' ? 1000 : undefined,
      }}
      closeOnClickOutside={false}
      closeOnEscape={state === 'paused'}
      classNames={{
        root: classes.root,
        content: classes.content,
        overlay: classes.overlay,
        body: classes.body,
      }}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Title className={classes.title}>{title}</Modal.Title>
        <Modal.Body>
          <MenuButton target="playing" data-autofocus>
            {playing}
          </MenuButton>
          <MenuButton target="categorypick">New Category</MenuButton>
          <MenuButton target="mainmenu" variant="pink">
            Quit Game
          </MenuButton>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
