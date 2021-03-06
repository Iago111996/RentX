import React, {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import api from '../../services/api';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';
import { CarDTO } from '../../ditos/CarDTO';

import { getAccessoryIcon } from '../../global/utils/getAccessoryIcon';
import { getPlatformDate } from '../../global/utils/getPlatformDate';
import { format } from 'date-fns';

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

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}


export const SchedulingDetails  = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const navigation = useNavigation<SchedulingDetailsScreenProp>();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotol = Number(dates.length * car.rent.price);

  async function handleConfirmRental() {
    setLoading(true)
    const response = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = {
      ...response.data.unavailable_dates,
      ...dates,
    };

    await api.post('/schedules_byuser', {
      user_id: 2,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates,
    })
    .then(() =>  navigation.navigate('SchedulingComplite'))
    .catch(() =>{
      setLoading(false);
      Alert.alert('N??o foi poss??vel confirmar o seu agendamento.')
      });  
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  useEffect(() =>{
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  },[]);

  return(
    <Container>
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
            { 
            car.accessories.map(accessory => (
              <Acessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
             />
            ))}
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
              <DateValue>{rentalPeriod.start}</DateValue>
            </DateInfo>

            <Feather 
              name="chevron-right"
              color={theme.colors.shape}
              size={RFValue(24)}
            />

            <DateInfo>
              <DateTitle>Ate</DateTitle>
              <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo>
          </RentalPeriod>
          
          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>

            <RentalPriceDetails>
              <RentalPriceQuota>R$ {`${car.rent.price} x${dates.length} di??rias`}</RentalPriceQuota>
              <RentalPriceTotal>R$ {rentTotol}</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
      
    </Container>
  );
}