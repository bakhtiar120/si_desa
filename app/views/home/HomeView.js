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
import {FlatGrid} from 'react-native-super-grid';
import useHome from './useHome';
import {ListItem, Overlay,Avatar, CheckBox} from 'react-native-elements';
const HomeView = () => {
    const [response, onShowListSurat,onClickProfile,onLogout] = useHome();
    const items = [
      {name: 'Layanan Surat', icon_name: 'ios-mail', type: 'fontawesome'},
      {name: 'Galeri Desa', icon_name: 'ios-image', type: 'fontawesome'},
      {name: 'Web Desa', icon_name: 'md-globe', type: 'materialcommunity'},
      {name: 'Pengumuman', icon_name: 'ios-megaphone', type: 'antdesign'},
      {name: 'Peta Desa', icon_name: 'ios-map', type: 'fontawesome'},
      {name: 'Riwayat', icon_name: 'ios-paper', type: 'fontawesome'},
    ];
  return (
    <View style={styles.container_main_absolute}>
      <View
        style={{
          backgroundColor: '#BEBEBE',
          paddingBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 30,
            marginTop: 30,
            marginLeft: 20,
          }}>
          <View>
            <Avatar
              size={80}
              source={require('../../assets/images/logo_jombang.png')}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'Montserrat-Bold',
              }}>
              Kabupaten jombang
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'Montserrat-Bold',
              }}>
              Desa Wringinpitu
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'Montserrat-Bold',
              }}>
              Kecamatan Mojowarno
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => onClickProfile()}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>
          3512361236126 ( M sholahudin )
        </Text>
        </TouchableOpacity>
        
      </View>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => onShowListSurat(item.name)}>
            <View
              style={[
                styles.itemContainer,
                {
                  backgroundColor: '#BEBEBE',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Icon name={item.icon_name} size={30} color={Colors.black} />
              <Text style={[styles.itemName, {marginTop: 5}]}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => onLogout()}
          style={styles.button_standard}>
          <Text style={styles.text_button}>KELUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
