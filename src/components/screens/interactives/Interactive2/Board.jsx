import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { PuzzlePlace } from './PuzzlePlace';

const PuzzleBoardWrapper = styled.div`
    width: 100%;
`;

const PuzzleBoardRow = styled.div`
  display: flex;
  border-top: 1px solid black;
  &:last-child {
    border-bottom: 1px solid black;
  }
`;

export const Board = (props) => {
    const {puzzles, onPuzzleDrop, droppedPuzzles} = props;

    // function handlePlacesDrop(place, selectedPlace) {
    //     const dropId = selectedPlace.id[0];
    //     const dragId = place.id[0];
    //     const finalOrder = ['place', 'size'];
    //     let newPlaces = [...places];
    //     const dropRow = newPlaces.find(place => place.id === dropId);
    //     const dragRow = newPlaces.find(place => place.id === dragId);
    //
    //     if (place.type === selectedPlace.type && !dropRow.touched) {
    //         return;
    //     }
    //
    //     const newDropPlace = {
    //         [place.type + 'Title']: dragRow[place.type + 'Title'],
    //         [place.type]: dragRow[place.type]
    //     };
    //     const newDragPlace = {
    //         [place.type + 'Title']: dropRow[place.type + 'Title'],
    //         [place.type]: dropRow[place.type]
    //     };
    //
    //     newPlaces[newPlaces.indexOf(dropRow)] = {...dropRow, ...newDropPlace, order: finalOrder, touched: true};
    //     if (dropId !== dragId) {
    //         newPlaces[newPlaces.indexOf(dragRow)] = {...dragRow, ...newDragPlace};
    //     }
    //
    //     if (newPlaces.filter(place => !place.touched).length === 1) {
    //         const untouchedLast = newPlaces.filter(place => !place.touched)[0];
    //         let index;
    //         if (untouchedLast === dragRow) index = newPlaces.indexOf(dragRow);
    //         else index = newPlaces.indexOf(untouchedLast);
    //         newPlaces[index] = {...untouchedLast, touched: true, order: finalOrder};
    //     }
    //
    //     onPositionChange(newPlaces);
    // }

    // const isEverythingTouched = places.filter(place => !place.touched).length < 1;

    return (
            <PuzzleBoardWrapper>
                <PuzzleBoardWrapper>
                    {puzzles.map((puzzleRow, i) => (
                        <PuzzleBoardRow key={i}>
                            {
                                puzzleRow.map((puzzle) => <PuzzlePlace
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
            </PuzzleBoardWrapper>
    );
};