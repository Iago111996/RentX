import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  About,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Description,
  Acessores,
  Footer,
} from './styles';

type CarDetailsScreenProp = StackNavigationProp<RootStackParamList>;

interface Data {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props {
 data: Data;
}

export const CarDetails  = () => {
  const navigation = useNavigation<CarDetailsScreenProp>();

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling');
  }

  const data = {
    brand: 'Lamboorghini',
    name: 'RS 4 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail: 'https://img1.gratispng.com/20180204/fzw/kisspng-audi-sportback-concept-car-dealership-audi-a7-audi-5a777382186493.4596512015177777940999.jpg'}
  return(
    <Container>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider 
          imageUrl={["https://img1.gratispng.com/20180204/fzw/kisspng-audi-sportback-concept-car-dealership-audi-a7-audi-5a777382186493.4596512015177777940999.jpg"]}
        />
      </CarImage>

      <Content>
        <Details>
          <About>
          <Brand>{ data.brand }</Brand>
          <Name>{ data.name }</Name>
          </About>

            <Rent>
              <Period>{ data.rent.period }</Period>
              <Price>{`R$ ${data.rent.price}`}</Price>
            </Rent>
          </Details>

          <Acessores>
            <Acessory
              name="980km/h"
              icon={SpeedSvg}
             />
             <Acessory
              name="3.2s"
              icon={AccelerationSvg}
             />
             <Acessory
              name="800 HP"
              icon={ForceSvg}
             />
             <Acessory
              name="Gasolina"
              icon={GasolineSvg}
             />
             <Acessory
              name="Auto"
              icon={ExchangeSvg}
             />
             <Acessory
              name="2 pessoas"
              icon={PeopleSvg}
             />
          </Acessores>

          <Description>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na
          praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
          </Description>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
      
    </Container>
  );
}