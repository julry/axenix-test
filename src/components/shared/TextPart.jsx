import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Background,
    BackgroundBlurred,
    BackgroundScaled,
    BackgroundWrapper,
    ContentWrapper,
    Person,
    PersonWrapper
} from './wrappers';
import { TapAnimated } from './TapAnimated';


const SecondPersonWrapper = styled(PersonWrapper)`
  left: auto;
  right: 0;
  z-index: 1;
  height: ${({height}) => height};
  width: ${({width}) => width};
  justify-content: flex-start;
`;

const ChildrenWrapper = styled.div`
  z-index: 5;
`;

const Tap = styled(TapAnimated)`
  position: fixed;
  bottom: 8vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7;
`;

export const TextPart = (props) => {
    const [isShowTap, setIsShowTap] = useState(false);
    const {
        background, isScaled, person, personHeight, onClick, personWidth, isBlurred, secondPerson = {}, isNeedTap = true
    } = props;
    const {photo, width, height} = secondPerson;
    const BackgroundComponent = isScaled ? BackgroundScaled : isBlurred ? BackgroundBlurred : Background;

    const setShowTapDelay = useCallback(() => {
        if (!isNeedTap) return;
        setTimeout(() => {setIsShowTap(true)}, 5250)
        setTimeout(() => setIsShowTap(false), 9000);
    }, [isNeedTap]);

    useEffect(() => {
        setIsShowTap(false);
        setShowTapDelay();
    }, [props]);

    return (
        <>
            <BackgroundWrapper>
                <BackgroundComponent src={background} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper onClick={onClick}>
                {person && (
                    <PersonWrapper height={personHeight} width={personWidth}>
                        <Person src={person} alt={''}/>
                    </PersonWrapper>
                )}
                {secondPerson.photo && (
                    <SecondPersonWrapper width={width} height={height}>
                        <Person src={photo} alt={''}/>
                    </SecondPersonWrapper>
                )}
                <ChildrenWrapper>
                    {props.children}
                </ChildrenWrapper>
                {isShowTap && <Tap/>}
            </ContentWrapper>
        </>
    )
}