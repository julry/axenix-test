import React, { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { DescriptionWrapper } from '../DescriptionWrapper';
import { axenixOffice6, axenixOffice7 } from '../../../constants/images';

export const Description2 = () => {
    const {character, next} = useProgress();
    const [part, setPart] = useState('1');

    const textPart1 = 'Вы прошли мимо лаунж-зоны \n' +
        'с отдыхающими коллегами, заглянули в уголок с кофемашиной, полюбовались стенами со стильными граффити \n' +
        'и отправились на последний этаж.'

    const textPart2 = 'Там тебя ждал приятный сюрприз – инновационное ' +
        'пространство Future Camp. Оно разделено на зоны, где сотрудники Axenix ' +
        'могут проводить встречи с клиентами, работать над внутренними командными ' +
        'проектами, а также готовиться к участию в квизах. Выглядит эффектно :)';

    const onNext = () => {
        if (part === '1') {
            setPart('2');
        } else next();
    }
    return <DescriptionWrapper
        character={character}
        background={part === '1' ? axenixOffice6 : axenixOffice7}
        text={part === '1' ? textPart1 : textPart2}
        hasNextPart
        onNext={onNext}
    />
}