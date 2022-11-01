import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question2 = () => (
    <QuestionWrapper question={getQuestionById('2')} />
)
