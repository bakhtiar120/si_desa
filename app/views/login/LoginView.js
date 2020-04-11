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

import axios from 'axios';

const LoginView = () => {
    return (
        <View style={{
            backgroundColor: 'white',

            flex: 1,

            alignItems: 'center',

            justifyContent: 'center'}}>
            <View style={{
                flexGrow: 1,

                justifyContent: 'flex-end',

                alignItems: 'center'

            }}>

                <Image style={{ width: 200, height: 200 }}

                    source={require('../../assets/images/logo_jombang.png')} />

                <Text style={{
                    marginVertical: 15,

                    fontSize: 18,

                    color: 'red'}}>Kabupaten Jombang.</Text>

            </View>
            <View style={{
                flexGrow: 1,

                justifyContent: 'center',

                alignItems: 'center'}}>
                <TextInput style={{
                    width: 300,

                    backgroundColor: 'grey',

                    borderRadius: 25,

                    paddingHorizontal: 16,
                    textAlign:'center',
                    
                    fontSize: 16,

                    color: '#ffffff',

                    marginVertical: 10}}

                    underlineColorAndroid='rgba(0,0,0,0)'

                    placeholder="NIK KTP"

                    placeholderTextColor="#ffffff"
                    keyboardType={'numeric'}

                />
                <TouchableOpacity style={{
                    width: 300,

                    backgroundColor: '#1c313a',

                    borderRadius: 25,

                    marginVertical: 10,

                    paddingVertical: 13}}>

                    <Text style={{
                        fontSize: 16,

                        fontWeight: '500',

                        color: '#ffffff',

                        textAlign: 'center'}}>MASUK</Text>

                </TouchableOpacity>


            </View>
            
        </View>
    );
}

export default LoginView;