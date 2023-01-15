import { useState } from 'react';
import { screens } from '../screens.config';
import { characters } from '../characters.config';

const INITIAL_ANSWERS = {};
const INITIAL_CHARACTER = characters[0];
const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    character: INITIAL_CHARACTER
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const screen = screens[currentScreenIndex];

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
        }
    };

    const next = () => {
        const nextScreen = screens[currentScreenIndex + 1];
        const hasFulfilledDependCondition = !nextScreen?.dependentQuestion ||
            (nextScreen.dependentQuestion &&
                nextScreen.dependentQuestion?.answers.includes(progress.answers[nextScreen?.dependentQuestion?.id]));
        const nextScreenIndex = currentScreenIndex + 1 + !hasFulfilledDependCondition;
        const canNext = nextScreenIndex <= screens.length - 1;

        if (canNext) {
            if (progress.wrapperRef) progress.wrapperRef.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const updateAnswer = (name, value) => {
        setProgress(progress => {
            return {
                ...progress,
                answers: {...progress.answers, [name]: value}
            };
        });
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        currentScreenIndex,
        answers: progress.answers,
        character: progress.character,
        screen,
        next,
        updateAnswer,
        setPrev,
        updateProgress
    };
}
