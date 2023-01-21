import styled from 'styled-components';
import { PuzzlePlace } from './PuzzlePlace';
import { colors } from '../../../../constants/colors';
import board from './svgs/board.svg';
import boardWin from './svgs/boardWin.svg';

const PuzzleBoardWrapper = styled.div`
  position: relative;
  width: 227px;
  margin: ${({isWin}) => isWin ? '6%' : '21.5%'} auto 5.2%;
  border: 5px solid ${colors.purple};
  height: 227px;
  background: url(${({isWin}) => isWin ? boardWin : board}) -0.5px -0.5px;
`;

const PuzzleBoardRow = styled.div`
  display: flex;
  height: calc(217px / 2);
  opacity: ${({isWin}) => isWin ? '0' : '1'};
  transition: opacity 0.5s ease-in;
`;

export const Board = (props) => {
    const {puzzles = [], onPuzzleDrop, droppedPuzzles, isWin} = props;

    return (
        <PuzzleBoardWrapper className={props.className} isWin={isWin}>
            {puzzles.map((puzzleRow, i) => (
                <PuzzleBoardRow key={i} rowInd={i} isWin={isWin}>
                    {
                        puzzleRow && puzzleRow.map((puzzle) => <PuzzlePlace
                            key={puzzle.id}
                            isWin={isWin}
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