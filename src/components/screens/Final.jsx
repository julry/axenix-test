import React, { useState } from 'react';
import styled from 'styled-components';
import { useResult } from '../../hocs/useResult';
import { Button } from '../shared/Button';
import { Background, BackgroundWrapper, ContentWrapper } from '../shared/wrappers';
import gradientBg from '../shared/svg/gradientBg.svg';
import { BoldText, Description, DescriptionSm, RegularText, Title } from '../shared/styledTexts';
import { colors } from '../../constants/colors';
import { QuestionMark } from '../shared/svg/QuestionMark';
import { Modal } from '../shared/Modal';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10% 8vw 7.5%;
  color: white;
  --pointLineHeight: 30px;
  @media screen and (max-width: 320px) {
    --pointLineHeight: 20px;
  }
`;

const ContentWrapperStyled = styled(ContentWrapper)`
    ${({isModal}) => isModal ? 'filter: blur(4px)' : ''};
`;

const TitleStyled = styled(Title)`
  margin-bottom: 7px;
`;

const Points = styled.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
`;

const PointInfo = styled.div`
  margin-top: calc(var(--pointLineHeight) / 2);
`;

const PointName = styled(DescriptionSm)`
  margin-bottom: 5px;
  font-weight: 600;
`;

const PointWrapper = styled.div`
  width: 70.4vw;
  height: var(--pointLineHeight);
  background: #FFFFFF;
  border-radius: 30px;
`;

const PointPath = styled(PointWrapper)`
  width: calc(70.4vw * ${({part}) => part > 0 ? part : 0});
  background: ${colors.purple};
  border: ${({part}) => part > 0 ? '1.5px' : 0} solid white;
  margin-top: calc(-1 * var(--pointLineHeight));
`;

const QuestionMarkStyled = styled(QuestionMark)`
  position: absolute;
  bottom: 0;
  right: 0;
  user-select: none;
  width: var(--pointLineHeight);
  height: var(--pointLineHeight);
`;

const ModalTitle = styled(Description)`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Final = () => {
    const {points, result} = useResult();
    const [isModal, setIsModal] = useState(false);
    return (
        <Wrapper>
            <ContentWrapperStyled isModal={isModal}>
                <TitleStyled>А вот и результаты:</TitleStyled>
                <Description>
                    {
                        'Коллеги подготовили чек-лист,\n' +
                        'который укажет на твои сильные\nстороны, а также поможет прокачать\nважные ' +
                        'для работы в Axenix навыки.'
                    }
                </Description>
                <Points>
                    {points.map(point => (
                        <PointInfo key={point.type}>
                            <PointName>{point.name}</PointName>
                            <PointWrapper />
                            <PointPath part={point.part}/>
                        </PointInfo>
                    ))}
                    <QuestionMarkStyled onClick={() => setIsModal(true)} />
                </Points>
            </ContentWrapperStyled>
            <BackgroundWrapper>
                <Background src={gradientBg} alt={''}/>
            </BackgroundWrapper>
            {isModal && <Modal close={() => setIsModal(false)}>
                <ModalTitle>
                    Совет дня:
                </ModalTitle>
                <DescriptionSm>
                    {result?.text}
                </DescriptionSm>
            </Modal>}
        </Wrapper>
    )
}
