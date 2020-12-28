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
  ToastAndroid,
  Alert,
  FlatList,
} from 'react-native';
import styles from '../../assets/styles/styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/styles/colors';
import {FlatGrid} from 'react-native-super-grid';
import useFormSurat from './UseFormSurat';
import { Input } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';

const FormSuratView = () => {
  const [surat,setSurat] = React.useState('');
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
    const create_alert = () =>
    Alert.alert(
      "",
      "Apakah anda yakin untuk mengajukan surat ini?",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ya", onPress: () => send_data() }
      ],
      { cancelable: false }
    );

    const send_data = () => {
      ToastAndroid.showWithGravity(
                        'Anda Berhasil Mengajukan Permohonan Surat',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
    }
  return (
    <View style={styles.container_main_absolute}>
      <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
         Permohonan Surat
        </Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
        <View>
          <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16}}>
            Jenis Surat yang dimohon
            </Text>
          <DropDownPicker
          placeholder="Pilih Surat"
    items={[
        {label: 'Keterangan Pengantar', value: '1'},
        {label: 'Keterangan Penduduk', value: '2'},
        {label: 'Biodata Penduduk', value: '3'},
        {label: 'Keterangan Pindah Penduduk', value: '4'},
        {label: 'Keterangan Jual Beli', value: '5'},
        {label: 'Pengantar SKCK', value: '6'},
        {label: 'Keterangan KTP dalam proses', value: '7'},
        {label: 'Keterangan beda identitas', value: '8'},
        {label: 'keterangan bepergian/jalan', value: '9'},
        {label: 'Keterangan Kurang mampu', value: '10'},
        {label: 'pengantar izin keramaian', value: '11'},
        {label: 'pengantar lapongan kehilangan', value: '12'},
        {label: 'Keterangan Usaha', value: '13'},
    ]}

    defaultValue={surat}
    containerStyle={{height: 40,marginLeft:10,marginRight:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    searchable={true}
searchablePlaceholder=""
searchablePlaceholderTextColor="gray"
seachableStyle={{}}
searchableError={() => <Text>Not Found</Text>}
    onChangeItem={item => setSurat(item.value)}
/>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', marginLeft: 10, fontSize: 16,marginTop:10}}>
            NIK
          </Text>
          <Input  keyboardType='numeric' value="2312312313" disabled={true} />
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
          <Input value="Susi Susanti" disabled={true}  />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Tempat Tanggal Lahir
          </Text>
          <Input value="Jombang, 20 Desember 1990" disabled={true} />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Pendidikan
          </Text>
          <Input value="SMA" disabled={true} />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Keperluan
          </Text>
          <Input placeholder={"Masukkan Keperluan anda di sini"} />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Keterangan
          </Text>
          <Input placeholder={"Masukkan Keterangan anda di sini"} />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 10,
              fontSize: 16,
            }}>
            Nomor HP AKtif
          </Text>
          <Input placeholder={"Masukkan Nomor HP anda"} keyboardType={'numeric'} />
        </View>
        <View style={{marginTop:15,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={styles.button_standard} onPress={create_alert}>
            <Text style={styles.text_button}>Kirim</Text>
          </TouchableOpacity>
        </View>
        {/* <FormLabel>Nama Lengkap</FormLabel> */}
        {/* <FormLabel>Alamat Lengkap</FormLabel> */}
      </View>
      </ScrollView>
    </View>
  );
};

export default FormSuratView;
