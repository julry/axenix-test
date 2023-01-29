import React from 'react';
import styled from 'styled-components';
import { Background, BackgroundWrapper, ContentWrapper } from '../shared/wrappers';
import { TextButtonBlock } from '../shared/TextButtonBlock';
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

const BoldText = styled(Description)`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LogoScreen = (props) => {
    const {boldText, text, btnText, onClick, isNeedTap} = props;
    return (
        <Wrapper>
            <ContentWrapper>
                <LogoStyled/>
                <TextButtonBlock onClick={onClick} text={btnText} isNeedTap={isNeedTap}>
                    <BoldText>{boldText}</BoldText>
                    <Description>
                        {typeof (text) === 'function' ? text?.() : text}
                    </Description>
                </TextButtonBlock>
            </ContentWrapper>
            <BackgroundWrapper>
                <Background src={gradientBg} alt={''}/>
            </BackgroundWrapper>
        </Wrapper>
    );
};
