import styled from 'styled-components';

export const BoldText = styled.p`
  font-weight: 600;
`;

export const RegularText = styled.p`
  font-weight: 400;
`;

export const Title = styled(BoldText)`
  font-size: 20px;
  
  @media screen and (max-width: 330px) {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 19px;
  }
`;

export const Description = styled(RegularText)`
  font-size: 15px;
  
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 17px;
  }
`;

export const DescriptionSm = styled(RegularText)`
  font-size: 13px;

  @media screen and (max-width: 320px) {
    font-size: 11px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 15px;
  }
`;