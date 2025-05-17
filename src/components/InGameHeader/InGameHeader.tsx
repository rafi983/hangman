import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { Flex, Title } from '@mantine/core';
import { categories } from '@/data';
import { gameMachine } from '@/state';
import { HealthIndicator } from '../HealthIndicator';
import { PauseButton } from '../PauseButton';

// Styled outer header container
const Header = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-top: 46px;
  flex-wrap: wrap-reverse;
  gap: 1rem;

  @media (min-width: 36em) {
    padding-top: 60px;
  }
`;

// Left side of header (Pause + Title)
const LeftSection = styled(Flex)`
  gap: 16px;
  align-items: center;

  @media (min-width: 36em) {
    gap: 32px;
  }

  @media (min-width: 62em) {
    gap: 57px;
  }
`;

// Styled title
const StyledTitle = styled(Title).attrs({ order: 2 })`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: #fff;

  @media (min-width: 36em) and (max-width: 61.99em) {
    font-size: var(--mantine-font-size-heading-m);
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }

  @media (min-width: 62em) {
    font-size: var(--mantine-font-size-heading-l);
    letter-spacing: normal;
  }
`;

export function InGameHeader() {
  const { context } = useSnapshot(gameMachine.getStore());
  const category = categories.find((c) => c.id === context.category)?.name;

  return (
    <Header>
      <LeftSection>
        <PauseButton />
        <StyledTitle>{category}</StyledTitle>
      </LeftSection>
      <HealthIndicator />
    </Header>
  );
}
