import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import styled from 'styled-components';
import Draggable from "gsap/Draggable";
import { Button } from '../../../shared/Button';
import { useProgress } from '../../../../hooks/useProgress';
import { LinesGame } from './svg/LinesGame';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import box_open from './svg/box_open.svg'
import { WinStars } from '../../../shared/WinStars';
import { bgInteract1 } from '../../../../constants/images';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WrapperGame = styled.div`
  position: relative;
  width: 286px;
  height: 242px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
`;

const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
  margin: 12.4% 0;
  background: url(${box_open}) no-repeat 50% 50%;
  
  @media screen and (min-width: 400px) {
    transform: scale(1.1);
  }

  @media screen and (min-width: 700px) {
    transform: scale(1.5);
  }
`;

const Dump = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 32;
  width: 286px;
  height: 242px;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translateX(-50%);
`;

export const WinStarsStyled = styled(WinStars)`
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translate(-50%, -55px);
`;


export const Interactive1 = () => {
    const [completed, setCompleted] = useState([]);
    const [finished, setFinished] = useState(false);
    const {next} = useProgress();
    gsap.registerPlugin(Draggable);
    const gameRef = useRef();

    useEffect(() => {
        Draggable.create(".draggable-1", {
            type: "x,y",
            onDrag: function () { updateLine('.line-1', this.x + 24, this.y + 160, '#line-1_gradient'); },
            onRelease: function () {
                if (this.x < 190 || this.y > -145 || this.y < -170) {
                    reset(".draggable-1", '.line-1', 18, 160.5)
                    complete(0, false);
                } else {
                    complete(0, true);
                }
            },
            bounds: gameRef.current,
            liveSnap: {points: [{x: 208, y: -152.5}], radius: 35}
        });
        Draggable.create(".draggable-2", {
            type: "x,y",
            onDrag: function () { updateLine('.line-2', this.x + 24, this.y + 109.5, '#line-2_gradient'); },
            onRelease: function () {
                if (this.x < 190 || this.y > -45 || this.y < -60) {
                    reset(".draggable-2", '.line-2', 18, 109.5)
                    complete(1, false);
                } else {
                    complete(1, true);
                }
            },
            bounds: gameRef.current,
            liveSnap: {points: [{x: 208, y: -51}], radius: 35}
        });
        Draggable.create(".draggable-3", {
            type: "x,y",
            onDrag: function () { updateLine('.line-3', this.x + 24, this.y + 58.5, '#line-3_gradient'); },
            onRelease: function () {
                if (this.x < 190 || this.y > 110 || this.y < 95) {
                    reset(".draggable-3", '.line-3', 18, 58.5)
                    complete(2, false);
                } else {
                    complete(2, true);
                }
            },
            bounds: gameRef.current,
            liveSnap: {points: [{x: 208, y: 101.5}], radius: 35}
        });
        Draggable.create(".draggable-4", {
            type: "x,y",
            onDrag: function () { updateLine('.line-4', this.x + 24, this.y + 7.8, '#line-4_gradient'); },
            onRelease: function () {
                if (this.x < 190 || this.y > 110 || this.y < 95) {
                    reset(".draggable-4", '.line-4', 19, 7.8);
                    complete(3, false);
                } else {
                    complete(3, true);
                }
            },
            bounds: gameRef.current,
            liveSnap: {points: [{x: 208, y: 101.5}], radius: 35}
        });
    }, [])

    function updateLine(selector, x, y, selectorGr) {
        const x1 = gsap.getProperty(selector, "x1")?.baseVal?.value;
        const y1 = gsap.getProperty(selector, "y1")?.baseVal?.value;
        const width = gsap.getProperty(selector, "stroke-width");
        let dx = x - x1;
        let dy = y - y1;
        let len = Math.sqrt(dx*dx + dy*dy);
        dx = dx/len;
        dy = dy/len;

        let temp = dx;
        dx = -dy;
        dy = temp;

        dx = width * dx;
        dy = width * dy;

        const gradient_x1= x1 + dx*0.5;
        const gradient_y1= y1 + dy*0.5;
        const gradient_x2= x1 - dx * 0.5;
        const gradient_y2= y1 - dy * 0.5;

        gsap.set(selector, {
            attr: {
                x2: x,
                y2: y
            }
        });
        if (selectorGr) {
            gsap.set(selectorGr, {
                attr: {
                    x1: gradient_x1,
                    y1: gradient_y1,
                    x2: gradient_x2,
                    y2: gradient_y2
                }
            });
        }
    }

    function reset(drag, line, x, y) {
        gsap.to(drag, {
            duration: 0.3,
            ease: 'power2.out',
            x: 0,
            y: 0
        });
        gsap.to(line, {
            duration: 0.3,
            ease: 'power2.out',
            attr: {
                x2: x,
                y2: y
            }
        });
    }

    function complete(id, isComplete) {
        setCompleted((completedArr) => {
            const arr = [...completedArr];
            arr[id] = isComplete;
            return arr;
        });
    }

    useEffect(() => {
        if (completed.filter(completeLine => !!completeLine).length === 4) {
            setFinished(true);
        }
    }, [completed])

    return (
        <Wrapper>
            <BackgroundWrapper>
                <BackgroundBlurred src={bgInteract1} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper>
                <BoxWrapper>
                    {finished && (
                        <Dump>
                            <WinStarsStyled />
                            <ButtonStyled onClick={next}>Продолжить</ButtonStyled>
                        </Dump>
                    )}
                    <WrapperGame ref={gameRef}>
                        <LinesGame />
                    </WrapperGame>
                </BoxWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};