import { AnswerType, resultTypes } from '../answerTypes.config';
import { getAnswerById } from '../utils/getAnswerById';
import { useProgress } from '../hooks/useProgress';
import { getPointsDetailInfo } from '../utils/getMaxPointsPart';

const DEFAULT_RESULT = AnswerType.communication;
const DEFAULT_RESULT_POINTS = {
    [AnswerType.communication]: 0,
    [AnswerType.career]: 0,
    [AnswerType.caring]: 0,
    [AnswerType.leadership]: 0,
    [AnswerType.flexibility]: 0,
};

export const useResult = () => {
    const { answers } = useProgress();

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId || questionId === '0') return res;
        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
        const positivePoints = type.positive
            .reduce((result, t) => ({ ...result, [t]: (result[t] || 0) + 1 }), {...res});
        const negativePoints = type.negative
            .reduce((result, t) => ({ ...result, [t]: ((result[t] || 0) - 1 > 0 ) ? ((result[t] || 0) - 1) : 0 }), {...positivePoints});
        return { ...res, ...negativePoints};
    }, {...DEFAULT_RESULT_POINTS})

    const detailedPoints = getPointsDetailInfo(resultPoints);
    const minPoints = Math.min(...detailedPoints.map(points => points.part));
    const finalTypes = detailedPoints.filter(points => points.part === minPoints);
    let resultType = finalTypes[0]?.type;

    return ({
        points: detailedPoints.length ? detailedPoints : getPointsDetailInfo(DEFAULT_RESULT_POINTS),
        result: resultTypes[resultType || DEFAULT_RESULT]
    });
};
