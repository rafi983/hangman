import { AnimatePresence, motion } from 'motion/react';
import styled from 'styled-components';
import { Box, Center, Container, VisuallyHidden } from '@mantine/core';
import { MenuButton } from '@/components/MenuButton';
import { PlayButton } from '@/components/PlayButton';
import { navigate } from '@/state';

// Styled Components

const StyledContainer = styled(Container)`
  box-sizing: content-box;
  padding-inline: 25px 26px;
`;

const StyledContent = styled(Center)`
  min-height: 100vh;
`;

const StyledBox = styled(motion.div)`
  width: 100%;
  height: clamp(30.0625rem, 28.4009rem + 7.0896vw, 31.25rem); /* 481–500px */
  border-radius: 72px;
  background: linear-gradient(180deg, #344aba, rgba(0, 20, 121, 0.83));
  box-shadow:
    inset 0 -8px 0 4px #140e66,
    inset 0 6px 0 8px #2463ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 51px;

  & [data-action='play'] {
    margin-top: clamp(8.0625rem, 9.4121rem + -3.3582vw, 8.625rem);
    margin-bottom: 58px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  transform: translateY(calc(-1 * clamp(3.125rem, -2.1222rem + 22.3881vw, 6.875rem)));
  max-width: 81.17%;
  height: auto;
`;

export function MainMenu() {
  return (
    <StyledContainer size={592}>
      <StyledContent>
        <AnimatePresence propagate>
          <StyledBox
            component={motion.div}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500, transition: { bounce: 0 } }}
          >
            <VisuallyHidden component="h1">The Hangman Game</VisuallyHidden>
            <Logo src="/images/logo.svg" alt="" width="374" height="185" />
            <PlayButton onGameStart={() => navigate('categorypick')} />
            <MenuButton target="howtoplay">How to Play</MenuButton>
          </StyledBox>
        </AnimatePresence>
      </StyledContent>
    </StyledContainer>
  );
}
