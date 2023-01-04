import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  margin: 12.8% auto;
  width: var(--board-size);
  max-width: var(--board-size);
  height: var(--board-size);
  max-height: var(--board-size);
  border-radius: 9px;
  background: white;
  border: 5px solid ${colors.purple};
`;

const Cell = styled.div`
  margin-top: -5px; 
  margin-left: -5px;
  border-top: ${({top, y}) => top && y !== 0 ? '5px' : '0px'} solid ${colors.purple};
  border-right: ${({right, x}) => right && x !== 5 ? '5px' : '0px'} solid ${colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  box-sizing: content-box;
`;

export const Board = (props) => {
    const {lines = []} = props;

    return (
        <Wrapper>
            {lines.map(cell => (
                <Cell key={cell.x + '-' + cell.y} {...cell} />
            ))}
            {props.children}
        </Wrapper>
    )
}