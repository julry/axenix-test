import React, { useState } from 'react';
import { getQuestionById } from '../../../utils/getQuestionById';
import { QuestionWrapper } from '../QuestionWrapper';

export const Question1 = () => {
    return <QuestionWrapper question={getQuestionById('1')} />
}
