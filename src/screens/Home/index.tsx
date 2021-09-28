import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import LogoSvg from '../../assets/logo.svg';
import { CardCar } from '../../components/CardCar';

import {
  Container,
  Header,
  TotalCar,
  CarList
  } from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList>;


export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  const handleCarDetails = () => {
    navigation.navigate('CarDetails');
  }
  
  const dataCar = {
    brand: 'AUDI',
    name: 'RS 4 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail: 'https://img1.gratispng.com/20180204/fzw/kisspng-audi-sportback-concept-car-dealership-audi-a7-audi-5a777382186493.4596512015177777940999.jpg'
  }

  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <LogoSvg
          width={RFValue(127)}
          height={RFValue(18)}
        />

        <TotalCar>Total de 12 carros</TotalCar>
      </Header>

      <CarList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <CardCar 
            data={dataCar} 
            onPress={handleCarDetails}
          />
        }
      />
     


    </Container>
  );
}