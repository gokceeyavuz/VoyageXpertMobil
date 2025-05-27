import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        <Text style={style.hakkimizdaText}>Kullanım Kılavuzu</Text>
      </View>
      <ScrollView>
        <Text style={style.hakkimizdaText2}>
        Hoş geldiniz!{'\n'}
          VoyageXpert, seyahatlerinizi planlamayı, yönetmeyi ve unutulmaz hale
          getirmeyi amaçlayan akıllı bir yol arkadaşınızdır. Bu kullanım
          kılavuzu, uygulamanın tüm temel özelliklerini nasıl kullanacağınızı
          adım adım göstererek size yardımcı olmayı amaçlar. Uygulamaya
          yeniyseniz veya bir özelliği daha iyi anlamak istiyorsanız, bu rehber
          tam size göre! Aşağıda, uygulamayı etkili bir şekilde kullanabilmeniz
          için temel adımları ve ipuçlarını bulabilirsiniz: 🔹 1. Uygulamanın
          İndirilmesi ve Kurulumu{'\n'}
          iOS kullanıcıları: App Store üzerinden "VoyageXpert" aratarak
          uygulamayı ücretsiz indirin.{'\n'}
          Android kullanıcıları: Google Play Store'dan aynı şekilde
          erişebilirsiniz. {'\n'}
          Uygulamayı açtıktan sonra dil seçimi ve temel izinler (konum,
          bildirim) istenir.{'\n'}
          🔹 2. Hesap Oluşturma ve Giriş{'\n'}
          E-posta, Google veya Apple hesabınızla hızlıca kayıt olabilirsiniz.
          {'\n'}
          Profil bilgilerinizi doldurarak kişiselleştirilmiş önerilerden
          faydalanın.{'\n'}
          🔹 3. Ana Sayfa ve Gezgin Panosu{'\n'}
          Ana sayfada önerilen rotalar, popüler destinasyonlar ve güncel
          fırsatlar gösterilir.{'\n'}
          "Gezgin Panosu" bölümünden geçmiş ve gelecekteki planlarınıza
          erişebilirsiniz.{'\n'}
          🔹 4. Seyahat Planı Oluşturma{'\n'}
          Ana sayfada “Yeni Plan Oluştur” butonuna dokunun.{'\n'}
          Gidilecek şehir(ler), tarih aralığı ve seyahat türünü (kültürel, doğa,
          gastronomi vs.) seçin.{'\n'}
          Sistem size otomatik olarak önerilen rota, aktiviteler ve konaklama
          seçeneklerini sunar.{'\n'}
          Dilerseniz rotayı manuel olarak düzenleyebilir, yeni duraklar
          ekleyebilirsiniz.{'\n'}
          🔹 5. Rotalar ve Harita Görünümü{'\n'}
          Harita üzerinde planladığınız tüm durakları ve rotanızı
          görebilirsiniz.{'\n'}
          Yolculuk sırasında adım adım takip edebilir, çevrimdışı modda da
          kullanabilirsiniz.{'\n'}
          🔹 6. Rezervasyonlar ve Ödemeler{'\n'}
          Uygulama üzerinden otel, aktivite ve bazı ulaşım hizmetlerini rezerve
          edebilirsiniz. {'\n'}
          Tüm ödeme işlemleri güvenli altyapı üzerinden gerçekleştirilir.{'\n'}
          “Planım” ekranından rezervasyon durumlarını takip edebilirsiniz.{'\n'}
          🔹 7. Bildirimler ve Hatırlatıcılar{'\n'}
          Planlarınıza özel olarak uçuş saatleri, otel giriş çıkışları, yerel
          etkinlikler gibi konularda bildirim alırsınız. {'\n'}
          Bildirim ayarlarını Profil ,Ayarlar menüsünden düzenleyebilirsiniz.
          {'\n'}
          🔹 8. Offline Mod Seyahate çıkmadan önce planınızı indirerek internet
          bağlantısı olmadan da kullanabilirsiniz.{'\n'}
          Haritalar, rotalar ve temel bilgiler çevrimdışı çalışır.{'\n'}
          🔹 9. Destek ve Yardım Herhangi bir sorun yaşarsanız, Canlı Destek
          üzerinden doğrudan bizimle iletişime geçebilirsiniz.{'\n'}
          Yardım Merkezi’nde sık karşılaşılan sorunlar ve çözümleri mevcuttur.
        </Text>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
