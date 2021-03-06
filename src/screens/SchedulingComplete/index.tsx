import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { StatusBar } from 'react-native';
import LogoBackSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

type SchedulingCompliteScreenProp = StackNavigationProp<RootStackParamList>;

export const SchedulingComplite = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<SchedulingCompliteScreenProp>();

  const handleGobackHome = () => {
    navigation.navigate('Home');
  }
  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoBackSvg 
        width={width}
      />

      <Content>
        <DoneSvg
          width={80}
          height={80}
        />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {`\n`}
          até a concessionária da RENTX {`\n`}
          pegar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton 
          title="OK" 
          onPress={handleGobackHome}
        />
      </Footer>
    </Container>
  );
}