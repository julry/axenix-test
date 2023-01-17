import styled from 'styled-components';
import { TapIcon } from './svg/TapIcon';
import { opacityAnim, opacityReversed, pulse } from './keyframes';

export const TapAnimated = styled(TapIcon)`
  max-width: 87px;
  max-height: 117px;
  width: 21vw;
  height: 29vw;
  opacity: 0;
  animation: ${opacityAnim} 250ms forwards;

  & .smallLine {
    opacity: 0;
    animation: ${opacityReversed} 2000ms infinite;
    animation-delay: 250ms;
  }

  & .bigLine {
    opacity: 0;
    animation: ${opacityReversed} 2000ms infinite;
    animation-delay: 750ms;
  }
  
  & .finger {
    animation: ${pulse} 2000ms infinite;
    transform-origin: 50% 50%;
  }
`;
