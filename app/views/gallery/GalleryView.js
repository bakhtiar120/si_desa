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
  Modal,
  FlatList
} from 'react-native';
import styles from '../../assets/styles/styles';
import Gallery from 'react-native-image-gallery';
import useGallery from './useGallery';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const GalleryView = () => {
  const [response, ShowModalFunction,ModalVisibleStatus,imageSrc] = useGallery();
  const images = [
    {
      id: 1,
      url: 'https://unsplash.it/400/400?image=1',
    },
    {
      id: 2,
      url: 'https://unsplash.it/400/400?image=2',
    },
    {
      id: 3,
      url: 'https://unsplash.it/400/400?image=3',
    },
    {
      id: 4,
      url: 'https://unsplash.it/400/400?image=4',
    },
    {
      id: 5,
      url: 'https://unsplash.it/400/400?image=5',
    },
    {
      id: 6,
      url: 'https://unsplash.it/400/400?image=6',
    },
    {
      id: 7,
      url: 'https://unsplash.it/400/400?image=7',
    },
    {
      id: 8,
      url: 'https://unsplash.it/400/400?image=8',
    },
    {
      id: 9,
      url: 'https://unsplash.it/400/400?image=9',
    },
    {
      id: 10,
      url: 'https://unsplash.it/400/400?image=10',
    },
    {
      id: 11,
      url: 'https://unsplash.it/400/400?image=11',
    },
    {
      id: 12,
      url: 'https://unsplash.it/400/400?image=12',
    },
  ];
  function Item({id, url}) {
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
        <TouchableOpacity
          key={id}
          style={{flex: 1}}
          onPress={() => {
            ShowModalFunction(true,url);
          }}>
          <FastImage
            style={styles.imageGallery}
            source={{
              uri: url,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return ModalVisibleStatus == true ? (
    <Modal
      transparent={false}
      animationType={'fade'}
      visible={ModalVisibleStatus}
      onRequestClose={() => {
        ShowModalFunction(!ModalVisibleStatus, '');
      }}>
      <View style={styles.modelStyle}>
        <FastImage
          style={styles.fullImageStyle}
          source={{uri: imageSrc}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.closeButtonStyle}
          onPress={() => {
            ShowModalFunction(!ModalVisibleStatus, '');
          }}>
          <FastImage
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
            }}
            style={{width: 35, height: 35, marginTop: 16}}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  ) : (
    <View style={{flex: 1, marginTop: 0}}>
      <Text
        style={{
          padding: 16,
          fontSize: 20,
          color: 'white',
          backgroundColor: 'green',
        }}>
        Galeri Desa
      </Text>
      <FlatList
        data={images}
        // onRefresh={this.handleRefreshJobList}
        // onEndReached={this.handleLoadMoreJobList}
        // onEndThreshold={0.75}
        // refreshing={this.state.isRefreshingJobList}
        renderItem={({item}) => <Item id={item.id} url={item.url} />}
        numColumns={3}
        // ListFooterComponent={this.renderFooter}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default GalleryView;
