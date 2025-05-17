import { forwardRef } from 'react';
import styled from 'styled-components';

interface HealthBarProps {
  current: number;
  max?: number;
}
type Ref = HTMLDivElement;

// Track container (outer shell)
const Track = styled.div<{ $current: number; $max: number }>`
  --health-current: ${({ $current }) => $current};
  --health-max: ${({ $max }) => $max};

  width: clamp(3.5625rem, -2.5802rem + 26.2087vw, 10rem);
  padding-block: clamp(0.25rem, -0.0482rem + 1.2723vw, 0.5625rem);
  padding-inline: clamp(0.25rem, -0.1675rem + 1.7812vw, 0.6875rem);
  border-radius: 96px;
  background-color: #fff;

  @media (min-width: 48em) {
    width: 160px;
    padding: 9px 11px;
  }

  @media (min-width: 62em) {
    width: 240px;
  }
`;

// Inner fill container
const Inner = styled.div`
  height: clamp(0.5rem, 0.2018rem + 1.2723vw, 0.8125rem);
  position: relative;

  @media (min-width: 48em) {
    height: 13px;
  }
`;

// Blue fill bar (current health)
const Bar = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 96px;
  background-color: var(--mantine-color-blue-9);
  width: calc(100% / var(--health-max) * var(--health-current));
  z-index: 2;
`;

// Yellow "damage taken" fill bar
const Damage = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 96px;
  background-color: var(--mantine-color-yellow-6);
  width: calc(100% / var(--health-max) * var(--health-current));
  transition-property: width;
  transition-delay: 1s;
  transition-duration: 0.2s;
  z-index: 1;
`;

export const HealthBar = forwardRef<Ref, HealthBarProps>(({ current, max = 8 }, ref) => {
  return (
    <Track $current={current} $max={max}>
      <Inner>
        <Bar />
        <Damage ref={ref} />
      </Inner>
    </Track>
  );
});
