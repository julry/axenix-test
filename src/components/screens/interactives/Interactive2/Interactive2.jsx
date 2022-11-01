import React from 'react';
import styled from 'styled-components';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, DndProvider, TouchTransition } from 'react-dnd-multi-backend';
import { Button } from '../../../shared/Button';
import { useProgress } from '../../../../hooks/useProgress';
import { puzzle } from '../../../../constants /images';
import { useEffect, useState } from 'react';
import { shuffle } from '../../../../utils/shuffle';
import { Board } from './Board';
import { Puzzle } from './Puzzle';
import { HTML5Backend } from 'react-dnd-html5-backend';

const PUZZLES_ROW_AMOUNT = 4;
const PUZZLES_COLUMN_AMOUNT = 4;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const PuzzlesRow = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const makeArray = (amount, mapFn) => Array.from({length: amount}, mapFn);

const fillPuzzlesArray = (rowInd, colInd, puzzleSize) => (
    {
        id: `puzzle_row${rowInd}_col${colInd}`,
        position: [rowInd, colInd],
        styles: {
            width: `${puzzleSize}px`,
            height: `${puzzleSize}px`,
            background: `url(${puzzle}) no-repeat`,
            'background-size': `${puzzleSize * PUZZLES_COLUMN_AMOUNT}px ${puzzleSize * PUZZLES_ROW_AMOUNT}px`,
            'background-position': `-${colInd * puzzleSize}px -${rowInd * puzzleSize}px`
        }
    }
);

export const Interactive2 = () => {
    const [puzzles, setPuzzles] = useState([]);
    const [shownPuzzles, setShownPuzzles] = useState([]);
    const [droppedPuzzles, setDroppedPuzzles] = useState([]);
    const [isWinModal, setIsWinModal] = useState(false);
    const [puzzlesSize, setPuzzlesSize] = useState(0);
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
        const size = (document.documentElement.clientWidth - 20) / PUZZLES_COLUMN_AMOUNT;
        setPuzzlesSize(() => size);
        const puzzlesArr = makeArray(PUZZLES_ROW_AMOUNT, (v, i) => i)
            .map(rowInd => makeArray(PUZZLES_COLUMN_AMOUNT, (v, colInd) => fillPuzzlesArray(rowInd, colInd, size)));
        setPuzzles(() => puzzlesArr);
        setShownPuzzles(() => shuffle(puzzlesArr.flat()));
    }, []);

    useEffect(() => {
        if (checkWinPuzzle()) {
            setIsWinModal(true);
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
            {/*Ты решил записаться на корпоративные курсы по английскому, но забыл промокод для Skyeng :(*/}
            {/*Собери пазл-подсказку, чтобы продолжить игру.*/}
            <DndProvider options={HTML5toTouch}>
                <Board puzzles={puzzles} onPuzzleDrop={onDrop} droppedPuzzles={droppedPuzzles}/>
                <PuzzlesRow size={puzzlesSize}>
                    {shownPuzzles.filter(puz=> !puz.dropped).map((puzzle) => <Puzzle
                        key={puzzle.id}
                        puzzle={puzzle}
                    />)}
                </PuzzlesRow>
            </DndProvider>
            <Button onClick={next}>dalee</Button>
            {isWinModal && <p>Красава</p>}
        </Wrapper>
    );
};