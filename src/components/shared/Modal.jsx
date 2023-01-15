import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { CloseIcon } from './svg/CloseIcon';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Background = styled(Wrapper)`
  background: ${colors.purple};
  opacity: 0.5;
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid ${colors.purple};
  border-radius: 27px;
  width: 84.3vw;
  color: black;
  padding: 8vw 4vw 7vw;
  max-width: 310px;
`;

const CloseIconStyled = styled(CloseIcon)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 20px;
  height: 20px;
`;

export const Modal = (props) => {
    return (
        <Wrapper>
            <Background/>
            <Content>
                {props.close && <CloseIconStyled onClick={props.close}/>}
                {props.children}
            </Content>
        </Wrapper>
    )
}