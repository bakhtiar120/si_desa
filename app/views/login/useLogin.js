/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {AuthContext} from '../../../App';
const useLogin = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('');
  const {signIn} = useContext(AuthContext);
  useEffect(() => {
    // setLoading(true);
    var params = {
      no_kk: 35170123456789,
      nik: 35170123456789,
    };
    axios
      .post('http://139.162.40.30/sumberagung/sumberagung/login.php', {
        method: 'POST',

        body: params,
      })
      .then(resp => {
        console.log('hasilnya ', resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  onShowMenu = async () => {
    // navigation.navigate('Home', {
    // });
    signIn({
      userToken: '123',
      usertype: 'WaliKelas',
      numberPhone: '08977352780',
    });
  };
  return [response, onShowMenu];
};

export default useLogin;
