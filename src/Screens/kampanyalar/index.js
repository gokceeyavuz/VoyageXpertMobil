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
import images from '../../assets/images';

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
      <ScrollView>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('AquaPark')}>
          <Image source={icons.cocukOtels} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>2 Çocuk Ücretsiz Oteller</Text>
            <Text style={style.location}>
              Otellerde Ailece Tatil Fırsatı VX'te
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('denizeSifir')}>
          <Image source={icons.jollytatil} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>Çok VX Bi Tatil 🏖️ 😎</Text>
            <Text style={style.location}>
              Maximum Karta Özel Vade Farksız 9 Taksit
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('butikHotels')}>
          <Image source={icons.bayram} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>
              Kurban Bayramında Sen de Gezz ✈️ ✈️
            </Text>
            <Text style={style.location}>
              Binlerce Otelde Ekstra İndirimler İçin Son Gün 26 Mayıs
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('balayiHotels')}>
          <Image source={images.balayiFirsat} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>VX ile EVEEET 💒 </Text>
            <Text style={style.location}>
              Bir Ömür Unutulmayacak Balayı Tatiline VoyageXpert ile EVEETT!!{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('TermalHotels')}>
          <Image source={images.teklif1} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>Termal Oteller</Text>
            <Text style={style.location}>
              Termal Oteller de %25 ' e varan indirimler için KODU kullanarak
              keşfetmeye başlayın
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.card1}
          onPress={() => navigation.navigate('erken')}>
          <Image source={icons.kumru} style={style.image} />
          <View style={style.info}>
            <Text style={style.text567}>Erken Rezervasyon Fırsatları </Text>
            <Text style={style.location}>
              Yaz Tatilinizi Uzatın %50'ye Varan İndirimleri Kaçırmayın{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default index;
