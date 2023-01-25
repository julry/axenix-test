import styled from 'styled-components';
import { colors } from '../../constants/colors';

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background: ${({backgroundColor}) => backgroundColor};
  border-radius: 7px;
  width: 251px;
  height: 41px;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const Button = (props) => {
    const backgroundColor = props.color ?? `linear-gradient(57.48deg, ${colors.purple} 8.32%, ${colors.orange} 86.03%)`;
    return <ButtonStyled {...props} backgroundColor={backgroundColor}>{props.children}</ButtonStyled>
};
