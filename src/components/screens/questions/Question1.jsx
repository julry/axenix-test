import React from 'react';
import styled from 'styled-components';
import { getQuestionById } from '../../../utils/getQuestionById';
import { QuestionWrapper } from '../QuestionWrapper';

const QuestionWrapperStyled = styled(QuestionWrapper)`
  & .question_content {
    @media screen and (max-width: 320px) {
      height: 250px;
    }
  }
`;

export const Question1 = () => {
    return <QuestionWrapperStyled metrikaTextPart={'morning'} question={getQuestionById('1')} questionMetrika={'q1'}/>;
};
