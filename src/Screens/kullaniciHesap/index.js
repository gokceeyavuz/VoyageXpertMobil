import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

const KullaniciHesap = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await AsyncStorage.getItem('loggedInUser');
      if (userData) setUser(JSON.parse(userData));
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('loggedInUser');
    Alert.alert('Çıkış Yapıldı', 'Başarıyla çıkış yaptınız.', [
      {
        text: 'Tamam',
        onPress: () => navigation.navigate('seyahat', {screen: 'Kullanıcı'}),
      },
    ]);
  };

  if (!user)
    return (
      <View style={style.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );

  return (
    <View style={style.container}>
    <View style={style.alan1}> 
      <View style={style.alan2}>
        <View>
          <Text style={style.text1}>Hoşgeldiniz</Text>
          <Text style={style.text2}>{user.firstName} {user.lastName}</Text>
        </View>
       <View style={style.daire1}>
        <Text style={style.daireIciText}>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</Text>
       </View>
      </View>
     
    </View>
    <TouchableOpacity style={style.favoriAlan}   onPress={() => navigation.navigate('goFavList')}>
        <Text style={style.favoriText1}>Favorilerim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.favoriAlan}   onPress={() => navigation.navigate('goElite')}>
        <Text style={style.favoriText1}>Elite Hesabım 👛</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.favoriAlan} onPress={handleLogout}>
        <Text style={style.favoriText2}>Çıkış Yap</Text>
      </TouchableOpacity>

    </View>
  );
};

export default KullaniciHesap;


 

