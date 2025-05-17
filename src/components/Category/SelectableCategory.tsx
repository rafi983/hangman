import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button, ButtonProps } from '@mantine/core';
import { Category } from '@/data';
import { gameMachine } from '@/state';

type SelectableCategoryProps = ButtonProps & {
  category: Category;
};

// Styled Button (motion-wrapped Mantine Button)
const StyledButton = styled(Button)`
  --button-height: 77px;
  padding: 24px 40px;
  border-radius: 20px;
  border: none;
  box-shadow: var(--mantine-shadow-inset);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(66, 135, 245, 0.25); /* simulate lighten */
  }

  @media (min-width: 48em) {
    --button-height: 182.67px;
    border-radius: 40px;
  }
`;

const StyledLabel = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 1.2px;

  @media (min-width: 48em) {
    font-size: var(--mantine-font-size-heading-m);
    letter-spacing: 2.4px;
  }
`;

export function SelectableCategory({ category, ...props }: SelectableCategoryProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <StyledButton
      component={motion.button}
      variants={variants}
      onClick={() => gameMachine.moveTo('playing', category.id)}
      {...props}
    >
      <StyledLabel>{category.name}</StyledLabel>
    </StyledButton>
  );
}
