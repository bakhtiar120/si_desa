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

const LoginView = () => {
    return (
        <View style={styles.container_center}>
            <View style={styles.container_logo}>

                <Image style={ styles.logo_size}

                    source={require('../../assets/images/logo_jombang.png')} />

                <Text style={styles.text_login}>Kabupaten Jombang.</Text>

            </View>
            <View style={{
                flexGrow: 1,

                justifyContent: 'center',

                alignItems: 'center'}}>
                <TextInput style={styles.form_input}

                    underlineColorAndroid='rgba(0,0,0,0)'

                    placeholder="NIK KTP"

                    placeholderTextColor="#ffffff"
                    keyboardType={'numeric'}

                />
                <TouchableOpacity style={styles.button_standard}>

                    <Text style={styles.text_button}>MASUK</Text>

                </TouchableOpacity>


            </View>
            
        </View>
    );
}

export default LoginView;