import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

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

export const Scheduling = () => {
  const theme = useTheme();

  const navigation = useNavigation<SchedulingScreenProp>();

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails');
  }

  return(
    <Container>
      <StatusBar style="light" />
    <Header>
      <BackButton 
        onPress={() => {}}
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
      <Calendar />
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