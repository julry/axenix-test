import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 52px;
  width: 100%;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  margin-left: 43px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${({color}) => color};
`;

const TextField = styled.div`
  margin-top: -10px;
  background: ${({color}) => color};
  border-radius: 30px;
  padding: 10px 15px;
`;

export const QuestionField = (props) => {
    const {color} = props;
    return (
        <Wrapper>
            <Triangle color={color}/>
            <TextField color={color}>
                {props.children}
            </TextField>
        </Wrapper>
    )
}