import React from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { DescriptionWrapper } from '../DescriptionWrapper';
import { axenixOffice8, manCeo } from '../../../constants/images';

export const Description3 = () => {
    const {character, next, answers} = useProgress();
    const text = 'По дороге обратно в отдел ты столкнулся с СЕО. Он остановил взгляд на ' +
        `${answers['3'] === '3' ? 'твоем спортивном костюме' : 'твоих шортах'}. ` +
        'Что бы это могло означать? Может, он начал мысленно разрабатывать гайд по дресс-коду? :)'
    return <DescriptionWrapper
        character={character}
        background={axenixOffice8}
        text={text}
        secondPerson={{
            photo: manCeo,
            height: '75.86%',
            width: '57.86vw'
        }}
        onNext={next}
    />
}