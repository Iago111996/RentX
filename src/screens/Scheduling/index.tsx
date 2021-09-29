import React, {useState} from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';

import { 
  Calendar,
  DayProps, 
  MarketDateProps,
  generatInterval
} from '../../components/Calendar';

import { useNavigation } from '@react-navigation/native';
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

type SchedulingScreenProp = StackNavigationProp<RootStackParamList>;

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarketDateProps>({} as MarketDateProps);
  const [rentalPeriod, steRentalPeriod] = useState();

  const theme = useTheme();

  const navigation = useNavigation<SchedulingScreenProp>();

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails');
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
          <DateValue selected={false} >18/02/2021</DateValue>
        </DateInfo>

        <ArrowSvg />

        <DateInfo>
          <DateTitle>Ate</DateTitle>
          <DateValue selected={false} >18/02/2021</DateValue>
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
      />
    </Footer>

    </Container>
  );
}