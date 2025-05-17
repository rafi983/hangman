import { motion } from 'motion/react';
import styled from 'styled-components';
import { Container } from '@mantine/core';
import { HeaderWithBackButton } from '@/components/HeaderWithBackButton';
import { Overlay } from '@/components/Overlay';
import { StepsContainer } from '@/components/Steps';
import { howtoplay } from '@/data';

// ✅ Styled container to match original CSS
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

export function HowToPlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
    >
      <Overlay />
      <StyledContainer size={1216}>
        <HeaderWithBackButton title="How to Play" />
        <StepsContainer steps={howtoplay} />
      </StyledContainer>
    </motion.div>
  );
}
