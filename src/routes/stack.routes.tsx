import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplite } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCar';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplite: undefined;
  MyCars: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const StackRoutes = () => {
  return(
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="CarDetails"
        component={CarDetails}
      />
      <Screen 
        name="Scheduling"
        component={Scheduling}
      />
      <Screen 
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen 
        name="SchedulingComplite"
        component={SchedulingComplite}
      />
      <Screen 
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
}