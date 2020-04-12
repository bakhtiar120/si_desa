

import * as React from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Styles from '../../assets/styles/styles';
import Colors from '../../assets/styles/colors';
import Dimensi from '../../assets/styles/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardMenu = ({icontitle, title, onPress}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        width: responsiveWidth(43),
        height: responsiveWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimensi.default_border_radius,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={''}
          activeOpacity={Dimensi.default_opacity}>
          <Icon
            name={icontitle}
            size={30}
            color={Colors.black}
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardMenu;
