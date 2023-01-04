import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Button } from './Button';

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid ${colors.purple};
  border-radius: 27px;
  padding: 27px 14px 0;
  border-bottom: none;
  background: white;
`;

const ButtonStyled = styled(Button)`
  margin: 14px -16px 0;
  width: calc(100% + 32px);
  height: 52px;
  padding: 14px 0 12px 0;
  border-radius: 0 0 27px 27px;
`;

export const TextButtonBlock = (props) => {
    return (
        <Wrapper className={props.className}>
            {props.children}
            <ButtonStyled onClick={props.onClick} color={colors.purple}>{props.text}</ButtonStyled>
        </Wrapper>
    );
};