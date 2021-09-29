import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
  Acessores,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

type SchedulingDetailsScreenProp = StackNavigationProp<RootStackParamList>;


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

export const SchedulingDetails  = () => {
  const theme = useTheme();

  const navigation = useNavigation<SchedulingDetailsScreenProp>();

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingComplite');
  }

  const handleGoBack = () => {
    navigation.goBack();
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
      <Header>
        <BackButton onPress={handleGoBack} />
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

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                color={theme.colors.shape}
                size={RFValue(24)}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather 
              name="chevron-right"
              color={theme.colors.shape}
              size={RFValue(24)}
            />

            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
          
          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>

            <RentalPriceDetails>
              <RentalPriceQuota>R$ 500 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
      
    </Container>
  );
}