import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question1 = () => (
    <QuestionWrapper question={getQuestionById('1')} />
)
