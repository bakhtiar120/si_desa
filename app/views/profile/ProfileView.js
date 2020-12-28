/*
 Date : 19 November 2020
 Create Files       : M Bakhtiar Hanafi
 Contributor        : Christian Fransisca, Zayed Elfasa, Alfian
 Modified : ~
*/

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage, ScrollView, StatusBar } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import Colors from '../../assets/styles/colors';
import Styles from '../../assets/styles/styles';
import Dimensions from '../../assets/styles/dimensions';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
const ProfileView = ({ navigation }) => {

  const [response,setResponse] = React.useState(null);
  const [bank,setBank] = React.useState(null);
  const [show_alasan,setShowAlasan] = React.useState(false);
  React.useEffect(() => {
    // get_data_profile();
  }, []);

  function get_data_profile () {
    // httpRequest.get(EndPoint.get_worker_detil + "/" + state.user_id)
    // .then((res) => {
    //     // console.log(`first useEffect`, `isi response ${JSON.stringify(res, null, 2)}`);
    //     console.log("data profile ", res.data)
    //     if(res.data.status==true) {
    //         setResponse(res.data.data)
    //         if(res.data.data.status==4 || res.data.data.status==6) {
    //             setShowAlasan(true);
    //         }
    //     }
    //   }).catch((err) => {
    //   console.log("catch")
    //   console.log(err.response);
	// 	}).then(() => {
	// 		console.log("then");
	// 	});
  }

  return (
            <View style={[Styles.container, { backgroundColor: Colors.white }]}>
                <StatusBar
                    backgroundColor={Colors.black}
                    barStyle="light-content"
                />
                <ScrollView>
                    <View style={Styles.image_center}>
                        <Text style={[Styles.text_nama, Styles.textFontFamily,{color:Colors.black}]}>
                            Biodata Penduduk
                        </Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={[Styles.bio_profile_text, Styles.textFontFamily]}>Nama</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                            Karlin
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.bio_profile_text, Styles.textFontFamily]}>NIK</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                            23432432
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.bio_profile_text, Styles.textFontFamily]}>No KK</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                            231232132
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                     <View>
                        <Text style={[Styles.bio_profile_text, Styles.textFontFamily]}>Akta Kelahiran</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                            -
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.bio_profile_text, Styles.textFontFamily]}>Alamat</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                            DSN WRINGINPITU, RT 001/ RW 001
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Jenis Kelamin</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        Laki-Laki
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Tempat, Tanggal Lahir</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        Jombang, 01-07-1943
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Agama</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        Islam
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Pendidikan dalam KK</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        TIDAK / BELUM SEKOLAH
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Pendidikan yang sedang ditempuh</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        TIDAK DALAM SEKOLAH
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Pekerjaan</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        BELUM/TIDAK BEKERJA
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Status Perkawinan</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        KAWIN TERCATAT
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                    <View>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_text]} >Warga Negara</Text>
                        <Text style={[Styles.textFontFamily, Styles.bio_profile_description]}>
                        WNI
                        </Text>
                        <View style={Styles.separator_line} />
                    </View>
                </ScrollView>
            </View>
        )
}

export default ProfileView;