/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import LoginView from './app/views/login/LoginView';
import HomeView from './app/views/home/HomeView';
const App: () => React$Node = () => {
  return (
    <>
      <HomeView />
    </>
  );
};


export default App;