import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

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
        <Text style={style.hakkimizdaText}>Hakkımızda</Text>
      </View>
      <ScrollView>
        <Text style={style.hakkimizdaText2}>
          VoyageXpert, seyahati sadece bir yerden bir yere gitmek olarak
          görmeyen, her yolculuğun bir hikâye, her duraklamanın bir keşif
          olduğuna inanan bir ekip tarafından hayata geçirildi. Bizim için
          seyahat; anılar biriktirmek, yeni kültürlerle tanışmak, hayatın
          rutininden sıyrılmak ve kendini yeniden keşfetmektir. Bu yüzden
          VoyageXpert, sıradan bir seyahat uygulamasından çok daha fazlasını
          sunar: Yolculuğunuzu kolaylaştıran dijital bir yol arkadaşı. Mobil
          uygulamamız, kullanıcıların seyahatlerini en ince detayına kadar
          planlamasına olanak tanırken; aynı zamanda spontane maceraları da
          destekleyecek şekilde esnek, hızlı ve sezgiseldir. Gideceğiniz yer
          neresi olursa olsun, VoyageXpert size özel rotalar önerir, bütçenize
          uygun konaklama ve yeme-içme alternatifleri sunar, gezilecek yerleri
          önceliklerinize göre sıralar ve anlık olarak ulaşım, hava durumu ya da
          yerel etkinlikler gibi bilgilerle size rehberlik eder. Biz Kimiz?
          VoyageXpert ekibi; teknolojiye tutkuyla bağlı, seyahat etmeyi yaşam
          tarzı haline getirmiş bir grup gezgin, geliştirici ve tasarımcıdan
          oluşuyor. Her biri farklı coğrafyalardan esinlenen bu ekip, kullanıcı
          deneyimini merkezine alarak, her gezginin ihtiyaçlarını anlayan ve
          karşılayan bir uygulama geliştirmeyi hedefliyor. Uygulamanın her satır
          kodunda, her tasarım kararında bu vizyonun izleri var. Neden
          VoyageXpert? Kişiselleştirilmiş Seyahat Deneyimi: Alışkanlıklarınıza,
          ilgi alanlarınıza ve bütçenize göre öneriler. Akıllı Rota Planlayıcı:
          Zamanınızı en verimli şekilde kullanmanızı sağlayan detaylı seyahat
          planları. Gerçek Zamanlı Bilgilendirme: Uçuş güncellemeleri, hava
          durumu, yerel etkinlikler ve daha fazlası.  Yolculuk Daha Yeni Başladı 
        </Text>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
