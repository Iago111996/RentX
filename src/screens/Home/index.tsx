import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import api from '../../services/api';
import { CarDTO } from '../../ditos/CarDTO';

import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';

import LogoSvg from '../../assets/logo.svg';

import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  TotalCar,
  CarList,
  MyCarsButton
  } from './styles';


type homeScreenProp = StackNavigationProp<RootStackParamList, 'CarDetails'>;


export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  const navigation = useNavigation<homeScreenProp>();


  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', {car} as any);
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars');
  }
  // https://Iago111996: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@github.com/duplatech/platform_v1
  
  async function fetchCars() {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  },[]);


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

        <TotalCar>{`Total de ${cars.length} carros`}</TotalCar>
      </Header>

      { loading ? <Load /> :

        <CarList 
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => 
            <CardCar 
              data={item} 
              onPress={() => handleCarDetails(item)}
            />
          }
        />
      }

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons 
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>


    </Container>
  );
}