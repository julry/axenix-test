import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Stars } from './svg/Stars';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 180px;
  height: 111px;
`;

const appear = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const StarsStyled = styled(Stars)`
  height: 100%;
  width: 100%;
  
  & g {
    opacity: 0;
    animation: ${appear} 0.55s ease-in forwards;
  }
 
  & #star2 {
    animation-delay: 1.12s;
  }
  
  & #star3 {
    animation-delay: 0.56s;
  }
`;

export const WinStars = (props) => (
    <Wrapper {...props}>
        <StarsStyled />
    </Wrapper>
);
