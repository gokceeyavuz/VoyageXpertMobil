import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import icons from '../../assets/icons';
import images from '../../assets/images';
// Şehir resimlerini import et
/*import piramit from '../../assets/images/index.js';
import capetown from '../../assets/images/index.js';
import barca from '../../assets/images/index.js';
import viyana from '../../assets/images/index.js';
import newYork from '../../assets/images/index.js';
import colessum from '../../assets/images/index.js';
import amsterdam from '../../assets/images/index.js';
import burfKhalifa from '../../assets/images/index.js';*/

const cities = [
  {
    city: 'Kahire',
    country: 'Mısır',
    guide: 'Hassan',
    screen: 'goKahire',
    flag: '🇪🇬',
    images: images.piramit,
  },
  {
    city: 'Roma',
    country: 'İtalya',
    guide: 'Luca',
    screen: 'goRoma',
    flag: '🇮🇹',
    images: images.colessum,
  },
  {
    city: 'Barcelona',
    country: 'İspanya',
    guide: 'Sofia',
    screen: 'goBarca',
    flag: '🇪🇸',
    images: images.barca,
  },
  {
    city: 'Viyana',
    country: 'Avusturya',
    guide: 'Johann',
    screen: 'goWien',
    flag: '🇦🇹',
    images: images.viyana,
  },
  {
    city: 'New York',
    country: 'ABD',
    guide: 'Maya',
    screen: 'goNewYork',
    flag: '🇺🇸',
    images: images.newYork,
  },
  {
    city: 'Dubai',
    country: 'BAE',
    guide: 'Khalid',
    screen: 'goDubai',
    flag: '🇦🇪',
    images: images.burfKhalifa,
  },
  {
    city: 'Amsterdam',
    country: 'Hollanda',
    guide: 'Lotte',
    screen: 'goHolland',
    flag: '🇳🇱',
    images: images.amsterdam,
  },
  {
    city: 'Cape Town',
    country: 'Güney Afrika',
    guide: 'Thabo',
    screen: 'goCapeTown',
    flag: '🇿🇦',
    images: images.capetown,
  },
  {
    city: "Paris",
    country: "Fransa",
    guide: "Clara",
    flag: "🇫🇷",
    images: images.paris,
    screen: "goParis",
  },
  {
    city: "İstanbul",
    country: "Türkiye ",
    guide: "Gökçe",
    flag: "🇹🇷🇹🇷",
    images:images.istanbul ,
    screen: "goIstanbul",
  },
];

const CityListScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('seyahat')}>
          <Image style={style.menuIcons} source={icons.back} />
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
        end={{x: 0.8, y: 1}}
      />
      <ScrollView>
        <Text style={style.title}>VoyageXpert ile Yerel Rehberler</Text>
        <View style={style.cardContainer}>
          {cities.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={style.touchable}
              onPress={() => navigation.navigate(item.screen)}>
              <ImageBackground
                source={item.images}
                style={style.card}
                imageStyle={{borderRadius: 12}}>
                <LinearGradient
                  colors={['rgba(19, 19, 19, 0.7)', 'rgba(255, 255, 255, 0)']}
                  style={style.gradientOverlay}
                  start={{x: 0.5, y: 1}} // ALT
                  end={{x: 0.5, y: 0}} // ÜST
                />
                <Text style={style.cityName}>
                  {item.country} - {item.city} {item.flag}
                </Text>
                <Text style={style.guideName}>
                  {item.city}'yi {item.guide} ile Gez
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CityListScreen;
