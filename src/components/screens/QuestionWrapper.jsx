import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { TextPart } from '../shared/TextPart';
import { QuestionPart } from '../shared/QuestionPart';
import { QuestionField } from '../shared/QuestionField';
import { TextBlock } from '../shared/TextBlock';
import { colors } from '../../constants/colors';
import { Description, DescriptionSm } from '../shared/styledTexts';
import { AnswerTypeRusNotif } from '../../answerTypes.config';
import { Notification } from '../shared/Notification';

const QuestionContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto ${({isShort}) => isShort ? '0' : '10.5vw'};
  padding: 0 6vw 0 ${({isShort}) => isShort ? '12.5vw' : '6vw'};
`;

export const TextBlockWrapper = styled.div`
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
  display: flex;
  align-items: center;
  padding: 11.5px;
  user-select: none;
  background: ${({chosen}) => chosen ? 'linear-gradient(57.48deg, #5F308C 8.32%, #F37022 86.03%)' : 'white'};
  box-shadow: inset 0 0 0 ${({chosen}) => chosen ? '0' : '1.5px'} ${colors.purple};
  border-radius: ${({isShort}) => isShort ? '30px' : '20px'};
  cursor: pointer;
  color: ${({chosen}) => chosen ? 'white' : 'black'};
  margin-top: 10px;
  text-align: ${({isShort}) => isShort ? 'center' : 'left'};
  width: ${({isShort}) => isShort ? '5.6em' : '100%'};

  @media screen and (min-width: 640px) and (min-height: 600px){
    padding: ${({isShort}) => isShort ? '15px' : '15px 25px'};
    width: ${({isShort}) => isShort ? '7.6em' : '100%'};
  }
`;

const Number = styled.p`
  font-size: 20px;
  background: ${({chosen}) => chosen ? 'white' : 'linear-gradient(57.48deg, #5F308C 8.32%, #F37022 86.03%)'};
  opacity: ${({chosen}) => chosen ? '0.3' : '1'};
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-right: 2.6vw;
  
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;


export const QuestionWrapper = props => {
    const { question, isShortTimeout } = props;
    const { answers, updateAnswer, next, character } = useProgress();
    const [part, setPart] = useState('text');
    const [text, setText] = useState(question.text?.[character.sex] || question.text || '');
    const [notificationList, setNotificationList] = useState([]);
    const {photo, questionsBgs, textBg, textColor} = character;
    const background = questionsBgs[question?.id] || question?.image;

    const {noCharacterText, textBlockStyles, characterQuestion, isShort} = question;

    const onNext = (timeout) => {
        // const goal = questionNumber === questionsCount ? 'finishtest' : `question${questionNumber}`;
        // reachMetrikaGoal(goal);
        setTimeout(() => next(), timeout);
    };

    const getNotifText = (type, typeText) => {
        const isPositive = type === 'positive';
        const positiveText = '+1 к ';
        const negativeText = '-1 от ';
        return (isPositive ? positiveText : negativeText) + typeText;
    }

    const handleAnswerChange = useCallback((answer = {}) => {
        if (answers[question?.id]) return;
        const { id, type } = answer;
        updateAnswer(question?.id, id);
        const notifList = Object.keys(type)
            .map(key => type[key].map(t => getNotifText(key, AnswerTypeRusNotif[t][key])))
            .flat();
        setNotificationList(notifList);
        const timeout = 400 + (notifList.length * 650);
        onNext(timeout);
    }, [question, updateAnswer]);


    const setNext = () => {
        const text2 = question.text2?.[character.sex] ?? question.text2;
        if (text2 && text !== text2) {
            setText(text2);
            return;
        }
         setPart('question');
    }

    return part === 'text' ? (
        <TextPart
            background={background}
            person={!noCharacterText && photo}
            personWidth={character.width}
            isScaled={true}
            isShortTimeout={isShortTimeout}
            personHeight={character.height}
            secondPerson={question.anotherCharacter}
            className={props.className}
        >
            <TextBlockWrapper styles={textBlockStyles}>
                <TextBlock textBg={textBg} textColor={textColor} onClick={setNext} hasNextPart>
                    {text}
                </TextBlock>
            </TextBlockWrapper>
        </TextPart>
    ) : (
        <QuestionPart
            background={background}
            person={characterQuestion && photo}
            personHeight={character.height}
            personWidth={character.width}
            className={props.className}
        >
            <QuestionContent isShort={isShort}>
                {props.children}
                <QuestionField color={textBg} textColor={textColor}>
                    <Description>
                        {question?.question}
                    </Description>
                </QuestionField>
                <Answers>
                    {question?.answers.map((answer, i) => (
                        <AnswerWrapper
                            isShort={isShort}
                            chosen={answers[question?.id] === answer.id}
                            key={answer.id}
                            onClick={() => handleAnswerChange(answer)}
                        >
                            <Number
                                chosen={answers[question?.id] === answer.id}
                            >
                                {i + 1}
                            </Number>
                            <DescriptionSm>{answer.text[character.sex] ?? answer.text}</DescriptionSm>
                        </AnswerWrapper>
                    ))}
                </Answers>
            </QuestionContent>
            {!!notificationList.length &&
                notificationList.map((notif, id) => (
                    <Notification id={id} key={notif}>
                        <Description>{notif}</Description>
                    </Notification>
                ))
            }
        </QuestionPart>
    )
};