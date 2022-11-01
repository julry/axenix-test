import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { useProgress } from '../../../hooks/useProgress';

export const Question8 = () => {
    const {answers} = useProgress();
    const answerId = answers['0'] || '1';
    return <QuestionWrapper question={getQuestionById('8-' + answerId)} />
};
