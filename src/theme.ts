import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "'Mouse Memoirs', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  fontSizes: {
    'heading-xl': rem(136),
    'heading-l': rem(88),
    'heading-m': rem(48),
    'heading-s': rem(32),
    body: rem(26),
  },
  headings: { fontWeight: '400' },
  colors: {
    blue: [
      '#e6f1ff',
      '#cdddff',
      '#9ab8ff',
      '#6391ff',
      '#3670ff',
      '#2463ff', // blue
      '#0150ff',
      '#0041e5',
      '#0039ce',
      '#261676', // dark-navy
    ],
  },
  primaryShade: 5,
  shadows: {
    inset: 'inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff',
    'inset-modal': 'inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff',
  },
});
