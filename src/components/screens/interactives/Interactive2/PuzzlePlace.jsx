import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { Puzzle } from './Puzzle';

const PuzzlePlaceStyled = styled.div`
  ${({ styles }) => styles};
  border: 1px solid black;
  border-bottom: none;
  border-top: none;
  background: none;
  & + & {
    border-left: none;
  }
`;
export const PuzzlePlace = (props) => {
    const {puzzle, styles, droppedPuzzles, onPuzzleDrop} = props;

    const [{}, drop] = useDrop(() => ({
        accept: 'PUZZLE',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            onPuzzleDrop?.(item?.id, item?.position, puzzle.position);
        },
    }), [puzzle]);

    const droppedPuzzle = droppedPuzzles
        .find(puzz => puzz?.position[0] === puzzle.position[0] && puzz?.position[1] === puzzle.position[1]);

    return (
        <PuzzlePlaceStyled
            ref={drop}
            styles={styles}
        >
            {droppedPuzzle && <Puzzle puzzle={droppedPuzzle} />}
        </PuzzlePlaceStyled>
    )
}