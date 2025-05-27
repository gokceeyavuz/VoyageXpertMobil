import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import HotelCard from '../../components/HotelCard';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

const index = ({navigation}) => {
  const [favoriteHotels, setFavoriteHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const [showCityModal, setShowCityModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);
  const filteredHotels =
    selectedCity === 'Tüm Şehirler'
      ? favoriteHotels
      : favoriteHotels.filter(hotel => hotel.location.startsWith(selectedCity));
  useEffect(() => {
    updateTime();
  }, []);

  const updateTime = () => {
    const now = new Date();
    const formatted = now.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setLastUpdate(formatted);
  };
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (!user) {
          setFavoriteHotels([]);
          setLoading(false);
          return;
        }

        const email = JSON.parse(user).email;
        const key = `favorites_${email}`;
        const stored = await AsyncStorage.getItem(key);
        const favoriteIds = stored ? JSON.parse(stored) : [];

        // Favori otel detaylarını çek
        const response = await axios.get('http://192.168.6.36:3001/api/hotels');
        const allHotels = response.data;
        const filtered = allHotels.filter(hotel =>
          favoriteIds.includes(hotel._id),
        );
        setFavoriteHotels(filtered);
      } catch (err) {
        console.error('Favori oteller getirilirken hata:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 40}} />;
  }

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
      <View style={style.titleContainer}>
        <Text style={style.mainTitle}>Termal Otelleri</Text>
        <Text style={style.updateText}>Son Güncelleme: {lastUpdate}</Text>
        <View style={style.filterRow}>
          <TouchableOpacity style={style.updateButton} onPress={updateTime}>
            <Text style={style.updateButtonText}>Fiyatları Güncelle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.cityDropdown}
            onPress={() => setShowCityModal(true)}>
            <Text style={style.cityDropdownText}>{selectedCity}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={style.cardsContainer}>
        {favoriteHotels.length > 0 ? (
          favoriteHotels.map(hotel => (
            <View style={style.cardWrapper} key={hotel._id}>
              <HotelCard
                hotel={hotel}
                onPress={() => navigation.navigate('HotelDetail', {hotel})}
              />
            </View>
          ))
        ) : (
          <Text style={style.noHotelsText}>Favori otel bulunamadı.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default index;
