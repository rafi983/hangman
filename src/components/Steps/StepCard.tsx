import { Step } from '.';
import { motion } from 'motion/react';
import styled from 'styled-components';
import { Paper, Text, Title } from '@mantine/core';

type StepCardProps = Step;

const StyledCard = styled(Paper)`
  padding: 32px;
  border-radius: 20px;
  background-color: #fff;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 680px;
  margin-inline: auto;
  counter-increment: step;

  @media (min-width: 576px) {
    padding-inline: 40px;
    border-radius: 40px;

    &::before {
      content: '0' counter(step);
      font-size: var(--mantine-font-size-heading-l);
      color: var(--mantine-color-blue-5);
    }
  }

  @media (min-width: 992px) {
    padding: 60px 40px;
    flex-direction: column;
    text-align: center;
  }

  & * {
    line-height: inherit;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 992px) {
    display: contents;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 24px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--mantine-color-blue-9);

  @media (max-width: 575px) {
    &::before {
      content: '0' counter(step);
      margin-right: 16px;
      color: var(--mantine-color-blue-5);
    }
  }

  @media (min-width: 576px) {
    font-size: 40px;
    letter-spacing: 2px;
  }

  @media (min-width: 992px) {
    font-size: var(--mantine-font-size-heading-m);
    letter-spacing: 2.4px;
  }
`;

const StyledDescription = styled(Text)`
  letter-spacing: 0.8px;
  color: #887dc0;

  @media (min-width: 576px) {
    font-size: 20px;
    letter-spacing: 1px;
  }

  @media (min-width: 992px) {
    font-size: var(--mantine-font-size-body);
    letter-spacing: 1.3px;
    max-width: 288px;
    margin-inline: auto;
  }
`;

export function StepCard({ title, description }: StepCardProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <StyledCard component={motion.li} variants={variants}>
      <Inner>
        <StyledTitle order={3}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </Inner>
    </StyledCard>
  );
}
