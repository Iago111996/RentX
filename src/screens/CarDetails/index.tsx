import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { getAccessoryIcon } from '../../global/utils/getAccessoryIcon';

import { useNavigation, useRoute } from '@react-navigation/native';
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
import { CarDTO } from '../../ditos/CarDTO';

type CarDetailsScreenProp = StackNavigationProp<RootStackParamList>;

interface Params {
  car: CarDTO;
}

export const CarDetails  = () => {
  const navigation = useNavigation<CarDetailsScreenProp>();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', { car } as any);
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  return(
    <Container>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImage>
        <ImageSlider 
          imageUrl={car.photos}
        />
      </CarImage>

      <Content>
        <Details>
          <About>
          <Brand>{ car.brand }</Brand>
          <Name>{ car.name }</Name>
          </About>

            <Rent>
              <Period>{ car.rent.period }</Period>
              <Price>{`R$ ${car.rent.price}`}</Price>
            </Rent>
          </Details>

          <Acessores>
            {car.accessories.map(accessory => (
                <Acessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
               />
            ))}
          </Acessores>

          <Description>{car.about}</Description>
      </Content>

      <Footer>
        <Button
          title="Escolher per??odo do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
      
    </Container>
  );
}