import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { colors } from '../../../../constants/colors';
import { Puzzle } from './Puzzle';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  max-height: 212px;
  background: ${colors.orange};
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const PuzzleWrapper = styled.div`
  position: absolute;
  ${({styles}) => styles};
`;

export const PuzzlesRow = (props) => {
    const {shownPuzzles, mapInitialPosition, isWin} = props;
    const [{}, drop] = useDrop(() => ({
        accept: 'PUZZLE',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            props.onDrop?.(item);
        },
    }), []);

    return (
        <Wrapper ref={drop}>
            {shownPuzzles.filter(puz => !puz.dropped).map((puzzle) => (
                <PuzzleWrapper key={puzzle.id} styles={mapInitialPosition(...puzzle?.position)}>
                    <Puzzle
                        isWin={isWin}
                        puzzle={puzzle}
                    />
                </PuzzleWrapper>
            ))}
        </Wrapper>
    );
};
