import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexs = styled.View`
  margin-right: 24px;
  
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  margin-left: 8px;

  border-radius: 3px;

  background-color: ${({ theme, active}) => 
  active ? theme.colors.title : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
