import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { Flex } from '@mantine/core';
import IconHeart from '@/icons/icon-heart.svg?react';
import { gameMachine } from '@/state';
import { HealthBar } from './HealthBar';

// Styled Flex wrapper
const Container = styled(Flex)`
  align-items: center;
  gap: 16px;
  margin-inline-start: auto;

  @media (min-width: 36em) {
    gap: 40px;
  }
`;

// Styled Heart icon (SVG)
const HeartIcon = styled(IconHeart)`
  width: 26.16px;
  height: 24px;

  @media (min-width: 36em) {
    width: 53.33px;
    height: 48.93px;
  }
`;

export function HealthIndicator() {
  const {
    context: { remainingAttempts },
  } = useSnapshot(gameMachine.getStore());
  const iconHeartRef = useRef<SVGSVGElement>(null);
  const healthBarRef = useRef<HTMLDivElement>(null);

  // Animate heart icon on damage
  useEffect(() => {
    const onTransitionEnd = () => {
      if (remainingAttempts !== 1) {
        iconHeartRef.current?.classList.remove('shake-opacity');
      }
    };

    const barEl = healthBarRef.current;
    barEl?.addEventListener('transitionend', onTransitionEnd);

    if (remainingAttempts < 8) {
      iconHeartRef.current?.classList.add('shake-opacity');
    }

    return () => {
      barEl?.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [remainingAttempts]);

  return (
    <Container>
      <HealthBar ref={healthBarRef} current={remainingAttempts} />
      <HeartIcon ref={iconHeartRef} className="shake-constant" />
    </Container>
  );
}
