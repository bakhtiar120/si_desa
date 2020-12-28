/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {AuthContext} from '../../../App';

const useHome = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('');
  const {signOut} = useContext(AuthContext);

  onShowListSurat = async name => {
    if (name == 'Layanan Surat') navigation.navigate('FormSurat', {});
    else if (name == 'Web Desa') {
      Linking.openURL('https://wringinpitu.desapintar.org/');
    } else if (name == 'Galeri Desa') {
      navigation.navigate('Gallery');
    } else if (name == 'Riwayat') {
      navigation.navigate('ListHistory');
    } else if (name == 'Pengumuman') {
      
    }
  };

  onClickProfile = async() =>{
    navigation.navigate('Profile');
  }
  onLogout = async () => {
    signOut();
  };

  return [response, onShowListSurat,onClickProfile, onLogout];
};

export default useHome;
