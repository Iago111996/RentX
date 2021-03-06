import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps extends RectButtonProps {
  color: string;
}
 
export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;

  background-color: ${({ color }) => color};

  padding: 19px;
  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View<ContainerProps>`
  width: 100%;

  background-color: ${({ theme, color }) => 
    color ? color : theme.colors.main};

  padding: 19px;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  
  color: ${({ theme }) => theme.colors.shape};
`;