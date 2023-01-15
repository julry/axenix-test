import styled from 'styled-components';
import cakeFinished from './svg/cakeFinished.svg';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { useProgress } from '../../../../hooks/useProgress';
import { TextPart } from '../../../shared/TextPart';
import { bgInteract3 } from '../../../../constants/images';
import React from 'react';
import { WinStars } from '../../../shared/WinStars';

const StartsStyled = styled(WinStars)`
    margin-top: 22.1vw;
`;

const CakeWrapper = styled.div`
  position: relative;
  margin: 5px auto 0;
  width: 46.1vw;
  height: 72vw;
  max-width: 172px;
  max-height: 269px;
  background: url(${cakeFinished}) no-repeat;
  background-size: contain;
  z-index: 4;
`;

const ButtonStyled = styled(ButtonCentered)`
    margin-top: -8px;
`;

export const PostInteract3 = () => {
    const {next} = useProgress();
    return (
        <TextPart background={bgInteract3} isBlurred isNeedTap={false}>
            <StartsStyled />
            <CakeWrapper />
            <ButtonStyled onClick={next}>Бежим угощать!</ButtonStyled>
        </TextPart>
    )
}