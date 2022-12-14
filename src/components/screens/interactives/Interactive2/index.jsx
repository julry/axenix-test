import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, DndProvider, TouchTransition } from 'react-dnd-multi-backend';
import { Button } from '../../../shared/Button';
import { useProgress } from '../../../../hooks/useProgress';
import { shuffle } from '../../../../utils/shuffle';
import { Board } from './Board';
import { Puzzle } from './Puzzle';
import topLeftPuzzle from './svgs/topLeftPuzzle.svg';
import topRightPuzzle from './svgs/topRightPuzzle.svg';
import bottomRightPuzzle from './svgs/bottomRightPuzzle.svg';
import bottomLeftPuzzle from './svgs/bottomLeftPuzzle.svg';
import { colors } from '../../../../constants/colors';
import { Background, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { woodBg } from '../../../../constants/images';
import { WinStars } from '../../../shared/WinStars';

const PUZZLES_ROW_AMOUNT = 2;
const PUZZLES_COLUMN_AMOUNT = 2;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const PuzzlesRow = styled.div`
  display: flex;
  position: relative;
  max-height: 212px;
  background: ${colors.orange};
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
`;


const makeArray = (amount, mapFn) => Array.from({length: amount}, mapFn);

const puzzlesDetails = [
    [{width: '139px', height: '109px', background: `url(${topLeftPuzzle})`}, {width: '109px', height: '139px', background: `url(${topRightPuzzle})`}],
    [{width: '139px', height: '139px', top: 'auto', bottom: '-0.5px', background: `url(${bottomLeftPuzzle})`}, {width: '109px', height: '109px', background: `url(${bottomRightPuzzle})`}]
]

const fillPuzzlesArray = (rowInd, colInd) => (
    {
        id: `puzzle_row${rowInd}_col${colInd}`,
        position: [rowInd, colInd],
        styles: {
            position: 'absolute',
            left: 0,
            top: 0,
            ...puzzlesDetails[rowInd][colInd]
        }
    }
);

const PuzzleWrapper = styled.div`
  position: absolute;
  ${({ styles }) => styles};
`;


const mapInitialPosition = (x, y) => {
    const positions = {
        '0-0': {
            bottom: 'calc(5% + 109px)',
            right: 'calc(13% + 133px)'
        },
        '0-1': {
            top: '5%',
            left: '29%'
        },
        '1-1': {
            top: '12%',
            right: 'calc(6.9% + 109px)'
        },
        '1-0': {
            bottom: '2px',
            left: '4.2%'
        }
    };
    return positions[x + '-' + y];
};

export const Interactive2 = () => {
    const [puzzles, setPuzzles] = useState([]);
    const [shownPuzzles, setShownPuzzles] = useState([]);
    const [droppedPuzzles, setDroppedPuzzles] = useState([]);
    const [isWin, setIsWin] = useState(false);
    const {next} = useProgress();

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };


    const checkSamePosition = (position1, position2) => position1[0] === position2[0] && position1[1] === position2[1];

    useEffect(() => {
        const puzzlesArr = makeArray(PUZZLES_ROW_AMOUNT, (v, i) => i)
            .map(rowInd => makeArray(PUZZLES_COLUMN_AMOUNT, (v, colInd) => fillPuzzlesArray(rowInd, colInd)));
        setPuzzles(() => puzzlesArr);
        setShownPuzzles(() => shuffle(puzzlesArr.flat()));
    }, []);

    useEffect(() => {
        if (checkWinPuzzle()) {
            setIsWin(true);
        }
    }, [droppedPuzzles]);

    const checkWinPuzzle = () => {
        if (!puzzles.length || droppedPuzzles.length !== puzzles.flat().length)  return;
        return puzzles.flat()
            .filter(puzzle => droppedPuzzles
                .find(item => {
                    return checkSamePosition(item.position, puzzle.position) && item.id === puzzle.id;
                })
            )
            .length === puzzles.flat().length;
    }

    const hidePuzzles = (id, dropped) => {
        setShownPuzzles((shown) => {
            const puzzle = shown.find(item => item.id === id);
            const puzzleId = shown.indexOf(puzzle);
            const newShown = [...shown];
            newShown[puzzleId] = {...puzzle, dropped}
            return newShown;
        })
    }

    const getDroppedPuzzles = (dropped, puzzle, droppedPuzzle) => {
        const {position, itemPosition} = droppedPuzzle;
        const newDropped = [...dropped];
        const puzzleInDropped = dropped.find(puzz => puzz.id === droppedPuzzle.id);

        if (!!puzzleInDropped) {
            const puzzId = dropped.indexOf(puzzleInDropped);
            newDropped[puzzId] = {...puzzleInDropped, position};
            const positionDropped = newDropped
                .filter(item => checkSamePosition(item.position, position));

            if (positionDropped.length > 1){
                const replacedPuz = positionDropped.find(item => item.id !== droppedPuzzle.id);
                const replacedPuzId = newDropped.indexOf(replacedPuz);
                newDropped[replacedPuzId] = {...replacedPuz, position: itemPosition}
            }

            return newDropped;
        } else {
            const positionDropped = dropped
                .find(item => checkSamePosition(item.position, position));

            if (!!positionDropped){
                const replacedPuzId = positionDropped.id;
                hidePuzzles(replacedPuzId, false);
                setPuzzles((puzArray) => {
                    const removedPuzzlePosition = puzArray.flat().find(item => item.id === replacedPuzId)?.position;
                    return setPuzzleDropped(puzArray, removedPuzzlePosition, false);
                });
                const replacedPuzDropId = newDropped.indexOf(positionDropped);
                newDropped.splice(replacedPuzDropId, 1)

                return [...newDropped, {...puzzle, position}];
            }

            return [...dropped, {...puzzle, position}];
        }
    }

    const setPuzzleDropped = (puzzlesArr, itemPosition, dropped = true) => {
        const newPuzzles = [...puzzlesArr];
        newPuzzles[itemPosition[0]][itemPosition[1]] = {...newPuzzles[itemPosition[0]][itemPosition[1]], dropped};
        return newPuzzles;
    }

    const onDrop = (id, itemPosition, position) => {
        if (!id) return;

        const puzzle = puzzles.flat().find(puz => puz.id === id);

        hidePuzzles(puzzle.id, true);
        setPuzzles((puzArray) => setPuzzleDropped(puzArray, puzzle.position));
        setDroppedPuzzles((dropped) => getDroppedPuzzles(dropped, puzzle, {id, position, itemPosition}));
    }

    return (
        <Wrapper>
            {/*???? ?????????? ???????????????????? ???? ?????????????????????????? ?????????? ???? ??????????????????????, ???? ?????????? ???????????????? ?????? Skyeng :(*/}
            {/*???????????? ????????-??????????????????, ?????????? ???????????????????? ????????.*/}
            <BackgroundWrapper>
                <Background src={woodBg} alt={''} />
            </BackgroundWrapper>
            <ContentWrapper>
                {isWin ? (
                    <>
                        <WinStars />
                        <Board isWin />
                        <Button onClick={next}>????????????????????</Button>
                    </>
                ) : (
                        <DndProvider options={HTML5toTouch}>
                            <Board puzzles={puzzles} onPuzzleDrop={onDrop} droppedPuzzles={droppedPuzzles}/>
                            <PuzzlesRow>
                                {shownPuzzles.filter(puz=> !puz.dropped).map((puzzle) => (
                                    <PuzzleWrapper key={puzzle.id} styles={mapInitialPosition(...puzzle.position)}>
                                        <Puzzle
                                            puzzle={puzzle}
                                        />
                                    </PuzzleWrapper>
                                ))}
                            </PuzzlesRow>
                        </DndProvider>
                    )
                }
            </ContentWrapper>
        </Wrapper>
    );
};