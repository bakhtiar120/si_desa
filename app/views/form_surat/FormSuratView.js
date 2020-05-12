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
import useFormSurat from './UseFormSurat';
import { Input } from 'react-native-elements'

const FormSuratView = () => {
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
  
    const [response, onShowFormSurat] = useFormSurat();
  return (
    <View style={styles.container_main_absolute}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Form Surat SKCK
        </Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
        <View>
          <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16}}>
            NIK
          </Text>
          <Input placeholder="Masukkan NIK anda" keyboardType='numeric' />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Nama Lengkap
          </Text>
          <Input placeholder="Masukkan Nama Lengkap anda"  />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Alamat Lengkap
          </Text>
          <Input placeholder="Masukkan Alamat lengkap anda" />
        </View>
        <View style={{marginTop:15,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={styles.button_standard}>
            <Text style={styles.text_button}>Kirim</Text>
          </TouchableOpacity>
        </View>
        {/* <FormLabel>Nama Lengkap</FormLabel> */}
        {/* <FormLabel>Alamat Lengkap</FormLabel> */}
      </View>
    </View>
  );
};

export default FormSuratView;
