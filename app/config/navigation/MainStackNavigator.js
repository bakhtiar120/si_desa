import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Login from '../../views/login/LoginView';
import Home from '../../views/home/HomeView';
import ListSurat from '../../views/list_surat/ListSuratView';
import FormSurat from '../../views/form_surat/FormSuratView';
import Gallery from '../../views/gallery/GalleryView';
import ListHistory from '../../views/list_history/ListHistoryView';
import Pengumuman from '../../views/pengumuman/PengumumanView';
import Profile from '../../views/profile/ProfileView';
import {transition_config} from '../transition_config';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="ListHistory"
        component={ListHistory}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="Pengumuman"
        component={Pengumuman}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="ListSurat"
        component={ListSurat}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="FormSurat"
        component={FormSurat}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="Gallery"
        component={Gallery}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: transition_config,
            close: transition_config,
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
