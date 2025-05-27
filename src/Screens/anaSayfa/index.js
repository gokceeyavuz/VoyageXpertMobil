import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import { RoutesName } from '../../config';
const index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('seyahat');
    }, 2000);
  });
  return (
    <LinearGradient
      style={style.gradient}
      colors={['#82A9FF', '#EDE2FF']}
      start={{x: 0.5, y: 1.1}}
      end={{x: 1.3, y: 1}}>
      <LinearGradient
        style={style.logoBox}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.4}}
        end={{x: 1.5, y: 1}}>
        <Text style={style.logoBoxText}>VX</Text>
      </LinearGradient>
      <View style={style.textBar}>
        <Text style={style.text1}>V</Text>
        <Text style={style.text2}>oyage</Text>
        <Text style={style.text1}>X</Text>
        <Text style={style.text2}>pert</Text>
      </View>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({});
