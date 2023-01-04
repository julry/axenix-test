import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from '../../../shared/Button';
import { useProgress } from '../../../../hooks/useProgress';
import { lines, sides } from './lines.config';
import { Board } from './Board';
import { BackgroundWrapper, ContentWrapper, BackgroundBlurred } from '../../../shared/wrappers';
import cake from './svg/cake.svg';
import final from './svg/final.svg';
import { colors } from '../../../../constants/colors';
import { Arrow } from './svg/Arrow';
import { bgInteract3 } from '../../../../constants/images';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  --board-size: 313px;
  --button-size: 66px;
  
  @media screen and (max-width: 315px) {
    --button-size: 48px;
    --board-size: 265px;
  }

  @media screen and (min-width: 700px) {
    --button-size: 80px;
    --board-size: 500px;
  }
`;

const CakeWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(${({top}) => top} * (var(--board-size) / 6 - 2px));
  left: calc(${({left}) => left} * (var(--board-size) / 6 - 2px));
  width: calc(var(--board-size) / 6 - 8px);
  height: calc(var(--board-size)  / 6 - 10px);
  transition: left 0.55s ease-in, top 0.55s ease-in;
  padding-top: 2px;
  animation: ${({bumping}) => bumping === 'horizontal' ? bumpHorizontal : bumping === 'vertical' ? bumpVertical : '' } 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  
  @media screen and (max-width: 315px){
    width: calc(var(--board-size) / 6 - 10px);
    height: calc(var(--board-size) / 6 - 8px);
  }
`;

const FinalWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: calc(var(--board-size) / 3);
  height: calc(var(--board-size) / 6);
  background: url(${final}) no-repeat 50% 50%;
`;

const bumpHorizontal = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
`;

const bumpVertical = keyframes`
  10%, 90% {
    transform: translate3d(0, -1px, 0);
  }

  20%, 80% {
    transform: translate3d(0, 1px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(0, -3px, 0);
  }

  40%, 60% {
    transform: translate3d(0, 3px, 0);
  }
`;

const Cake = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--button-size);
  height: var(--button-size);
  & + & {
    margin-top: 20px;
  }
  
  @media screen and (max-width: 315px) {
    & + & {
      margin-top: 10px;
    }
  }
`;

const ArrowStyled = styled(Arrow)`
  width: calc(var(--button-size) / 2.2);
  height: calc(var(--button-size) / 2.5);
  ${({styles}) => styles};
`;

const INITIAL_CELL = lines[0];

export const Interactive3 = () => {
    const [activeCell, setActiveCell] = useState(INITIAL_CELL);
    const [bumping, setBumping] = useState('');
    const {next} = useProgress();
    const cakeRef = useRef();
    //bump animation

    const onMove = (side) => {
        if (activeCell[side] || !cakeRef.current) {
            setBumping(() => ([sides.right, sides.left].includes(side) ? 'horizontal' : 'vertical'));
            setTimeout(() => setBumping(''), 820);
            return;
        }
        let nextX = activeCell.x, nextY = activeCell.y;
        switch (side) {
            case sides.top:
                nextY -= 1;
                break;
            case sides.bottom:
                nextY += 1;
                break;
            case sides.left:
                nextX -= 1;
                break;
            case sides.right:
                nextX += 1;
                break;
            default:
                break;
        }
        if (nextX < 0 || nextY < 0) return;
        const nextCell = lines.find(line => line.x === nextX && line.y === nextY);
        setActiveCell(nextCell);
        if (nextCell.isFinal) setTimeout(() => next(), 800);

    }
    const getStylesArrowBySide = (side) => {
        switch (side) {
            case sides.top:
                return `
                    margin-bottom: 15%;
                `
            case sides.bottom:
                return `
                    transform: rotate(180deg);
                    margin-top: 15%;
                `
            case sides.left:
                return `
                    transform: rotate(-90deg);
                    margin-right: 15%;
                `
            case sides.right:
                return `
                    transform: rotate(90deg);
                    margin-left: 15%;
                `
            default:
                break;
        }
    }
    return (
        <Wrapper>
            <ContentWrapper>
                <Board lines={lines}>
                    <CakeWrapper ref={cakeRef} top={activeCell.y} left={activeCell.x} bumping={bumping}>
                        <Cake src={cake} alt={''}/>
                    </CakeWrapper>
                    <FinalWrapper />
                </Board>
                <ButtonsBlock>
                    <ButtonStyled
                        onClick={() => onMove(sides.left)}
                        color={colors.purple}
                    >
                        <ArrowStyled styles={getStylesArrowBySide(sides.left)}/>
                    </ButtonStyled>
                    <VerticalButtonsBlock>
                        <ButtonStyled
                            onClick={() => onMove(sides.top)}
                            color={colors.orange}
                        >
                            <ArrowStyled styles={getStylesArrowBySide(sides.top)}/>
                        </ButtonStyled>
                        <ButtonStyled
                            onClick={() => onMove(sides.bottom)}
                            color={colors.orange}
                        >
                            <ArrowStyled styles={getStylesArrowBySide(sides.bottom)}/>
                        </ButtonStyled>
                    </VerticalButtonsBlock>
                    <ButtonStyled
                        onClick={() => onMove(sides.right)}
                        color={colors.purple}
                    >
                        <ArrowStyled styles={getStylesArrowBySide(sides.right)}/>
                    </ButtonStyled>
                </ButtonsBlock>
            </ContentWrapper>
            <BackgroundWrapper>
                <BackgroundBlurred src={bgInteract3} alt={''} />
            </BackgroundWrapper>
        </Wrapper>
    );
};