import { useProgress } from '../../hooks/useProgress';
import { LogoScreen } from './LogoScreen';
import React from 'react';

export const Prefinal = () => {
    const {next} = useProgress();

    return (
        <LogoScreen
            boldText={'Мы почти у цели!'}
            text={
                'Это был продуктивный\nдень – самое время узнать\nрезультаты работы!\n\nСобрали для тебя\nобратную связь.'
            }
            btnText={'Here we go'}
            onClick={next}
        />
    );
}
