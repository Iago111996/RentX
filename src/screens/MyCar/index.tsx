import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BackButton } from '../../components/BackButton';
import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';
import { CarDTO } from '../../ditos/CarDTO';
import theme from '../../global/styles/theme';
import api from '../../services/api';


import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle
} from './styles';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  async function fetchCars() {
    try {
      const response = await api.get('/schedules_byuser?user_id=2');
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }finally{
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
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton 
          onPress={handleGoBack}
          color={theme.colors.main_light}
        />
        <Title>
          Seus agendamentos,{`\n`}
          estão aqui. 
        </Title>

        <SubTitle>
        Conforto, segurança e praticidade.
        </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>
            {cars.length < 10 && cars.length > 0 ? `0${cars.length}` : cars.length}
          </AppointmentsQuantity>
        </Appointments>

        {
          loading ? <Load /> :
          
             <FlatList
             data={cars}
             keyExtractor={item => String(item.id)}
             showsVerticalScrollIndicator={false}
             renderItem={({ item }) => (
              <CarWrapper>
                <CardCar data={item.car} />
                <CarFooter>
                 <CarFooterTitle>Periodo</CarFooterTitle>

                 <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>

                    <AntDesign 
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{marginHorizontal: 10}}
                    />

                    <CarFooterDate>{item.endDate}</CarFooterDate>
                 </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
             )}
           />
          
          
          
          
          

          
          
          
          
        }
      </Content>

    </Container>
  );
}