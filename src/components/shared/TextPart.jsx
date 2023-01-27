import React from 'react';
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


export const TextPart = (props) => {
    const {
        background, isScaled, person, personHeight, personWidth, isBlurred,
        secondPerson = {}
    } = props;
    const {photo, width, height} = secondPerson;
    const BackgroundComponent = isScaled ? BackgroundScaled : isBlurred ? BackgroundBlurred : Background;

    return (
        <>
            <BackgroundWrapper>
                <BackgroundComponent src={background} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper>
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
            </ContentWrapper>
        </>
    );
};
