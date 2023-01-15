import React, { useState } from 'react';
import styled from 'styled-components';
import { TextPart } from '../../../shared/TextPart';
import { bgInteract1, boxClosed } from '../../../../constants/images';
import { TextBlock } from '../../../shared/TextBlock';
import { useProgress } from '../../../../hooks/useProgress';
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
    const text1 = 'Кирилл проводил тебя до рабочего\nстола, на котором ты находишь\nкоробку с запутанными проводами.\n' +
        'Упс... Кажется, их предыдущий\nвладелец не был любителем\nпорядка :(';
    const text2 = 'Распутай провода, чтобы \n' +
        'IT-специалист смог настроить \n' +
        'твой рабочий компьютер.';
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
    return (
        <TextPart background={bgInteract1} isScaled onClick={onNext} isNeedTap={false}>
            <TextBlockStyled textBg={textBg} textColor={textColor}>
                {text}
            </TextBlockStyled>
            <BoxStyled />
            {isStart && <ButtonStyled onClick={next}>Разобрать</ButtonStyled>}
        </TextPart>
    );
};