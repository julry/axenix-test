import { AnswerType, AnswerTypeRus, MAX_POINTS } from '../answerTypes.config';

export const getPointsDetailInfo = (points) => Object.keys(points).map(key => ({
    points: points[key],
    type: AnswerType[key],
    name: AnswerTypeRus[key],
    max: MAX_POINTS[key],
    part: points[key] / MAX_POINTS[key]
}));
