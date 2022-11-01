import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';
import { usePreview } from 'react-dnd-multi-backend';

const PuzzleStyled = styled.div`
  ${({ styles }) => styles};
  position: relative;
  z-index: 10;
  -webkit-touch-callout: none;
  box-sizing: content-box;
  cursor: pointer;
`;

const StyledPuzzlePreview = styled(PuzzleStyled)`
  box-sizing: border-box;
  z-index: 13;
`;

export const Puzzle = (props) => {
    const { puzzle, onDragStart } = props;
    const {id, position, styles} = puzzle;
    const dragRef = useRef();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'PUZZLE',
        item: () => {
            onDragStart?.();
            return { id, position, styles };
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id]);

    const PuzzlePreview = (props) => {
        const { display, style } = usePreview();

        if (!display) {
            return null;
        }

        return <StyledPuzzlePreview style={style} {...props} />;
    };

    if (isDragging) {
        return <PuzzlePreview styles={styles}/>;
    }

    return (
        <PuzzleStyled
            styles={styles}
            ref={mergeRefs([drag, dragRef])}
        />
    );
};
