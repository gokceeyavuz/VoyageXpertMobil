import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
        <Text style={style.hakkimizdaText}>Sıkça Sorulan Sorular (SSS) </Text>
      </View>
      <ScrollView>
        <Text style={style.hakkimizdaText2}>
          Merak ettiğiniz her şey burada! VoyageXpert olarak, kullanıcılarımızın
          seyahat planlarını mümkün olduğunca kolaylaştırmak istiyoruz. Bu
          yüzden en sık karşılaştığımız soruları ve cevaplarını tek bir sayfada
          topladık. Uygulamamızın kullanımı, üyelik işlemleri, ödeme yöntemleri,
          offline özellikler ve daha fazlası hakkında aklınıza takılan sorulara
          burada hızlıca yanıt bulabilirsiniz. SSS bölümünde bulabilecekleriniz:
          {'\n'}
          Uygulamayı nasıl indirebilirim ve hesap oluşturabilirim? {'\n'}
          Seyahat planımı nasıl yapabilirim?{'\n'}
          Rotalar ve öneriler nasıl kişiselleştiriliyor?{'\n'}
          Offline mod nasıl çalışıyor?{'\n'}
          Ödeme ve iptal işlemleri nasıl gerçekleşiyor?{'\n'}
          Canlı destek ya da teknik yardım nasıl alınır?{'\n'}
          Yine de yanıt bulamadığınız bir konu olursa, hiç çekinmeden “Bize
          Ulaşın” sayfamız üzerinden bizimle iletişime geçebilirsiniz.
          VoyageXpert ekibi olarak size yardımcı olmaktan memnuniyet duyarız.
          Unutmayın: Her sorunuz yeni bir gelişime ilham olabilir!{'\n'}
        </Text>
        <Text style={style.hakkimizdaText2}> 
        1. VoyageXpert uygulamasını nasıl indirebilirim?{'\n'}
VoyageXpert, hem iOS hem Android cihazlarda kullanılabilir. Uygulamanın en güncel sürümünü App Store veya Google Play Store üzerinden ücretsiz olarak indirebilirsiniz. Arama çubuğuna “VoyageXpert” yazmanız yeterli.{'\n'}

2. Hesap oluşturmak zorunda mıyım?{'\n'}
Evet, size en iyi deneyimi sunabilmemiz için uygulamaya kayıt olmanız gerekir. Böylece seyahat tercihlerinize özel öneriler alabilir, planlarınızı kaydedebilir ve cihazlar arasında senkronize şekilde kullanabilirsiniz.{'\n'}

3. Seyahat planı nasıl oluşturulur?{'\n'}
Ana ekrandaki “Yeni Plan Oluştur” butonuna tıklayarak başlangıç ve bitiş tarihlerinizi, destinasyonlarınızı ve ilgi alanlarınızı girin. VoyageXpert sizin için rota, konaklama ve aktivite önerileri sunacaktır. Dilerseniz planınızı özelleştirebilirsiniz.{'\n'}

4. Uygulama internet bağlantısı olmadan da çalışıyor mu?{'\n'}
Evet! Seyahat planınızı önceden indirerek offline modda da kullanabilirsiniz. Haritalar, yerel bilgiler ve plan detaylarına internet bağlantınız olmadan da erişebilirsiniz.{'\n'}

5. Konaklama ve aktiviteleri uygulama üzerinden satın alabilir miyim?{'\n'}
Evet, VoyageXpert iş ortakları aracılığıyla güvenli ödeme sistemleriyle konaklama, tur ve etkinlik rezervasyonları yapabilirsiniz. Tüm işlemler şeffaf ve güvenli şekilde gerçekleşir.{'\n'}

6. Ödeme işlemlerinde hangi yöntemleri kullanabilirim?{'\n'}
Kredi kartı, banka kartı, dijital cüzdanlar (Apple Pay, Google Pay) ve bazı bölgelerde havale/EFT gibi farklı ödeme yöntemlerini destekliyoruz.{'\n'}

7. Planımı iptal edebilir veya değiştirebilir miyim?{'\n'}
Evet, seyahat planınızı istediğiniz zaman düzenleyebilir veya silebilirsiniz. Eğer ücretli bir rezervasyon yaptıysanız, iptal koşulları hizmet sağlayıcısına göre değişiklik gösterebilir. Detayları plan ekranınızdan görebilirsiniz.{'\n'}

8. VoyageXpert ücretli mi?{'\n'}
Uygulamanın temel özellikleri ücretsizdir. Ancak daha gelişmiş özelliklere (premium rotalar, ileri düzey analiz, kişisel seyahat danışmanı vb.) erişmek için isteğe bağlı olarak VoyageXpert Plus aboneliğini satın alabilirsiniz.{'\n'}

9. Canlı destek nasıl çalışır?{'\n'}
Uygulama içinden Profil , Yardım , Canlı Destek adımlarını izleyerek bize ulaşabilirsiniz. Ekibimiz haftanın 7 günü, 09:00 – 21:00 saatleri arasında sorularınızı yanıtlamaya hazır. {'\n'}

10. Kişisel verilerim güvende mi? {'\n'}
Kesinlikle! Kullanıcı gizliliği bizim önceliğimizdir. Tüm kişisel bilgileriniz uluslararası güvenlik standartlarına uygun şekilde korunur ve üçüncü taraflarla izniniz olmadan asla paylaşılmaz.{'\n'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
