import { motion } from 'motion/react';
import styled from 'styled-components';
import { Container } from '@mantine/core';
import { HangmanWord } from '@/components/HangmanWord';
import { InGameHeader } from '@/components/InGameHeader';
import { InGameMenu } from '@/components/InGameMenu';
import { Keyboard } from '@/components/Keyboard';
import { Overlay } from '@/components/Overlay';

// 🔧 Styled Components
const Root = styled(motion.div)`
  min-height: 100vh;
  padding-bottom: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpperContainer = styled(Container)`
  box-sizing: content-box;
  padding-inline: 25px;

  @media (min-width: 576px) {
    padding-inline: 40px;
  }
`;

const WordOuter = styled.div`
  margin-block: 3rem;
  padding-bottom: 32px;
`;

const LowerContainer = styled(Container)`
  box-sizing: content-box;
  padding-inline: 25px;

  @media (min-width: 576px) {
    padding-inline: 32px;
  }
`;

export function InGame() {
  return (
    <Root initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Overlay />

      <div>
        <UpperContainer size={1216}>
          <InGameHeader />
        </UpperContainer>
      </div>

      <WordOuter>
        <UpperContainer size={1216}>
          <HangmanWord />
        </UpperContainer>
      </WordOuter>

      <div>
        <LowerContainer size={1173}>
          <Keyboard />
        </LowerContainer>
      </div>

      <InGameMenu />
    </Root>
  );
}
