import { keyframes } from 'styled-components';

export const opacityAnim = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const opacityReversed = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;


export const pulse = keyframes`
  0% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.85);
  }
`;