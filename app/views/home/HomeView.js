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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Colors from '../../assets/styles/colors';
import {FlatGrid} from 'react-native-super-grid';
const HomeView = () => {
    const items = [
      {name: 'LAYANAN SURAT', icon_name: 'send', type: 'fontawesome'},
      {name: 'GALERI DESA', icon_name: 'image', type: 'fontawesome'},
      {name: 'WEB DESA', icon_name: 'web', type: 'materialcommunity'},
      {name: 'PENGUMUMAN', icon_name: 'notification', type: 'antdesign'},
      {name: 'PETA DESA', icon_name: 'map-marker', type: 'fontawesome'},
      {name: 'RIWAYAT', icon_name: 'history', type: 'fontawesome'},
    ];
  return (
    <View style={styles.container_main_absolute}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#BEBEBE',
          paddingBottom: 10,
        }}>
        <View style={{marginTop: 10}}>
          <Text style={styles.text_bold}>KABUPATEN JOMBANG</Text>
        </View>
        <Image
          style={{height: 100, width: 100}}
          source={require('../../assets/images/logo_jombang.png')}
        />
        <Text style={[styles.text_bold, {marginTop: 10}]}>
          DESA SUMBERAGUNG
        </Text>
        <Text style={[styles.text_bold, {marginTop: 10, marginBottom: 10}]}>
          KECAMATAN PETERONGAN
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>
          3512361236126 ( M sholahudin )
        </Text>
      </View>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor: '#BEBEBE',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            {item.type == 'fontawesome' ? (
              <Icon name={item.icon_name} size={30} color={Colors.black} />
            ) : item.type == 'antdesign' ? (
              <Icon2 name={item.icon_name} size={30} color={Colors.black} />
            ) : (
              <Icon1 name={item.icon_name} size={30} color={Colors.black} />
            )}
            <Text style={[styles.itemName, {marginTop: 5}]}>{item.name}</Text>
          </View>
        )}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button_standard}>
          <Text style={styles.text_button}>KELUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
