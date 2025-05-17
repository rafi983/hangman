import styled from 'styled-components';
import { ActionIcon } from '@mantine/core';
import IconBack from '@/icons/icon-back.svg?react';
import { navigate } from '@/state';

// Styled ActionIcon with full responsive support
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

// Icon wrapper with inner box-shadow and responsive sizing
const StyledIconWrapper = styled.div`
  border-radius: 999em;
  box-shadow: inset 0 -5px 0 -1px rgba(157, 45, 245, 0.25);

  @media (min-width: 36em) {
    box-shadow: inset 0 -6px 0 7px rgba(157, 45, 245, 0.25);
  }

  svg {
    width: 17.45px;
    height: 16.17px;
    margin-bottom: 5.11px;

    @media (min-width: 36em) {
      width: 27.91px;
      height: 25.87px;
      margin-bottom: 8.17px;
    }

    @media (min-width: 62em) {
      width: 41px;
      height: 38px;
      margin-bottom: 12px;
    }
  }
`;

export function BackButton() {
  return (
    <StyledActionIcon onClick={() => navigate('mainmenu')}>
      <StyledIconWrapper>
        <IconBack />
      </StyledIconWrapper>
    </StyledActionIcon>
  );
}
