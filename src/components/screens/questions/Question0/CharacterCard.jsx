import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { Description } from '../../../shared/styledTexts';
import { opacityAnim } from '../../../shared/keyframes';
import './characterChoose.css';

const CharacterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CharacterImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const CharacterInfo = styled.div`
  position: absolute;
  bottom: 10px;
  right: calc((100vw - 72.53vw) / -2 - 20px);
  background: white;
  opacity: ${({isOpacity}) => isOpacity ? 0 : 1};
  min-width: 53.333vw;
  padding: 6.6vw 4vw;
  border: 2px solid ${colors.purple};
  border-radius: 13px 0 0 13px;
  border-right: none;
  transform: matrix(1, 0, 0.2, 1, 0, 0);
  animation: ${({isOpacity}) => isOpacity ? opacityAnim : ''} 300ms forwards;
  animation-delay: 350ms;
  transition: opacity 300ms;
  white-space: pre;

  & ${Description} {
    transform: matrix(1, 0, -0.2, 1, 0, 0);
  }

  @media screen and (max-width: 310px) {
    min-width: 170px;
  }
`;


export const CharacterCard = (props) => {
    const {photo, post, name, changed} = props;
    const [isOpacity, setIsOpacity] = useState(false);

    useEffect(() => {
        if (changed) {
            setIsOpacity(true);
        }
    }, []);

    return (
        <CharacterWrapper
            className={'slide'}
            key={photo}
        >
            <CharacterImage src={photo}/>
            <CharacterInfo isOpacity={isOpacity}>
                <Description>
                    {`${name}, ${post}`}
                </Description>
            </CharacterInfo>
        </CharacterWrapper>
    );
};
