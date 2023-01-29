import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { LogoScreen } from './LogoScreen';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Prefinal = () => {
    const {next} = useProgress();

    const onNext = () => {
        reachMetrikaGoal('end_game');
        next();
    };

    return (
        <LogoScreen
            boldText={'Мы почти у цели!'}
            text={() => (
                <>
                    {'Это был продуктивный\nдень – самое время узнать\nрезультаты работы!'}
                    <br/> <br/>
                    {'Собрали для тебя\nобратную связь.'}
                </>
            )}
            btnText={'Here we go'}
            onClick={onNext}
        />
    );
};
