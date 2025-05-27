import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';

const index = () => {
  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <Image style={style.menuIcons} source={icons.menu}></Image>
        <View style={style.textBar}>
          <Text style={style.text1}>V</Text>
          <Text style={style.text2}>oyage</Text>
          <Text style={style.text1}>X</Text>
          <Text style={style.text2}>pert</Text>
        </View>
        <Image style={style.iconsBell} source={icons.bell}></Image>
      </View>
      <LinearGradient
        style={style.line}
        colors={['#82A9FF', '#EDE2FF']}
        start={{x: 0.5, y: 1.1}}
        end={{x: 0.8, y: 1}}></LinearGradient>
      <ScrollView>
        <ImageBackground
          source={images.teklif1}
          style={style.imageBack}
          borderRadius={14}></ImageBackground>
        <View style={style.alan3}>
          <ImageBackground
            style={style.alan3Teklif3}
            source={images.kıbrısKmanpay}
            borderRadius={14}></ImageBackground>
          <View>
            <Text style={style.alan3TeklifText}>
              Kıbrıs Otellerinde Kampanyalar
            </Text>
            <Text style={style.alan3TeklifText1}>
              Seçili kıbrıs otellerinde 100.000.000 TL ve üzerinde KIBRIS600
              koduyla{' '}
            </Text>
            <Text style={style.alan3TeklifText1}>
              indirim kazan ve tatile git.{' '}
            </Text>
          </View>
        </View>
        <View style={style.alan3}>
          <ImageBackground
            style={style.alan3Teklif3}
            source={images.konserKammanya}
            borderRadius={14}></ImageBackground>
          <View>
            <Text style={style.alan3TeklifText}>
              Kıbrıs'ta Yıldızlar Geçidi
            </Text>
            <Text style={style.alan3TeklifText1}>
              3 Gece 4 Gün kişi başı 24.990 TL'den başlayan fiyatlarla sizinle.
            </Text>
          </View>
        </View>
        <View style={style.alan3}>
          <ImageBackground
            style={style.alan3Teklif3}
            source={images.kampanyaa}
            borderRadius={14}></ImageBackground>
          <View>
            <Text style={style.alan3TeklifText}>
              Erken Rezervasyon Fırsatları
            </Text>
            <Text style={style.alan3TeklifText2}>
              Erken rezervasyon fırsatlarını kaçırma bankKart ve seçili
            </Text>
            <Text style={style.alan3TeklifText2}>kartlarda taksit fırsatı</Text>
          </View>
        </View>
        <View style={style.alan3}>
          <ImageBackground
            style={style.alan3Teklif3}
            source={images.kampanyaYurtdisi}
            borderRadius={14}></ImageBackground>
          <View>
            <Text style={style.alan3TeklifText}>
              Yurtdışı turlarında erken rezervasyon fırsatları!
            </Text>
            <Text style={style.alan3TeklifText2}>
              Erken rezervasyon fırsatlarını kaçırma 300 EURO'ya varan
              indirimlere
            </Text>
            <Text style={style.alan3TeklifText2}>sahip ol</Text>
          </View>
        </View>

        <View style={style.alan3}>
          <ImageBackground
            style={style.alan3Teklif3}
            source={images.sondakika}
            borderRadius={14}></ImageBackground>
          <View>
            <Text style={style.alan3TeklifText}>
              Tatil Rezervasyonun son dakikaya mı kaldı?
            </Text>
            <Text style={style.alan3TeklifText2}>
              Merak etme biz buradayız.Son dakika fırsatlarıyla en iyi tatil
              rezervasyonunu sen yaptır.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
