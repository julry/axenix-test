import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { LogoScreen } from './LogoScreen';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const Intro = () => {
    const {next} = useProgress();

    const onNext = () => {
        reachMetrikaGoal('start_game');
        next();
    };

    return (
        <LogoScreen
            boldText={'Привет!'}
            text={() => (
                <>
                    {'Добро пожаловать\nв карьерный акселератор\nот Axenix.'}
                    <br/>
                    <br/>
                    {'Выбирай персонажа,\nза которого будешь играть,\nотвечай на вопросы\nи помни – твои ' +
                        'решения\nвлияют на ход игры :)'}
                </>
            )
            }
            btnText={'Choose your Axenix fighter!'}
            onClick={onNext}
            isNeedTap
        />
    );
};
