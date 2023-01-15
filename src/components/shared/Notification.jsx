import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { opacityAnim } from './keyframes';

const Wrapper = styled.div`
  height: 12vw;
  width: 88vw;
  min-width: 220px;
  will-change: height;
  position: absolute;
  top: calc(${({id}) => id * 12}vw + ${({id}) => id * 5}px);
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  min-height: 40px;
  max-height: 60px;
`;

const Container = styled.div`
  background: linear-gradient(57.48deg, ${colors.purple} 8.32%, ${colors.orange} 86.03%);
  border-radius: ${({id}) => id > 0 ? '20px' : '0px 0px 20px 20px'};
  color: #FFFFFF;
  cursor: pointer;
  will-change: transform;
  height: 100%;
  animation: ${opacityAnim} .75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`;

export const Notification = (props) => {
    const {id} = props;
    return (
        <Wrapper id={id}>
            <Container id={id}>
                <Body>
                    <Content>{props.children}</Content>
                </Body>
            </Container>
        </Wrapper>
    );
};