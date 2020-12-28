/*
 Date Created       : 04 April 2020
 Create Files       : M. Bakhtiar Hanafi
 Contributor        : M. Bakhtiar Hanafi
 modified           : 04 April 2020
*/
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '../../assets/styles/styles';
import axios from 'axios';
import CardMenu from './CardMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/styles/colors';
import { Card } from 'react-native-paper';

import {ListItem, Overlay, Avatar, CheckBox} from 'react-native-elements';
const Home = () => {
  return (
    <View>
      <Card style={styles.my_card}>
        <View style={styles.card_view}>
          <Image
            style={{width: 60, height: 60, borderRadius: 30}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
            }}
          />
          <View>
            <Text style={styles.text_home}>Hello From Home</Text>
            <Text style={styles.text_home}>Web Developer</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Home;
