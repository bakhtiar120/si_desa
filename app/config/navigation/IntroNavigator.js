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
import Login from '../../views/login/LoginView';
import Menu from './MenuNavigator';
import {transition_config} from '../transition_config';

const Stack = createStackNavigator();

const IntroNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        component={Login}
      />
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
    </Stack.Navigator>
  );
};

export default IntroNavigator;
