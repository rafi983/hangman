import styled from 'styled-components';
import { ActionIcon } from '@mantine/core';
import IconMenu from '@/icons/icon-menu.svg?react';
import { navigate } from '@/state';

// Styled ActionIcon wrapper
const StyledActionIcon = styled(ActionIcon)`
  --ai-size: 40px;
  border: none;
  border-radius: 999em;
  background: linear-gradient(180deg, #fe71fe 0%, #7199ff 100%);
  transition: background 0.3s;

  &:hover > * {
    background: rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 36em) {
    --ai-size: 64px;
  }

  @media (min-width: 62em) {
    --ai-size: 94px;
  }
`;

// Icon wrapper
const IconWrapper = styled.div`
  border-radius: 999em;
  box-shadow: inset 0 -5px 0 -1px rgba(157, 45, 245, 0.25);

  @media (min-width: 36em) {
    box-shadow: inset 0 -6px 0 7px rgba(157, 45, 245, 0.25);
  }

  svg {
    width: 17.45px;
    height: 16.17px;

    @media (min-width: 36em) {
      width: 27.91px;
      height: 25.87px;
    }

    @media (min-width: 62em) {
      width: 41px;
      height: 38px;
    }
  }
`;

export function PauseButton() {
  return (
    <StyledActionIcon onClick={() => navigate('paused')}>
      <IconWrapper>
        <IconMenu />
      </IconWrapper>
    </StyledActionIcon>
  );
}
