/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Menu from '../../views/home/HomeView';
import Surat from './SuratNavigator';
import {transition_config} from '../transition_config';

const Stack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Menu"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        component={Menu}
      />
      <Stack.Screen
        name="Surat"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        component={Surat}
      />
    </Stack.Navigator>
  );
};

export default IntroNavigator;
