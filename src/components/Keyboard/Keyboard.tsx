import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { Button } from '@mantine/core';
import { gameMachine, guessLetter } from '@/state';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 56px;
  row-gap: 24px;
  column-gap: 8px;

  @media (min-width: 36em) {
    column-gap: 16px;
    grid-auto-rows: 84px;
  }

  @media (min-width: 62em) {
    column-gap: 24px;
  }
`;

const KeyButton = styled(Button)<{ $disabled?: boolean }>`
  height: 100%;
  padding: 0;
  border-radius: clamp(0.5rem, -0.4542rem + 4.0712vw, 1.5rem);
  background-color: #fff;
  color: var(--mantine-color-blue-9);
  opacity: ${({ $disabled }) => ($disabled ? 0.25 : 1)};
`;

const KeyLabel = styled.span`
  overflow: unset;
  font-size: clamp(1.5rem, 0.0687rem + 6.1069vw, 3rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-transform: uppercase;

  @media (min-width: 62em) {
    line-height: 1.2;
    letter-spacing: 2.4px;
  }
`;

interface KeyProps {
  value: string;
  disabled?: boolean;
}

function Key({ value, disabled }: KeyProps) {
  const handleClick = () => {
    if (!disabled) {
      guessLetter(value);
    }
  };

  return (
    <KeyButton
      $disabled={disabled}
      data-disabled={disabled}
      onClick={handleClick}
      disabled={disabled}
    >
      <KeyLabel>{value}</KeyLabel>
    </KeyButton>
  );
}

export function Keyboard() {
  const {
    context: { guessedLetters },
  } = useSnapshot(gameMachine.getStore());
  const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <Grid>
      {keys.map((key) => (
        <Key key={key} value={key} disabled={guessedLetters.includes(key)} />
      ))}
    </Grid>
  );
}
