import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { TextPart } from '../shared/TextPart';
import { QuestionPart } from '../shared/QuestionPart';
import { QuestionField } from '../shared/QuestionField';
import { TextBlock } from '../shared/TextBlock';
import { colors } from '../../constants/colors';
import { DescriptionSm } from '../shared/styledTexts';

const QuestionContent = styled.div`
  width: 100%;
  padding: 0 6vw 0 ${({isShort}) => isShort ? '12.5vw' : '6vw'};
  margin-bottom: 10.5vw;
`;


const TextBlockWrapper = styled.div`
  position: absolute;
  bottom: 6vw;
  min-height: 210px;
  max-height: 250px;
  width: 100%;
  ${({styles}) => styles};
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const AnswerWrapper = styled.div`
  padding: 10px;
  user-select: none;
  background: ${({chosen}) => chosen ? 'linear-gradient(57.48deg, #5F308C 8.32%, #F37022 86.03%)' : 'white'};
  border: ${({chosen}) => chosen ? 0 : '1.5px'} solid ${colors.purple};
  border-radius: ${({isShort}) => isShort ? '30px' : '20px'};
  cursor: pointer;
  color: ${({chosen}) => chosen ? 'white' : 'black'};
  margin-top: 10px;
  text-align: ${({isShort}) => isShort ? 'center' : 'left'};
  width: ${({isShort}) => isShort ? '74px' : '100%'};
`;

export const QuestionWrapper = props => {
    const { question } = props;
    const { answers, updateAnswer, next } = useProgress();
    const {character} = useProgress();
    const [part, setPart] = useState('text');
    const [text, setText] = useState(question?.text || '');
    const {photo, questionsBgs, textBg} = character;
    const background = questionsBgs[question?.id] || question?.image;

    const {noCharacterText, textBlockStyles, characterQuestion, isShort} = question;

    const onNext = () => {
        // const goal = questionNumber === questionsCount ? 'finishtest' : `question${questionNumber}`;
        // reachMetrikaGoal(goal);
        setTimeout(() => next(), 300);
    };

    const handleAnswerChange = useCallback((answerId) => {
        updateAnswer(question?.id, answerId);
        onNext();
    }, [question, updateAnswer]);


    const setNext = () => {
        if (question?.text2 && text !== question.text2) {
            setText(question.text2);
            return;
        }
         setPart('question');
    }

    return part === 'text' ? (
        <TextPart background={background} person={!noCharacterText && photo} isScaled={true} onClick={setNext}>
            <TextBlockWrapper styles={textBlockStyles}>
                <TextBlock textBg={textBg} hasNextPart>
                    {text}
                </TextBlock>
            </TextBlockWrapper>
        </TextPart>
    ) : (
        <QuestionPart background={background} person={characterQuestion && photo}>
            <QuestionContent isShort={isShort}>
                <QuestionField color={textBg}>
                    {question?.question}
                </QuestionField>
                <Answers>
                    {question?.answers.map(answer => (
                        <AnswerWrapper
                            isShort={isShort}
                            chosen={answers[question?.id] === answer.id}
                            key={answer.id}
                            onClick={() => handleAnswerChange(answer.id)}
                        >
                            <DescriptionSm>{answer.text}</DescriptionSm>
                        </AnswerWrapper>
                    ))}
                </Answers>
            </QuestionContent>
        </QuestionPart>
    )
};