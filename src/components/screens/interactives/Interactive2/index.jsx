import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, DndProvider, TouchTransition } from 'react-dnd-multi-backend';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { shuffle } from '../../../../utils/shuffle';
import { woodBg } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { Background, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { WinStars } from '../../../shared/WinStars';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { opacityAnim } from '../../../shared/keyframes';
import topLeftPuzzle from './svgs/topLeftPuzzle.svg';
import topRightPuzzle from './svgs/topRightPuzzle.svg';
import bottomRightPuzzle from './svgs/bottomRightPuzzle.svg';
import bottomLeftPuzzle from './svgs/bottomLeftPuzzle.svg';
import boardWin from './svgs/boardWin.svg';
import { PuzzlesRow } from './PuzzlesRow';
import { Board } from './Board';

const PUZZLES_ROW_AMOUNT = 2;
const PUZZLES_COLUMN_AMOUNT = 2;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const appear = keyframes`
  from {
    height: 0;
    margin-top: 21.5%;
  }
  to {
    height: 111px;
    margin-top: min(22vw, 12.4vh);
  }
`;

const WinStarsWrapper = styled.div`
  width: 100%;
  height: 111px;
  margin-top: 21.5%;
  animation: ${appear} 1.2s ease-in forwards;
`;

const WinStarsStyled = styled(WinStars)`
  & g {
    animation-delay: 1.2s;
  }

  & #star2 {
    animation-delay: 2.34s;
  }

  & #star3 {
    animation-delay: 1.76s;
  }
`;

const ButtonCenteredStyled = styled(ButtonCentered)`
  opacity: 0;
  animation: ${opacityAnim} 1s ease-in forwards;
  animation-delay: 1.5s;
`;

const BoardWin = styled(Board)`
  background: url(${boardWin});
  margin-top: 6%;
`;

const makeArray = (amount, mapFn) => Array.from({length: amount}, mapFn);

const puzzlesDetails = [
    [{width: '139px', height: '109px', background: `url(${topLeftPuzzle})`}, {
        width: '109px',
        height: '139px',
        background: `url(${topRightPuzzle})`
    }],
    [{
        width: '139px',
        height: '139px',
        top: 'auto',
        bottom: '-0.5px',
        background: `url(${bottomLeftPuzzle})`
    }, {width: '109px', height: '109px', background: `url(${bottomRightPuzzle})`}]
];

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
            setTimeout(() => setIsWin(true), 100);
        }
    }, [droppedPuzzles]);

    const checkWinPuzzle = () => {
        if (!puzzles.length || droppedPuzzles.length !== puzzles.flat().length) return;
        return puzzles.flat()
            .filter(puzzle => droppedPuzzles
                .find(item => {
                    return checkSamePosition(item.position, puzzle.position) && item.id === puzzle.id;
                })
            )
            .length === puzzles.flat().length;
    };

    const hidePuzzles = (id, dropped) => {
        setShownPuzzles((shown) => {
            const puzzle = shown.find(item => item.id === id);
            const puzzleId = shown.indexOf(puzzle);
            const newShown = [...shown];
            newShown[puzzleId] = {...puzzle, dropped};
            return newShown;
        });
    };

    const getDroppedPuzzles = (dropped, puzzle, droppedPuzzle) => {
        const {position, itemPosition} = droppedPuzzle;
        const newDropped = [...dropped];
        const puzzleInDropped = dropped.find(puzz => puzz.id === droppedPuzzle.id);

        if (!!puzzleInDropped) {
            const puzzId = dropped.indexOf(puzzleInDropped);
            newDropped[puzzId] = {...puzzleInDropped, position};
            const positionDropped = newDropped
                .filter(item => checkSamePosition(item.position, position));

            if (positionDropped.length > 1) {
                const replacedPuz = positionDropped.find(item => item.id !== droppedPuzzle.id);
                const replacedPuzId = newDropped.indexOf(replacedPuz);
                newDropped[replacedPuzId] = {...replacedPuz, position: itemPosition};
            }

            return newDropped;
        } else {
            const positionDropped = dropped
                .find(item => checkSamePosition(item.position, position));

            if (!!positionDropped) {
                const replacedPuzId = positionDropped.id;
                hidePuzzles(replacedPuzId, false);
                setPuzzles((puzArray) => {
                    const removedPuzzlePosition = puzArray.flat().find(item => item.id === replacedPuzId)?.position;
                    return setPuzzleDropped(puzArray, removedPuzzlePosition, false);
                });
                const replacedPuzDropId = newDropped.indexOf(positionDropped);
                newDropped.splice(replacedPuzDropId, 1);

                return [...newDropped, {...puzzle, position}];
            }

            return [...dropped, {...puzzle, position}];
        }
    };

    const setPuzzleDropped = (puzzlesArr, itemPosition, dropped = true) => {
        const newPuzzles = [...puzzlesArr];
        newPuzzles[itemPosition[0]][itemPosition[1]] = {...newPuzzles[itemPosition[0]][itemPosition[1]], dropped};
        return newPuzzles;
    };

    const onDrop = (id, itemPosition, position) => {
        if (!id) return;

        const puzzle = puzzles.flat().find(puz => puz.id === id);

        hidePuzzles(puzzle.id, true);
        setPuzzles((puzArray) => setPuzzleDropped(puzArray, puzzle.position));
        setDroppedPuzzles((dropped) => getDroppedPuzzles(dropped, puzzle, {id, position, itemPosition}));
    };

    const onRemove = (puzzle) => {
        hidePuzzles(puzzle.id, false);
        setDroppedPuzzles((dropped) => {
            const puzzleId = dropped.findIndex(puzz => puzz.id === puzzle.id);
            if (puzzleId < 0) return dropped;
            const newDropped = [...dropped];
            newDropped.splice(puzzleId, 1);
            return newDropped;
        });
    };

    const onNext = () => {
        reachMetrikaGoal('q8_finish');
        next();
    };

    return (
        <Wrapper>
            <BackgroundWrapper>
                <Background src={woodBg} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper>
                <DndProvider options={HTML5toTouch}>
                    {isWin && (
                        <WinStarsWrapper>
                            <WinStarsStyled/>
                        </WinStarsWrapper>
                    )}
                    <Board
                        isWin={isWin}
                        puzzles={puzzles}
                        onPuzzleDrop={onDrop}
                        droppedPuzzles={droppedPuzzles}
                    />
                    {isWin ? <ButtonCenteredStyled onClick={onNext}>Продолжить</ButtonCenteredStyled>
                        : <PuzzlesRow
                            shownPuzzles={shownPuzzles}
                            mapInitialPosition={mapInitialPosition}
                            onDrop={onRemove}
                        />
                    }
                </DndProvider>
            </ContentWrapper>
        </Wrapper>
    );
};
