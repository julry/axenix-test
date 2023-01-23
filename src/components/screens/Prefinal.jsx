import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { LogoScreen } from './LogoScreen';

export const Prefinal = () => {
    const {next} = useProgress();

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
            onClick={next}
        />
    );
};
