import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';

const index = ({navigation}) => {
  const [open, setOpen] = useState(null); // 'otel' veya 'tur' veya null

  const handleAccordion = type => {
    setOpen(prev => (prev === type ? null : type));
  };

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

      {/* Ürünler kutuları */}
      <View style={style.productListBox}>
        {/* Otel */}
        <View style={style.productBoxShadow}>
          <TouchableOpacity
            style={style.productBoxRow}
            onPress={() => handleAccordion('otel')}>
            <Image source={icons.airplane} style={style.hotelIcon} />
            <Text style={style.productBoxText}>Otel</Text>
            <Image source={icons.down} style={style.downIcon} />
          </TouchableOpacity>
          {open === 'otel' && (
            <View style={style.accordionBox}>
              <TouchableOpacity
                style={style.accordionItem}
                onPress={() => navigation.navigate('YurtDisiHotels')}>
                <Text style={style.accordionText}>Yurt Dışı Otelleri</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.accordionItem}
                onPress={() => navigation.navigate('goYurticiOtels')}>
                <Text style={style.accordionText}>Yurt İçi Otelleri</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* Tur */}
        <View style={style.productBoxShadow}>
          <TouchableOpacity
            style={style.productBoxRow}
            onPress={() => handleAccordion('tur')}>
            <Image source={icons.worldTour} style={style.hotelIcon} />
            <Text style={style.productBoxText}>Tur</Text>
            <Image source={icons.down} style={style.downIcon} />
          </TouchableOpacity>
          {open === 'tur' && (
            <View style={style.accordionBox}>
              <TouchableOpacity
                style={style.accordionItem}
                onPress={() => navigation.navigate('goYurtDisiTours')}>
                <Text style={style.accordionText}>Yurt Dışı Turlar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.accordionItem}
                onPress={() => navigation.navigate('goYurtIciTours')}>
                <Text style={style.accordionText}>Yurt İçi Turlar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* Yurt Dışı */}
        <View style={style.productBoxShadow}>
          <TouchableOpacity
            style={style.productBoxRow}
            onPress={() => navigation.navigate('YurtDisiHotels')}>
            <Image source={icons.travelagency} style={style.travellIcons} />
            <Text style={style.productBoxText}>Yurt Dışı</Text>
          </TouchableOpacity>
        </View>
        {/* Erken Rezervasyon Fırsatları */}
        <View style={style.productBoxShadow}>
          <TouchableOpacity
            style={style.productBoxRow}
            onPress={() => navigation.navigate('erken')}>
            <Image source={icons.travelLocation} style={style.travellIcons} />
            <Text style={style.productBoxText}>
              Erken Rezervasyon Fırsatları
            </Text>
          </TouchableOpacity>
        </View>
        {/* Kampanyalar */}
        <View style={style.productBoxShadow}>
          <TouchableOpacity
            style={style.productBoxRow}
            onPress={() => navigation.navigate('kampanyalar')}>
            <Image source={icons.social} style={style.travellLL} />
            <Text style={style.productBoxText}>Kampanyalar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
