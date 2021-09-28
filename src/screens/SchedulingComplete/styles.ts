import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: 60px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  flex: 1;

  padding-bottom: 80px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text_default};

  text-align: center;

  line-height:  ${RFValue(25)}px;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;

  margin-bottom: 70px;

  justify-content: center;
  align-items: center;
`;