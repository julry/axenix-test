import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Button } from './Button';
import { TapAnimated } from './TapAnimated';

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid ${colors.purple};
  border-radius: 27px;
  padding: 27px 14px 0;
  border-bottom: none;
  background: white;
`;

const ButtonStyled = styled(Button)`
  position: relative;
  margin: 14px -16px 0;
  width: calc(100% + 32px);
  height: 52px;
  padding: 14px 0 12px 0;
  border-radius: 0 0 27px 27px;
`;

const Tap = styled(TapAnimated)`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 7;
`;

export const TextButtonBlock = (props) => {
    const {isNeedTap, text, onClick} = props;
    const [isShowTap, setIsShowTap] = useState(false);

    const setShowTapDelay = useCallback(() => {
        if (!isNeedTap) return;
        setTimeout(() => {setIsShowTap(true)}, 1250);
        setTimeout(() => setIsShowTap(false), 5000);
    }, [isNeedTap]);

    useEffect(() => {
        setIsShowTap(false);
        setShowTapDelay();
    }, []);

    return (
        <Wrapper className={props.className}>
            {props.children}
            <ButtonStyled onClick={onClick} color={colors.purple}>
                {text}
                {isShowTap && <Tap />}
            </ButtonStyled>
        </Wrapper>
    );
};