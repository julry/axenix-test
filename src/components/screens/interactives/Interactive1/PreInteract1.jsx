import React, { useState } from 'react';
import styled from 'styled-components';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { bgInteract1, boxClosed } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { TextPart } from '../../../shared/TextPart';
import { TextBlock } from '../../../shared/TextBlock';
import { ButtonCentered } from '../../../shared/ButtonCentered';

const TextBlockStyled = styled(TextBlock)`
  margin-top: min(51vw, 29vh);
  padding-bottom: 6.6vw;
`;

const BoxStyled = styled.div`
  margin: 10.6vmin auto 0;
  width: 62.4vw;
  max-width: 234px;
  max-height: 203px;
  height: 54.13vw;
  background: url(${boxClosed}) no-repeat;
  background-size: contain;
`;

const ButtonStyled = styled(ButtonCentered)`
  margin-top: max(-5.6vw, -19px);
`;

export const PreInteract1 = () => {
    const text1 = 'Кирилл проводил тебя до рабочего стола, на котором ты находишь коробку с запутанными проводами. \n' +
        'Упс... Кажется, тот, кто их складывал, не был любителем порядка:(';
    const text2 = 'Распутай провода, чтобы \n' +
        'IT-специалист смог подключить твой новый рабочий компьютер.';
    const [text, setText] = useState(text1);
    const [isStart, setIsStart] = useState(false);
    const {character, next} = useProgress();
    const {textBg, textColor} = character;

    const onNext = () => {
        if (text === text1) {
            setText(text2);
            setIsStart(true);
        }
    };

    const onStart = () => {
        reachMetrikaGoal('q6_start');
        next();
    };
    return (
        <TextPart background={bgInteract1} isScaled>
            <TextBlockStyled textBg={textBg} textColor={textColor} hasNextPart={!isStart} onClick={onNext}>
                {text}
            </TextBlockStyled>
            <BoxStyled/>
            {isStart && <ButtonStyled onClick={onStart}>Разобрать</ButtonStyled>}
        </TextPart>
    );
};