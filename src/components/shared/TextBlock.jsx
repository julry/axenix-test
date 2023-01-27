import React from 'react';
import styled from 'styled-components';
import { Description } from './styledTexts';
import { ArrowRight } from './svg/ArrowRight';

const Block = styled.div`
  ${({hasNextPart}) => hasNextPart ? 'position: relative;' : ''};
  width: 100%;
  background: ${({background}) => background};
  color: ${({color}) => color};
  padding: 6.6vw 10.1vw ${({hasNextPart}) => hasNextPart ? '6.6vw' : '11.5vw'};
  ${({styles}) => styles};
`;

const NextPart = styled.div`
  position: absolute;
  bottom: -21px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 8px 20px;
`;

const DescriptionStyled = styled(Description)`
  max-width: 18.75em;
`;

const Arrow = styled(ArrowRight)`
  width: 32px;
  height: 22px;
`;

export const TextBlock = (props) => {
    const {textBg, styles, textColor} = props;
    const {hasNextPart, onClick} = props;
    return (
        <Block className={props.className} background={textBg} color={textColor} hasNextPart={hasNextPart} styles={styles}>
            <DescriptionStyled>
                {props.children}
            </DescriptionStyled>
            {hasNextPart && <NextPart onClick={onClick}>
               <Arrow />
            </NextPart>}
        </Block>
    );
};
