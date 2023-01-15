import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { LogoScreen } from './LogoScreen';

export const Intro = () => {
    const {next} = useProgress();

    return (
        <LogoScreen
            boldText={'Привет!'}
            text={
                'Добро пожаловать\nв карьерный акселератор\nот Axenix.\n\n' +
                'Выбирай персонажа,\nза которого будешь играть,\nотвечай на вопросы\nи помни – твои ' +
                'решения\nвлияют на ход игры :)'
            }
            btnText={'Choose your Axenix fighter!'}
            onClick={next}
        />
    );
};
