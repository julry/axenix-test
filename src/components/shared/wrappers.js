import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    max-width: 550px;
    margin: 0 auto;

    & svg {
      max-width: 350px;
    }
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: hidden;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackgroundScaled = styled(Background)`
  transform: scale(1.1);
`;

export const BackgroundBlurred = styled(BackgroundScaled)`
  filter: blur(4.5px);
`;


export const PersonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  height: 66.71%;
  width: 50.1333vw;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;

export const Person = styled.img`
  height: 100%;
`;
