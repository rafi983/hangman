import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { Category } from '@/data';
import { SelectableCategory } from './SelectableCategory';

interface CategoriesContainerProps {
  categories: Category[];
}

// Styled motion UL wrapper
const Grid = styled(motion.ul)`
  display: grid;
  gap: 16px;
  margin-block: auto;
  padding-block: 64px;
  padding-inline-start: 0;

  @media (min-width: 48em) {
    gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  }

  @media (min-width: 62em) {
    row-gap: 50px;
  }
`;

export function CategoriesContainer({ categories }: CategoriesContainerProps) {
  const variants = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };

  return (
    <Grid variants={variants} initial="hidden" animate="visible" exit="hidden">
      <AnimatePresence>
        {categories.map((category) => (
          <SelectableCategory key={category.id} category={category} />
        ))}
      </AnimatePresence>
    </Grid>
  );
}
