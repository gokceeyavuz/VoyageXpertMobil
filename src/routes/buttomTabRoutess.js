import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesName} from '../config';
import {
  AnaSayfa2,
  AnaSayfa,
  AnasayfaTeklif,
  Login1,
  favoriler,
  VxElite,
  SehirListesi,
} from '../Screens';
import {Icons} from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const buttomTabRoutess = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isFocused = useIsFocused();

  // Uygulama açıldığında login olup olmadığını kontrol et
  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('loggedInUser');
      setIsLoggedIn(!!user);
    };
    checkLogin();
  }, [isFocused]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#948D8D', // Pasif ikon rengi
        tabBarStyle: {height: 55}, // Tab bar yüksekliği
      }}>
      <Tab.Screen
        name="AnaSayfa"
        component={AnaSayfa2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: 27, width: 27}}
              source={Icons.home2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoriler"
        component={favoriler}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: 24, width: 24}}
              source={Icons.like}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VX Elite"
        component={VxElite}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 64, width: 64}}
              source={Icons.logo}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Yerel Rehberler"
        component={SehirListesi}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.tourguide}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kullanıcı"
        component={
          isLoggedIn ? require('../Screens/kullaniciHesap').default : Login1
        }
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.user}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default buttomTabRoutess;
