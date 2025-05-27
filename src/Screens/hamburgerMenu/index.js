import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';

const index = ({navigation}) => {
  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('back')}>
          <Image style={style.menuIcons} source={icons.arrow}></Image>
        </TouchableOpacity>
        <View style={style.textBar}>
          <Text style={style.text1}>V</Text>
          <Text style={style.text2}>oyage</Text>
          <Text style={style.text1}>X</Text>
          <Text style={style.text2}>pert</Text>
        </View>

       
      </View>
      <LinearGradient
        style={style.line}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.1}}
        end={{x: 0.8, y: 1}}></LinearGradient>
      <View style={style.alan4}>
        <TouchableOpacity
          style={style.alan4group1}
          onPress={() => navigation.navigate('goUrunler')}>
          <Image style={style.info} source={icons.product}></Image>
          <Text style={style.infoText}>Ürünlerimiz</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alan4}>
        <TouchableOpacity
          style={style.alan4group1}
          onPress={() => navigation.navigate('goHakkim')}>
          <Image style={style.info} source={icons.info}></Image>
          <Text style={style.infoText}>Hakkımızda</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alan4}>
        <TouchableOpacity
          style={style.alan4group1}
          onPress={() => navigation.navigate('goBizeUlasin')}>
          <Image style={style.info} source={icons.customer}></Image>
          <Text style={style.infoText}>Bize Ulaşın</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alan4}>
        <TouchableOpacity
          style={style.alan4group1}
          onPress={() => navigation.navigate('goSSS')}>
          <Image style={style.info} source={icons.graduation}></Image>
          <Text style={style.infoText}>Sıkça Sorulan Sorular</Text>
        </TouchableOpacity>
      </View>
      <View style={style.alan4}>
        <TouchableOpacity
          style={style.alan4group1}
          onPress={() => navigation.navigate('goKilavuz')}>
          <Image style={style.info} source={icons.openbook}></Image>
          <Text style={style.infoText}>Kullanım Klavuzu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
