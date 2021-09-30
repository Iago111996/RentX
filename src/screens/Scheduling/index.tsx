import React, {useState} from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Alert } from 'react-native';

import ArrowSvg from '../../assets/arrow.svg';

import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';

import { 
  Calendar,
  DayProps, 
  MarketDateProps,
  generatInterval
} from '../../components/Calendar';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { format } from 'date-fns';
import { getPlatformDate } from '../../global/utils/getPlatformDate';
import { CarDTO } from '../../ditos/CarDTO';

type SchedulingScreenProp = StackNavigationProp<RootStackParamList>;

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarketDateProps>({} as MarketDateProps);
  const [rentalPeriod, steRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme = useTheme();

  const navigation = useNavigation<SchedulingScreenProp>();
  const route = useRoute();
  const { car } = route.params as Params;
  const handleConfirmRental = () => {
    if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
      Alert.alert("Selecione o intervalo para alugar.");
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generatInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    steRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });

  }

  return(
    <Container>
      <StatusBar style="light" />
    <Header>
      <BackButton 
        onPress={handleGoBack}
        color={theme.colors.main_light}
      />

      <Title>
        Escolha uma {`\n`}
        data de início e {`\n`}
        fim do aluguel   
      </Title>

      <RentalPeriod>
        <DateInfo>
          <DateTitle>De</DateTitle>
          <DateValue 
            selected={!!rentalPeriod.startFormatted} 
          >
            {rentalPeriod.startFormatted}
          </DateValue>
        </DateInfo>

        <ArrowSvg />

        <DateInfo>
          <DateTitle>Ate</DateTitle>
          <DateValue 
            selected={!!rentalPeriod.endFormatted} 
          >
            {rentalPeriod.endFormatted}
          </DateValue>
        </DateInfo>
      </RentalPeriod>
    </Header>

    <Content>
      <Calendar 
        markedDates={markedDates}
        onDayPress={handleChangeDate}
      />
    </Content>

    <Footer>
      <Button 
        title="Confirmar"
        onPress={handleConfirmRental}
        enabled={!!rentalPeriod.startFormatted}
      />
    </Footer>

    </Container>
  );
}