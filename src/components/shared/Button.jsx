import styled from 'styled-components';

const ButtonStyled = styled.button`
  outline: none;
  border: none;
`;

export const Button = (props) => {
    return <ButtonStyled {...props}>{props.children}</ButtonStyled>
};
