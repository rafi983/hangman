import { Step } from '.';
import { AnimatePresence, motion } from 'motion/react';
import styled from 'styled-components';
import { StepCard } from './StepCard';

interface StepsProps {
  steps: Step[];
}

// ✅ Styled container that controls flex direction manually
const StyledFlex = styled(motion.ol)`
  display: flex;
  counter-reset: step;
  margin-block: auto;
  padding-block: 64px;
  padding-inline-start: 0;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 576px) {
    gap: 32px;
  }

  @media (min-width: 992px) {
    flex-direction: row;

    & > * {
      flex-grow: 1;
      max-width: calc((100% / 3) - (32px - (32px / 3)));
    }
  }
`;

export function StepsContainer({ steps }: StepsProps) {
  const variants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  return (
    <StyledFlex variants={variants} initial="hidden" animate="visible" exit="hidden">
      <AnimatePresence>
        {steps.map((step) => (
          <StepCard key={step.title} {...step} />
        ))}
      </AnimatePresence>
    </StyledFlex>
  );
}
