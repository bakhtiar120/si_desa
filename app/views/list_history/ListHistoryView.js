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
  FlatList,
} from 'react-native';
import styles from '../../assets/styles/styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/styles/colors';
import {FlatGrid} from 'react-native-super-grid';
import useListHistory from './useListHistory';
// import useFormSurat from '../form_surat/UseFormSurat';
const ListHistoryView = () => {
  const items = [
    {
      id: 1,
      name: 'Surat Bantuan Siswa Miskin',
      status: 'accepted',
      date: '19 Juni 2019',
    },
    {
      id: 2,
      name: 'Surat Keterangan Bepergian',
      status: 'denied',
      date: '10 Juli 2019',
    },
    {
      id: 3,
      name: 'Form Permohonan E-KTP Baru',
      status: 'accepted',
      date: '07 Agustus 2019',
    },
    {
      id: 4,
      name: 'Surat Belum Pernah Menikah',
      status: 'accepted',
      date: '10 Agustus 2019',
    },
    {
      id: 5,
      name: 'Surat Talak atau Cerai',
      status: 'denied',
      date: '19 Agustus 2019',
    },
    {
      id: 6,
      name: 'Surat Pengantar SKCK',
      status: 'accepted',
      date: '28 Agustus 2019',
    },
    {
      id: 7,
      name: 'Surat Domisili Badan/Usaha',
      status: 'denied',
      date: '05 September 2019',
    },
    {
      id: 8,
      name: 'Surat Keterangan Usaha',
      status: 'accepted',
      date: '10 September 2019',
    },
    {
      id: 9,
      name: 'Surat Domisili Penduduk',
      status: 'accepted',
      date: '19 September 2019',
    },
    {
      id: 10,
      name: 'Surat Keterangan Identitas Ganda',
      status: 'denied',
      date: '28 September 2019',
    },
    {
      id: 11,
      name: 'Surat Izin Kerja',
      status: 'accepted',
      date: '07 Oktober 2019',
    },
  ];
  const [response, onShowFormSurat] = useListHistory();
  function Item({name,status,date}) {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          borderWidth: 0.6,
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text style={{fontWeight: 'bold', marginLeft: 10, color: 'white'}}>
          {date}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <Icon
            name={'ios-mail'}
            style={{marginLeft: 10}}
            size={20}
            color={Colors.white}
          />
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          {status == 'accepted' ? (
            <Icon
              name={'ios-checkmark-circle'}
              style={{marginLeft: 10}}
              size={20}
              color={Colors.white}
            />
          ) : (
            <Icon
              name={'ios-close-circle'}
              style={{marginLeft: 10}}
              size={20}
              color={Colors.white}
            />
          )}
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            Bpk Ali
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container_main_absolute}>
      <FlatList
        data={items}
        // onRefresh={this.handleRefreshJobList}
        // onEndReached={this.handleLoadMoreJobList}
        // onEndThreshold={0.75}
        // refreshing={this.state.isRefreshingJobList}
        renderItem={({item}) => <Item name={item.name} status={item.status} date={item.date} />}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListHistoryView;
