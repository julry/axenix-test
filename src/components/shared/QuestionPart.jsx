import React from 'react';
import styled from 'styled-components';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper, Person, PersonWrapper } from './wrappers';

const ContentPart = styled.div`
  margin: auto 0 5.9%;
  height: 360px;
  display: flex;
  align-items: center;
  z-index: 5;
  
  @media screen and (min-width: 640px) and (min-height: 600px){
    height: 500px;
  }
`;
export const QuestionPart = (props) => {
    const {background, person, onClick, personHeight, personWidth} = props;
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={background} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper onClick={onClick} className={props.className}>
                {person && (
                    <PersonWrapper height={personHeight} width={personWidth}>
                        <Person src={person} alt={''}/>
                    </PersonWrapper>
                )}
                <ContentPart className={'question_content'}>
                    {props.children}
                </ContentPart>
            </ContentWrapper>
        </>
    );
};
