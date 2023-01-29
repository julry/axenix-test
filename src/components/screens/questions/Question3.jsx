import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question3 = () => (
    <QuestionWrapper question={getQuestionById('3')} questionMetrika={'q3'}/>
);
