import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';

const index = ({navigation}) => {
  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('back2')}>
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
      <View>
        <Text style={style.hakkimizdaText}>Bize Ulaşın</Text>
      </View>
      <View>
        <Text style={style.hakkimizdaText2}>
          Her yolculuk bazen bir soruyla başlar. İster uygulamamızla ilgili bir
          geri bildiriminiz, ister bir öneriniz, ister sadece selam vermek
          isteğiniz olsun — VoyageXpert ekibi olarak sizinle iletişimde olmaktan
          mutluluk duyarız. Kullanıcılarımızdan gelen her yorum, bizim için çok
          kıymetli. Çünkü sizin deneyiminiz, bizim pusulamız. Uygulamada
          karşılaştığınız bir sorun mu var? Yeni bir özellik öneriniz mi var? Ya
          da sadece nerede ne yenir diye mi merak ediyorsunuz? Hiç çekinmeden
          bizimle iletişime geçin. {'\n'}
          📩 E-posta: support@voyagexpert.com {'\n'}
          🌍 Web: www.voyagexpert.com {'\n'}📱 Uygulama içi destek:
          Profil,Yardım,Canlı Destek {'\n'}📷 Sosyal Medya: Bizi Instagram, X
          (Twitter) ve TikTok’ta da bulabilirsiniz! @voyagexpert {'\n'}
          Ayrıca Kullanım Kılavuzu (SSS) bölümümüzde birçok konuya dair hızlı
          yanıtlar bulabilirsiniz. Ama bazen bir insanla konuşmak gibisi yoktur
          — biz buradayız, sizi dinliyoruz. VoyageXpert Ekibi Yolculuğunuzun her
          anında yanınızdayız.
        </Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
