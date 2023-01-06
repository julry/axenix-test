import React from 'react';
import styled from 'styled-components';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper, Person, PersonWrapper } from './wrappers';

const ContentPart = styled.div`
  margin: auto 0 5.9%;
  height: 360px;
  display: flex;
  align-items: center;
  z-index: 5;
`;
export const QuestionPart = (props) => {
    const {background, person, onClick} = props;
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={background} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper onClick={onClick}>
                {person && (
                    <PersonWrapper>
                        <Person src={person} alt={''} />
                    </PersonWrapper>
                )}
                <ContentPart>
                    {props.children}
                </ContentPart>
            </ContentWrapper>
        </>
    )
}