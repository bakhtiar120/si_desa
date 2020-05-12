/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';
import axios from 'axios';
const useGallery = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('');
  const [ModalVisibleStatus,setModalVisibleStatus] = useState(false);
  const [imageSrc,setImageSrc] = useState("");
//   onShowFormSurat = async () => {
//     navigation.navigate('FormSurat');
//   };
ShowModalFunction = async (visible, imageURL) => {
    //handler to handle the click on image of Grid
    //and close button on modal
    setModalVisibleStatus(visible);
    setImageSrc(imageURL);
  }

  return [response, ShowModalFunction,ModalVisibleStatus,imageSrc];
};

export default useGallery;
