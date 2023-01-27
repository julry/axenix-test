import React from 'react';
import { TextPart } from '../shared/TextPart';
import { TextBlockWrapper } from './QuestionWrapper';
import { TextBlock } from '../shared/TextBlock';

export const DescriptionWrapper = (props) => {
    const {onNext, background, character, hasNextPart, secondPerson, text} = props;
    const {photo, width, height, textBg, textColor} = character;
    return (
        <TextPart
            background={background}
            person={photo}
            personWidth={width}
            isScaled={false}
            personHeight={height}
            secondPerson={secondPerson}
        >
            <TextBlockWrapper>
                <TextBlock textBg={textBg} textColor={textColor} hasNextPart={hasNextPart} onClick={onNext}>
                    {text}
                </TextBlock>
            </TextBlockWrapper>
        </TextPart>
    )
}