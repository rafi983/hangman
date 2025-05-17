import styled from 'styled-components';
import { ActionIcon, ActionIconProps } from '@mantine/core';
import IconPlay from '@/icons/icon-play.svg?react';

type PlayButtonProps = ActionIconProps & {
  onGameStart?: () => void;
};

// 🔵 Styled ActionIcon root wrapper
const StyledActionIcon = styled(ActionIcon)`
  --ai-size: clamp(10rem, 6.5019rem + 14.9254vw, 12.5rem);
  width: var(--ai-size);
  height: var(--ai-size);
  border: none;
  border-radius: 999em;
  background: linear-gradient(180deg, #fe71fe 0%, #7199ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover > div {
    background: rgba(255, 255, 255, 0.25);
  }
`;

// 🟣 Icon wrapper (same as .icon class)
const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999em;
  box-shadow:
    inset 0 -4px 0 5px #243041,
    inset 0 -12px 0 11px #9d2df5;

  svg {
    width: clamp(3.3019rem, 2.0627rem + 5.2873vw, 4.1875rem);
    height: clamp(3.1131rem, 1.8722rem + 5.2948vw, 4rem);
    display: block;
  }
`;

export function PlayButton({ onGameStart, ...props }: PlayButtonProps) {
  const onClick = () => {
    if (onGameStart) onGameStart();
  };

  return (
    <StyledActionIcon aria-label="Start game" onClick={onClick} data-action="play" {...props}>
      <StyledIconWrapper>
        <IconPlay />
      </StyledIconWrapper>
    </StyledActionIcon>
  );
}
