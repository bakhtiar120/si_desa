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
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from '../../assets/styles/styles';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/styles/colors';
import {FlatGrid} from 'react-native-super-grid';
import useListHistory from './useListHistory';
import Dimensions from '../../assets/styles/dimensions';
import { Badge } from 'react-native-elements';
// import useFormSurat from '../form_surat/UseFormSurat';
const ListHistoryView = () => {
  const items = [
    {
      id: 1,
      name: 'Surat Bantuan Siswa Miskin',
      status: 0,
      date: '19 Juni 2019',
    },
    {
      id: 2,
      name: 'Surat Keterangan Bepergian',
      status:1,
      date: '10 Juli 2019',
    },
    {
      id: 3,
      name: 'Form Permohonan E-KTP Baru',
      status: 2,
      date: '07 Agustus 2019',
    },
    {
      id: 4,
      name: 'Surat Belum Pernah Menikah',
      status: 3,
      date: '10 Agustus 2019',
    },
    {
      id: 5,
      name: 'Surat Talak atau Cerai',
      status: 1,
      date: '19 Agustus 2019',
    },
    {
      id: 6,
      name: 'Surat Pengantar SKCK',
      status: 3,
      date: '28 Agustus 2019',
    },
    {
      id: 7,
      name: 'Surat Domisili Badan/Usaha',
      status: 0,
      date: '05 September 2019',
    },
    {
      id: 8,
      name: 'Surat Keterangan Usaha',
      status: 2,
      date: '10 September 2019',
    },
    {
      id: 9,
      name: 'Surat Domisili Penduduk',
      status: 1,
      date: '19 September 2019',
    },
    {
      id: 10,
      name: 'Surat Keterangan Identitas Ganda',
      status: 0,
      date: '28 September 2019',
    },
    {
      id: 11,
      name: 'Surat Izin Kerja',
      status: 3,
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
          <Badge badgeStyle={{ backgroundColor:Colors.chart_red, alignSelf: 'flex-start', marginLeft: Dimensions.default_padding_10, marginTop: Dimensions.default_padding_10 }}
                        value={<Text style={[Styles.textFontFamily, { color: Colors.white,marginRight:10,marginLeft:10, fontSize: responsiveFontSize(1.5) }]}>
                        { 
                          status==0 ? "Sedang diproses"
                          :
                          status==1 ? "Menunggu TTD"
                          :
                          status==2 ? "Bisa diambil"
                          :
                          status==3 ? "Dibatalkan"
                          :
                          ""
                        }
                    </Text>}>
                        </Badge>
        {/* <Text style={{fontWeight: 'bold', marginLeft: 10, color: 'white'}}>
          {date}
        </Text> */}
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
              marginTop: 0,
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
            <Icon
              name={'ios-calendar'}
              style={{marginLeft: 10}}
              size={20}
              color={Colors.white}
            />
          <Text
            style={{
              marginTop: 0,
              marginLeft: 10,
              fontSize: 12,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {date}
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
