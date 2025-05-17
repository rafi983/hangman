import { motion } from 'motion/react';
import styled from 'styled-components';
import { Container } from '@mantine/core';
import { CategoriesContainer } from '@/components/Category';
import { HeaderWithBackButton } from '@/components/HeaderWithBackButton';
import { Overlay } from '@/components/Overlay';
import { categories } from '@/data';

// ✅ Styled Container wrapper to replace .module.css
const StyledContainer = styled(Container)`
  box-sizing: content-box;
  padding-inline: 25px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    padding-inline: 40px;
  }
`;

export function CategoryPick() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
    >
      <Overlay />
      <StyledContainer size={1216}>
        <HeaderWithBackButton title="Pick a Category" />
        <CategoriesContainer categories={categories} />
      </StyledContainer>
    </motion.div>
  );
}
