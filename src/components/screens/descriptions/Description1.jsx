import React from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { axenixOffice5 } from '../../../constants/images';
import { DescriptionWrapper } from '../DescriptionWrapper';

export const Description1 = () => {
    const {character, next} = useProgress();
    return <DescriptionWrapper
        character={character}
        background={axenixOffice5}
        text={'Коллеги предложили тебе обсудить проект во время прогулки по офису: почему бы не совместить приятное с полезным?'}
        hasNextPart
        onNext={next}
    />
}