import styled from 'styled-components';
import { Title } from '@mantine/core';
import { BackButton } from '../BackButton';

interface HeaderWithBackButtonProps {
  title: string;
}

// Styled container for header
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;

  @media (min-width: 36em) {
    padding-top: 61px;
  }

  @media (min-width: 62em) {
    padding-top: 80px;
  }

  & > * {
    margin-inline: 1rem;
  }

  & > h2 {
    margin-inline: auto;
  }

  & > :first-child:not(h2) {
    margin-inline-start: 0;
  }

  & > :last-child:not(h2) {
    margin-inline-end: 0;
  }

  @media (max-width: 47.99em) {
    & > h2 {
      margin-inline-end: 0;
    }
  }

  @media (min-width: 48em) {
    &::after {
      content: '';
      margin-inline-start: 1rem;
      width: 64px;
      height: 64px;
    }
  }

  @media (min-width: 62em) {
    &::after {
      width: 94px;
      height: 94px;
    }
  }
`;

// Styled title
const StyledTitle = styled(Title).attrs({ order: 2 })`
  font-size: var(--mantine-font-size-heading-m);
  line-height: 1.2;
  letter-spacing: 2.4px;
  text-align: center;
  color: #fff;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: #243041;
  paint-order: stroke fill;

  @media (min-width: 36em) {
    font-size: 104px;
    letter-spacing: -0.68px;
    -webkit-text-stroke-width: 16px;
  }

  @media (min-width: 62em) {
    font-size: var(--mantine-font-size-heading-xl);
  }
`;

export function HeaderWithBackButton({ title }: HeaderWithBackButtonProps) {
  return (
    <Header>
      <BackButton />
      <StyledTitle>{title}</StyledTitle>
    </Header>
  );
}
