import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { woodBg } from '../../../../constants/images';
import { Background, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { TextBlock } from '../../../shared/TextBlock';
import puzzleBoard from './svgs/puzzleBoard.svg';
import { Board } from './Board';
import { ButtonCentered } from '../../../shared/ButtonCentered';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextBlockStyled = styled(TextBlock)`
  margin-top: min(21.4vw, 13vh);
  padding-bottom: 6.6vw;
`;

const PuzzlesImgWrapper = styled.div`
  margin-top: 4.997%;
  width: 100%;
  height: calc(100vw / 1.289);
  position: relative;
  overflow: hidden;
`;

const BoardStyled = styled(Board)`
  margin: 5% auto 0;
  
  @media screen and (min-width: 700px) {
    height: calc(100vw / 1.289 - 8%);
    width: calc(100vw / 1.289 - 8%);
    background-size: cover;
  }
`;

const PuzzlesImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const PreInteract2 = () => {
    const {character, next} = useProgress();
    return (
        <Wrapper>
            <BackgroundWrapper>
                <Background src={woodBg} alt={''} />
            </BackgroundWrapper>
            <ContentWrapper>
                <TextBlockStyled textBg={character.textBg} textColor={character.textColor}>
                    {'Ты решил записаться на курсы\nанглийского, но забыл пароль\nот учетной записи :('}
                </TextBlockStyled>
                <PuzzlesImgWrapper>
                    <BoardStyled />
                    <PuzzlesImg src={puzzleBoard} alt={''} />
                </PuzzlesImgWrapper>
                <ButtonCentered onClick={next}>Собрать</ButtonCentered>
            </ContentWrapper>
        </Wrapper>
    )
}