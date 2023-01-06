import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Background, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import gradientBg from '../../../shared/svg/gradientBg.svg';
import { useProgress } from '../../../../hooks/useProgress';
import { Button } from '../../../shared/Button';
import { characters } from '../../../../characters.config';
import { CharacterCard } from './CharacterCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './characterChoose.css';
import { Title } from '../../../shared/styledTexts';
import { Arrow } from './svg/Arrow';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentWrapperStyled = styled(ContentWrapper)`
    align-items: center;
`;

const ChooseWrapper = styled.div`
  height: 57.42%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CharacterWrapper = styled.div`
  width: 72.53vw;
  display: flex;
  height: 100%;
`;

const TitleStyled = styled(Title)`
  width: 68.8vw;
  color: white;
  margin: 22.5% 0 15px;
`;

const ArrowStyled = styled(Arrow)`
  width: 18px;
  height: 30px;
`;

const ArrowRight = styled(ArrowStyled)`
    transform: rotate(180deg);
`;

export const Question0 = () => {
    const {updateProgress, next} = useProgress();
    const [curCharacterIndex, setCurCharacterIndex] = useState(0);
    const [side, setSide] = useState('');
    const nodeRef = useRef(null);

    const onPrev = () => {
        const characterId = (curCharacterIndex || characters.length) - 1;
        setCurCharacterIndex(characterId);
        setSide('prev');
    }

    const onNext = () => {
        const characterId = (curCharacterIndex + 1) % characters.length;
        setCurCharacterIndex(characterId);
        setSide('next');
    }

    const addEndListener = (node, done) => {
        node.addEventListener("transitionend", done, false);
    }

    const onChoose = () => {
        updateProgress('character', characters[curCharacterIndex]);
        next();
    }

    return (
        <Wrapper>
            <ContentWrapperStyled>
                <TitleStyled>
                    {'Выбери своего\nперсонажа:'}
                </TitleStyled>
                <ChooseWrapper>
                    <ArrowStyled onClick={onPrev}/>
                    <CharacterWrapper className={side}>
                        <TransitionGroup component={null}>
                            <CSSTransition
                                key={curCharacterIndex}
                                classNames="slide"
                                addEndListener={addEndListener}
                            >
                                <CharacterCard
                                    side={side}
                                    changed={!!side}
                                    id={curCharacterIndex}
                                    {...characters[curCharacterIndex]}
                                />
                            </CSSTransition>
                        </TransitionGroup>
                    </CharacterWrapper>
                    <ArrowRight onClick={onNext} />
                </ChooseWrapper>
                <Button onClick={onChoose}>Выбрать</Button>
            </ContentWrapperStyled>
            <BackgroundWrapper>
                <Background src={gradientBg} alt={''}/>
            </BackgroundWrapper>
        </Wrapper>
    );
}
