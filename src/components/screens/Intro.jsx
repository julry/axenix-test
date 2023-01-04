import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { TextButtonBlock } from '../shared/TextButtonBlock';
import { Background, BackgroundWrapper, ContentWrapper } from '../shared/wrappers';
import { Description } from '../shared/styledTexts';
import gradientBg from '../shared/svg/gradientBg.svg';
import { Logo } from './interactives/Interactive3/svg/Logo';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 23% 12.3vw;
`;

const LogoStyled = styled(Logo)`
  width: 30.7vw;
  height: 17.33vw;
  max-width: 115px;
  max-height: 65px;
  margin: 0 auto 13%;
`;

export const Intro = () => {
    const {next} = useProgress();

    return (
        <Wrapper>
            <ContentWrapper>
                <LogoStyled />
                <TextButtonBlock onClick={next} text={'Choose your Axenix fighter!'}>
                    <Description>
                        <b>Привет!</b>{'\n'}
                        Добро пожаловать{'\n'}в карьерный акселератор{'\n'}от Axenix.{'\n'}{'\n'}
                        Выбирай персонажа,{'\n'}за которого будешь играть,{'\n'}отвечай на вопросы{'\n'}и помни – твои
                        решения
                        {'\n'}влияют на ход игры :)
                    </Description>
                </TextButtonBlock>
            </ContentWrapper>
            <BackgroundWrapper>
                <Background src={gradientBg} alt={''}/>
            </BackgroundWrapper>
        </Wrapper>
    );
};
