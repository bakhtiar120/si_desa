/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';
import axios from 'axios';
const useListSurat = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('');

  onShowFormSurat = async () => {
    navigation.navigate('FormSurat');
  };

  return [response, onShowFormSurat];
};

export default useListSurat;
