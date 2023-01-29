import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question10 = () => (
    <QuestionWrapper question={getQuestionById('10')} questionMetrika={'q12'}/>
);
