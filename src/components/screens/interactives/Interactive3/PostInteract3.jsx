import React from 'react';
import styled from 'styled-components';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { useProgress } from '../../../../hooks/useProgress';
import { bgInteract3 } from '../../../../constants/images';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { TextPart } from '../../../shared/TextPart';
import { WinStars } from '../../../shared/WinStars';
import cakeFinished from './svg/cakeFinished.svg';

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
    const onNext = () => {
        reachMetrikaGoal('q14_finish');
        next();
    };
    return (
        <TextPart background={bgInteract3} isBlurred isNeedTap={false}>
            <StartsStyled/>
            <CakeWrapper/>
            <ButtonStyled onClick={onNext}>Бежим угощать!</ButtonStyled>
        </TextPart>
    );
};
