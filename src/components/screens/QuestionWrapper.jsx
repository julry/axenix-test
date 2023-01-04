import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { questions } from '../../questions.config';
import { Button } from '../shared/Button';

const AnswerWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  
  & + & {
    margin-top: 10px;
  }
`;

export const QuestionWrapper = props => {
    const { question, image } = props;
    const { answers, updateAnswer, next, screen } = useProgress();

    // const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    // const questionsCount = questions.length;
    //

    //Подумать насчет 2 экранов сразу тут же - менять по состоянию, то есть сначала покажется текст + фотка,
    // потом состояние поменяется по нажатию на экран и отоборажать уже экран
    //тут загвоздка с внезапным левым челом на каком-то из последних вопросов


    const onNext = () => {
        // const goal = questionNumber === questionsCount ? 'finishtest' : `question${questionNumber}`;
        // reachMetrikaGoal(goal);
        next();
    };

    const handleAnswerChange = useCallback((answerId) => {
        updateAnswer(question.id, answerId);
        onNext();
    }, [question, updateAnswer]);

    return (
        <div>
            <div>
                <div>
                    <p>{question?.id}</p>
                    <p>{question?.text}</p>
                    <p>{question?.question}</p>
                    <div>
                        {question?.answers.map(answer => (
                            <AnswerWrapper
                                key={answer.id}
                                onClick={() => handleAnswerChange(answer.id)}
                            >
                                <p>{answer.text}</p>
                            </AnswerWrapper>
                        ))}
                    </div>
                </div>
                <Button onClick={next}>dalee</Button>
            </div>
        </div>
    );
};