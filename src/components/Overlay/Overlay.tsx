import styled from 'styled-components';

const StyledOverlay = styled.div`
  background: linear-gradient(180deg, #1a043a 0%, #151278 70%, #2b1677 100%);
  opacity: 0.75;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

export function Overlay() {
  return <StyledOverlay />;
}
