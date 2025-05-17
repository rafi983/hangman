import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '@mantine/core';
import { GameState, navigate } from '@/state';

type MenuButtonProps = ButtonProps & {
  target?: GameState;
};

// Styled Button
const StyledButton = styled(Button)<{ $variant?: string }>`
  height: unset;
  padding: 12px 64px;
  border: none;
  border-radius: 40px;
  box-shadow: var(--mantine-shadow-inset);
  font-size: var(--mantine-font-size-heading-s);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  background-color: var(--mantine-color-blue-5);
  transition: background 0.2s ease;

  @media (max-width: 375px) {
    padding-inline: 17.07vw;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors?.blue?.[4] || 'rgba(0, 0, 255, 0.25)'};
  }

  ${({ $variant }) =>
    $variant === 'pink' &&
    css`
      background: linear-gradient(180deg, #fe71fe 0%, #7199ff 100%);
      box-shadow:
        inset 0 -2px 0 3px #140e66,
        inset 0 1px 0 6px #c642fb;

      &:hover {
        background:
          linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)),
          linear-gradient(180deg, #fe71fe 0%, #7199ff 100%);
      }
    `}
`;

export function MenuButton({ children, target, variant, ...props }: MenuButtonProps) {
  const onClick = () => {
    if (target) navigate(target);
  };

  return (
    <StyledButton $variant={variant} onClick={onClick} data-variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
