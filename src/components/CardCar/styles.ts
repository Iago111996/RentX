import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px;

  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.View`
`;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color:  ${({ theme }) => theme.colors.text_default};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color:  ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  margin-top: 16px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color:  ${({ theme }) => theme.colors.text_default};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color:  ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View`
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 167px;
  height: 85px;
`;
