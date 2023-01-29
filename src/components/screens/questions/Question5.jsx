import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question5 = () => (
    <QuestionWrapper question={getQuestionById('5')} questionMetrika={'q5'}/>
);
