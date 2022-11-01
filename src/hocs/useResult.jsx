import { AnswerType, resultTypes } from '../answerTypes.config';
import { getAnswerById } from '../utils/getAnswerById';
import { useProgress } from '../hooks/useProgress';
import { getPointsDetailInfo } from '../utils/getMaxPointsPart';

const DEFAULT_RESULT = AnswerType.communication;

export const useResult = () => {
    const { answers } = useProgress();

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;
        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
        const positivePoints = type.positive
            .reduce((result, t) => ({ ...result, [t]: (result[t] || 0) + 1 }), {...res});
        const negativePoints = type.negative
            .reduce((result, t) => ({ ...result, [t]: ((result[t] || 0) - 1 > 0 ) ? ((result[t] || 0) - 1) : 0 }), {...positivePoints});
        return { ...res, ...negativePoints};
    }, {})

    const detailedPoints = getPointsDetailInfo(resultPoints);
    const minPoints = Math.min(...detailedPoints.map(points => points.part));
    const finalTypes = detailedPoints.filter(points => points.part === minPoints);
    let resultType = finalTypes[0].type;

    return ({points: detailedPoints, result: resultTypes[resultType || DEFAULT_RESULT]});
};
