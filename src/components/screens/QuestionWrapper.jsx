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
  padding: 11.5px;
  user-select: none;
  background: ${({chosen}) => chosen ? 'linear-gradient(57.48deg, #5F308C 8.32%, #F37022 86.03%)' : 'white'};
  box-shadow: inset 0 0 0 ${({chosen}) => chosen ? '0' : '1.5px'} ${colors.purple};
  border-radius: ${({isShort}) => isShort ? '30px' : '20px'};
  cursor: pointer;
  color: ${({chosen}) => chosen ? 'white' : 'black'};
  margin-top: 10px;
  text-align: ${({isShort}) => isShort ? 'center' : 'left'};
  width: ${({isShort}) => isShort ? '5.3em' : '100%'};

  @media screen and (min-width: 640px) and (min-height: 600px){
    padding: ${({isShort}) => isShort ? '15px' : '15px 35px'};
  }
`;

const DescriptionStyled = styled(Description)`
  max-width: 20.625em;
`;

const DescriptionSmStyled = styled(DescriptionSm)`
  max-width: 23.75em;
`;

export const QuestionWrapper = props => {
    const { question } = props;
    const { answers, updateAnswer, next, character } = useProgress();
    const [part, setPart] = useState('text');
    const [text, setText] = useState(question?.text || '');
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
        if (question?.text2 && text !== question.text2) {
            setText(question.text2);
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
            personHeight={character.height}
            secondPerson={question.anotherCharacter}
            onClick={setNext}
            className={props.className}
        >
            <TextBlockWrapper styles={textBlockStyles}>
                <TextBlock textBg={textBg} textColor={textColor} hasNextPart>
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
                    <DescriptionStyled>
                        {question?.question}
                    </DescriptionStyled>
                </QuestionField>
                <Answers>
                    {question?.answers.map(answer => (
                        <AnswerWrapper
                            isShort={isShort}
                            chosen={answers[question?.id] === answer.id}
                            key={answer.id}
                            onClick={() => handleAnswerChange(answer)}
                        >
                            <DescriptionSmStyled>{answer.text}</DescriptionSmStyled>
                        </AnswerWrapper>
                    ))}
                </Answers>
            </QuestionContent>
            {!!notificationList.length &&
                notificationList.map((notif, id) => (
                    <Notification id={id}>
                        <Description>{notif}</Description>
                    </Notification>
                ))
            }
        </QuestionPart>
    )
};