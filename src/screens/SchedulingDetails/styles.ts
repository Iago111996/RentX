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

export const RentalPeriod = styled.View`
  width: 100%;

  padding-bottom: 16px;

  margin-top: 40px;

  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.text_default};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text_default};
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
  width: 100%;

  margin-top: 16px;
`;

export const RentalPriceLabel  = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text_default};

  text-transform: uppercase;
`;

export const RentalPriceDetails  = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota  = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.success};
`;