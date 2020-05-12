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
  FlatList
} from 'react-native';
import styles from '../../assets/styles/styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/styles/colors';
import {FlatGrid} from 'react-native-super-grid';
import useListSurat from './useListSurat';
// import useFormSurat from '../form_surat/UseFormSurat';
const ListSuratView = () => {
  const items = [
    {id: 1, name: 'Surat Bantuan Siswa Miskin'},
    {id: 2, name: 'Surat Keterangan Bepergian'},
    {id: 3, name: 'Form Permohonan E-KTP Baru'},
    {id: 4, name: 'Surat Belum Pernah Menikah'},
    {id: 5, name: 'Surat Talak atau Cerai'},
    {id: 6, name: 'Surat Pengantar SKCK'},
    {id: 7, name: 'Surat Domisili Badan/Usaha'},
    {id: 8, name: 'Surat Keterangan Usaha'},
    {id: 9, name: 'Surat Domisili Penduduk'},
    {id: 10, name: 'Surat Keterangan Identitas Ganda'},
    {id: 11, name: 'Surat Izin Kerja'},
  ];
  const [response, onShowFormSurat] = useListSurat();
  function Item({
    name,
  }) {
    return (
      <View>
        <TouchableOpacity onPress={() => onShowFormSurat()}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: '#BEBEBE',
              borderRadius: 5,
            }}>
            <Icon
              name={'ios-mail'}
              style={{marginLeft: 10}}
              size={50}
              color={Colors.black}
            />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.white,
              }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
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
        renderItem={({item}) => (
          <Item
            name={item.name}
          />
        )}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
};

export default ListSuratView;
