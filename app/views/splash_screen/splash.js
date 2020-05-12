/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import React, {Fragment, useEffect} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import Styles from '../../assets/styles/styles';

const FIVE_SECONDS = 5000;

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      // navigationRef.navigate('Intro');
    }, FIVE_SECONDS);
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor:'white'}}>
      <Image
        style={{}}
        source={require('../../assets/images/logo_jombang.png')}
      />
    </View>
  );
};

export default Splash;
