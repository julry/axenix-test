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
import { ButtonCentered } from '../shared/ButtonCentered';
import { onLinkCopy } from '../../utils/onLinkCopy';
import { DoneMark } from '../shared/svg/DoneMark';
import { useProgress } from '../../hooks/useProgress';

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
  position: relative;
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

const ButtonsContainer = styled.div`
  margin-top: auto;
  width: 100%;
  padding-bottom: 6.4vw;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
`;

const DoneMarkStyled = styled(DoneMark)`
  height: 116px;
  width: 116px;
  margin-bottom: 24px;
`;

const LinkBtn = styled(Description)`
  margin: 2.6vw auto 0;
  border-bottom: 1px solid white;
  width: min-content;
`;


export const Final = () => {
    const {character} = useProgress();
    const {points, result} = useResult();
    const [isModal, setIsModal] = useState({shown: false, text: ''});
    const [isCopyModal, setIsCopyModal] = useState(false);

    const onCopyButtonClick = () => {
        onLinkCopy();
        setIsCopyModal(true);
        setTimeout(() => setIsCopyModal(false), 3500);
    };

    const onClickSign = (type) => {
        const text = result.find(res => res.type === type)?.text?.[character?.sex] ?? '';
        setIsModal({shown: true, text})
    };

    const openHref = (href) => {
        window.open(href, '_blank');
    }

    return (
        <Wrapper>
            <ContentWrapperStyled isModal={isModal.shown || isCopyModal}>
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
                            {!!result.filter(res => res.type === point.type).length && (
                                <QuestionMarkStyled onClick={() => onClickSign(point.type)}/>
                            )}
                        </PointInfo>
                    ))}
                </Points>
                <ButtonsContainer>
                    <ButtonCentered
                        onClick={() => openHref('https://fut.ru/programs/axenix/')}
                        color={colors.orange}
                    >
                        Подать заявку
                    </ButtonCentered>
                    <LinkBtn onClick={onCopyButtonClick}>Поделиться</LinkBtn>
                </ButtonsContainer>
            </ContentWrapperStyled>
            <BackgroundWrapper>
                <Background src={gradientBg} alt={''}/>
            </BackgroundWrapper>
            {isModal.shown && <Modal close={() => setIsModal({shown: false, text: ''})}>
                <ModalTitle>
                    Совет дня:
                </ModalTitle>
                <DescriptionSm>
                    {isModal?.text}
                </DescriptionSm>
            </Modal>}
            {isCopyModal && <Modal>
                <ModalContent>
                    <DoneMarkStyled />
                    <Description>Ссылка скопирована</Description>
                </ModalContent>
            </Modal>}
        </Wrapper>
    )
}
