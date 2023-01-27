import React from 'react';
import styled from 'styled-components';
import { TextPart } from '../../../shared/TextPart';
import { bgInteract3 } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { TextBlock } from '../../../shared/TextBlock';
import cakeStart from './svg/cakeStart.svg';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { sex } from '../../../../characters.config';

const TextBlockStyled = styled(TextBlock)`
  margin-top: min(32vw, 16vh);
  padding-bottom: 6.6vw;
`;

const CakeWrapper = styled.div`
  position: relative;
  margin: min(14.9vw, 8vh) auto 0;
  width: 47.2vw;
  max-width: 176px;
  max-height: 267px;
  height: 71.2vw;
  background: url(${cakeStart}) no-repeat;
  background-size: contain;
  z-index: 4;
`;

const ButtonStyled = styled(ButtonCentered)`
    margin-top: -13px;
`;

export const PreInteract3 = () => {
    const {character, next} = useProgress();
    const {textBg, textColor} = character;
    return <TextPart background={bgInteract3} isScaled>
        <TextBlockStyled textBg={textBg} textColor={textColor}>
            {`Ты решил${character.sex === sex.Male ? '' : 'а'} сделать подарок\nколлегам и заказал${character.sex === sex.Male ? '' : 'а'} им кексики.` +
                '\nПомоги курьеру пройти лабиринт,\nчтобы доставка прибыла вовремя :)'}
        </TextBlockStyled>
        <CakeWrapper />
        <ButtonStyled onClick={next}>Помочь</ButtonStyled>
    </TextPart>
}