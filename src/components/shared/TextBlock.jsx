import React from 'react';
import styled from 'styled-components';
import { Description } from './styledTexts';

const Block = styled.div`
  width: 100%;
  background: ${({background}) => background};
  color: ${({color}) => color};
  padding: 6.6vw 10.1vw ${({hasNextPart}) => hasNextPart ? '6.6vw' : '11.5vw'};
  ${({styles}) => styles};
`;

const NextPart = styled.p`
  font-size: 40px;
  width: 100%;
  line-height: 15px;
  text-align: center;
`;

const DescriptionStyled = styled(Description)`
  max-width: 18.75em;
`;

export const TextBlock = (props) => {
    const {textBg, styles, textColor} = props;
    const {hasNextPart} = props;
    return (
        <Block className={props.className} background={textBg} color={textColor} hasNextPart={hasNextPart} styles={styles}>
            <DescriptionStyled>
                {props.children}
            </DescriptionStyled>
            {hasNextPart && <NextPart>. . .</NextPart>}
        </Block>
    )
}