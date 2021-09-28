import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImage = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content =styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  margin-top: 38px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const About = styled.View`
`;

export const Brand = styled.Text`
 font-family: ${({ theme }) => theme.fonts.secondary_500};
 font-size: ${RFValue(10)}px;

 color: ${({ theme }) => theme.colors.text};

 text-transform: uppercase;
 `;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Rent  = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;

  color: ${({ theme }) => theme.colors.main};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text};

  text-align: justify;

  margin-top: 23px;
`;

export const Acessores = styled.View`
  width: 100%;

  margin-top: 16px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  line-height: 25px;
`;

export const Footer = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getStatusBarHeight() + 24}px;
`;