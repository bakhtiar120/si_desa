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
import SuratView from '../../views/list_surat/ListSuratView';
import {transition_config} from '../transition_config';

const Stack = createStackNavigator();

const SuratNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SuratView"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        component={SuratView}
      />
    </Stack.Navigator>
  );
};

export default SuratNavigator;
