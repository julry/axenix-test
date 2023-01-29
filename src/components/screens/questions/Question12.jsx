import styled from 'styled-components';
import { QuestionWrapper } from '../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';
import { present } from '../../../constants/images';

const Present = styled.div`
  position: absolute;
  width: 22.9vw;
  height: 24.4vw;
  max-height: 120px;
  max-width: 100px;
  right: 7.6vw;
  top: calc(-24.4vw + 19px);
  background: url(${present}) no-repeat;
  background-size: contain;

  @media screen and (min-width: 400px) {
    top: -85px;
  }
`;

export const Question12 = () => (
    <QuestionWrapper question={getQuestionById('12')} questionMetrika={'q15'}>
        <Present/>
    </QuestionWrapper>
);

