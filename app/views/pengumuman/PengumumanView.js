import React, {Fragment, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
Button,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Dimensions from '../../styles/dimensions';
import Colors from '../../assets/styles/colors';
import Styles from '../../assets/styles/styles';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Overlay, CheckBox} from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BottomSheet from 'reanimated-bottom-sheet';
// import RBSheet from "react-native-raw-bottom-sheet";

const DATA = [
  {
    id: '1',
    nama_hari: 'Sen',
    tanggal: '22',
    status_aktif: true,
  },
  {
    id: '2',
    nama_hari: 'sel',
    tanggal: '23',
    status_aktif: false,
  },
  {
    id: '3',
    nama_hari: 'Rab',
    tanggal: '24',
    status_aktif: false,
  },
  {
    id: '4',
    nama_hari: 'Kam',
    tanggal: '25',
    status_aktif: false,
  },
  {
    id: '5',
    nama_hari: 'Jum',
    tanggal: '26',
    status_aktif: false,
  },
  {
    id: '6',
    nama_hari: 'Sab',
    tanggal: '27',
    status_aktif: false,
  },
  {
    id: '7',
    nama_hari: 'Sen',
    tanggal: '28',
    status_aktif: false,
  },
  {
    id: '8',
    nama_hari: 'Sel',
    tanggal: '29',
    status_aktif: false,
  },
  {
    id: '9',
    nama_hari: 'Rab',
    tanggal: '30',
    status_aktif: true,
  },
  {
    id: '10',
    nama_hari: 'Kam',
    tanggal: '31',
    status_aktif: false,
  },
  {
    id: '11',
    nama_hari: 'Jum',
    tanggal: '01',
    status_aktif: false,
  },
  {
    id: '12',
    nama_hari: 'Sab',
    tanggal: '02',
    status_aktif: false,
  },
];

const DATA2 = [
  {
    id: '1',
    nama_mapel: 'Biologi',
    lama: '12.30 WIB (180 Menit) ',
    status_hadir: true,
  },
  {
    id: '2',
    nama_mapel: 'Bahasa Indonesia',
    lama: '16.30 WIB (240 Menit) ',
    status_hadir: false,
  },
];
function Item({nama_hari, tanggal, status_aktif}) {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
      }}>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2),
          color: tanggal == '24' ? Colors.chart_blue : 'black',
        }}>
        {nama_hari}
      </Text>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2),
          color: tanggal == '24' ? Colors.chart_blue : 'black',
        }}>
        {tanggal}
      </Text>
      {tanggal == '22' ? (
        <View
          style={{
            borderWidth: 2,
            marginTop: 5,
            borderColor: Colors.chart_blue,
            width: responsiveWidth(10),
          }}
        />
      ) : (
        <View
          style={{
            borderWidth: 2,
            marginTop: 5,
            borderColor: 'transparent',
            width: responsiveWidth(10),
          }}
        />
      )}
    </View>
  );
}

function Item2({nama_mapel, lama, status_hadir}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        borderColor: Colors.default_border_card,
        borderWidth: 0.6,
        width: responsiveWidth(90),
        borderRadius: 5,
        marginLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
      }}>
      <View>
        <View style={{marginHorizontal: 10, marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{nama_mapel}</Text>
        </View>
        <View style={{marginHorizontal: 10, marginTop: 5}}>
          <Text style={{color: Colors.grey, fontSize: responsiveFontSize(1.5)}}>
            {lama}{' '}
          </Text>
        </View>
      </View>
      <View>
        {status_hadir == true ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(30),
              marginTop: 10,
              marginRight: -20,
            }}>
            <IonIcon
              name="ios-checkmark"
              size={responsiveWidth(5)}
              color={Colors.chart_blue}
            />

            <Text
              style={{
                color: Colors.chart_blue,
                fontSize: responsiveFontSize(1.5),
              }}>
              Hadir
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(30),
              marginTop: 10,
              marginRight: -20,
            }}>
            <IonIcon
              name="ios-close"
              size={responsiveWidth(5)}
              color={Colors.chart_red}
            />

            <Text
              style={{
                color: Colors.chart_red,
                fontSize: responsiveFontSize(1.5),
              }}>
              Alpha
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
// const refRBSheet = useRef();

const PengumumanView = ({route, navigation}) => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'blue',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <View style={Styles.container_main}>
      <View
        style={{
          backgroundColor: 'white',
          width: responsiveWidth(100),
          marginBottom: 20,
        }}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Text style={{fontWeight: 'bold'}}>September</Text>
        </View>

        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // onRefresh={this.handleRefreshJobList}
          // onEndReached={this.handleLoadMoreJobList}
          // onEndThreshold={0.75}
          // refreshing={this.state.isRefreshingJobList}
          renderItem={({item}) => (
            <Item
              nama_hari={item.nama_hari}
              tanggal={item.tanggal}
              status_aktif={item.status_aktif}
            />
          )}
          // ListFooterComponent={this.renderFooter}
          keyExtractor={item => item.id}
        />
      </View>
      <FlatList
        data={DATA2}
        // onRefresh={this.handleRefreshJobList}
        // onEndReached={this.handleLoadMoreJobList}
        // onEndThreshold={0.75}
        // refreshing={this.state.isRefreshingJobList}
        renderItem={({item}) => (
          <Item2
            nama_mapel={item.nama_mapel}
            lama={item.lama}
            status_hadir={item.status_hadir}
          />
        )}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id}
      />
      <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </View>
  );
};
export default PengumumanView;