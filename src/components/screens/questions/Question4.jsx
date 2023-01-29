import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { useProgress } from '../../../hooks/useProgress';

export const Question4 = () => {
    const {answers} = useProgress();
    const answerId = answers['1'] || '1';
    return <QuestionWrapper question={getQuestionById('4-' + answerId)} questionMetrika={'q4'}/>;
};
