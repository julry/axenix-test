import React from 'react';
import styled from 'styled-components';
import { Background, BackgroundScaled, BackgroundWrapper, ContentWrapper, Person, PersonWrapper } from './wrappers';


const SecondPersonWrapper = styled(PersonWrapper)`
  width: 49.8666vw;
  left: auto;
  right: 0;
  z-index: 1;
`;

const ChildrenWrapper = styled.div`
    z-index: 5;
`;

export const TextPart = (props) => {
    const {background, isScaled, person, secondPerson, onClick} = props;
    const BackgroundComponent = isScaled ? BackgroundScaled : Background;
    return (
        <>
            <BackgroundWrapper>
                <BackgroundComponent src={background} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper onClick={onClick}>
                {person && (
                    <PersonWrapper>
                        <Person src={person} alt={''} />
                    </PersonWrapper>
                )}
                {secondPerson && (
                    <SecondPersonWrapper>
                        <Person src={secondPerson} alt={''} />
                    </SecondPersonWrapper>
                )}
                <ChildrenWrapper>
                    {props.children}
                </ChildrenWrapper>
            </ContentWrapper>
        </>
    )
}