import { memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface WordProps {
  word: string;
  guessedLetters: string;
}

interface LetterProps {
  value: string;
  guessed: boolean;
}

// Styled container for each word
const WordWrapper = styled.span`
  display: flex;
  gap: clamp(0.5rem, 0.2615rem + 1.0178vw, 0.75rem);
  margin-inline: 1rem;

  @media (min-width: 75em) {
    gap: 16px;
  }
`;

// Letter container with animation support
const StyledLetter = styled(motion.span)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: clamp(2.5rem, -0.3626rem + 12.2137vw, 5.5rem);
  height: clamp(4.125rem, 1.3817rem + 11.7048vw, 7rem);
  padding-left: 2px;
  border-radius: clamp(0.75rem, -0.4427rem + 5.0891vw, 2rem);
  background-color: var(--mantine-color-blue-5);
  box-shadow: var(--mantine-shadow-inset);
  font-size: clamp(2.5rem, 1.0687rem + 6.1069vw, 4rem);
  line-height: 1.2;
  letter-spacing: clamp(0.125rem, 0.0534rem + 0.3053vw, 0.2rem);
  text-transform: uppercase;
  color: #fff;
  user-select: none;
  position: relative;
  overflow: hidden;

  @media (min-width: 75em) {
    width: 112px;
    height: 128px;
    border-radius: 40px;
    font-size: var(--mantine-font-size-heading-l);
    letter-spacing: normal;
  }
`;

// Shine effect overlay
const Shine = styled.span`
  position: absolute;
  top: 0;
  left: -40px;
  height: 100%;
  width: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  transform: skewX(-25deg);
  filter: blur(12px);
`;

// Reusable Letter component
const Letter = memo(({ value, guessed }: LetterProps) => {
  return (
    <StyledLetter initial={{ opacity: 0 }} animate={{ opacity: guessed ? 1 : 0.25 }}>
      <Shine data-effect="shine" />
      {guessed && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 500, damping: 32 },
          }}
        >
          {value}
        </motion.span>
      )}
    </StyledLetter>
  );
});

// Word component
export const Word = memo(({ word, guessedLetters }: WordProps) => {
  return (
    <WordWrapper>
      {word.split('').map((letter, index) => (
        <Letter key={letter + index} value={letter} guessed={guessedLetters.includes(letter)} />
      ))}
    </WordWrapper>
  );
});
