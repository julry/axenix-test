import styled from 'styled-components';
import { PuzzlePlace } from './PuzzlePlace';
import { colors } from '../../../../constants/colors';
import board from './svgs/board.svg';

const PuzzleBoardWrapper = styled.div`
  position: relative;
  width: 227px;
  margin: 21.5% auto 5.2%;
  border: 5px solid ${colors.purple};
  height: 227px;
  background: url(${board}) -0.5px -0.5px;
`;

const PuzzleBoardRow = styled.div`
  display: flex;
  height: calc(217px / 2);
`;

export const Board = (props) => {
    const {puzzles = [], onPuzzleDrop, droppedPuzzles} = props;

    return (
        <PuzzleBoardWrapper className={props.className}>
            {puzzles.map((puzzleRow, i) => (
                <PuzzleBoardRow key={i} rowInd={i}>
                    {
                        puzzleRow && puzzleRow.map((puzzle) => <PuzzlePlace
                            key={puzzle.id}
                            droppedPuzzles={droppedPuzzles}
                            onPuzzleDrop={onPuzzleDrop}
                            styles={puzzle.styles}
                            puzzle={puzzle}
                        />)
                    }
                </PuzzleBoardRow>
            ))}
        </PuzzleBoardWrapper>
    );
};