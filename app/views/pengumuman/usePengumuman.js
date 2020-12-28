/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import {useState,useRef, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';
import axios from 'axios';
const usePengumuman = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  return [playerRef, playing];
};

export default usePengumuman;
