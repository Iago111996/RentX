import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  color: ${({ theme }) => theme.colors.main_light};

  margin-top: 24px;

  line-height: 34px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  margin: 32px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.shape};

  ${({ selected }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.text};

    padding: 5px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalAcrollIndicator: false,
})`

`;

export const Footer = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getStatusBarHeight()}px;
`;
