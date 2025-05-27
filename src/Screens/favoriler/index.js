import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import HotelCard from '../../components/HotelCard';

const index = ({navigation}) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const [showCityModal, setShowCityModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  const filteredHotels =
    selectedCity === 'Tüm Şehirler'
      ? hotels
      : hotels.filter(hotel => hotel.location.startsWith(selectedCity));

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

  const baseUrl = 'http://192.168.6.36:3001';

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/hotels`, {
          withCredentials: false,
        });

        setHotels(response.data);
        const uniqueCities = [
          ...new Set(response.data.map(hotel => hotel.location.split(',')[0])),
        ];
        setCities(['Tüm Şehirler', ...uniqueCities]);
      } catch (error) {
        console.error('❌ OTEL VERİSİ ALINAMADI!');
        console.log('💥 error.message:', error.message);
        console.log('💥 error.response:', error.response);
        console.log('💥 error.request:', error.request);
      } finally {
        setLoading(false);
      }
    };

    const loadFavorites = async () => {
      const user = await AsyncStorage.getItem('loggedInUser');
      if (user) {
        const email = JSON.parse(user).email;
        setUserEmail(email);
        const stored = await AsyncStorage.getItem(`favorites_${email}`);
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } else {
        setUserEmail(null);
        setFavorites([]); // çıkış yapılırsa favorileri sıfırla
      }
    };

    fetchHotels();
    loadFavorites();
  }, []);

  const toggleFavorite = async hotelId => {
    if (!userEmail) {
      Alert.alert(
        'Uyarı',
        'Favori otel seçimi yapabilmek için Üye Giriş Yapmalısınız.',
      );
      return;
    }

    const key = `favorites_${userEmail}`;
    let updatedFavorites = [...favorites];

    if (favorites.includes(hotelId)) {
      updatedFavorites = updatedFavorites.filter(id => id !== hotelId);
    } else {
      updatedFavorites.push(hotelId);
    }

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem(key, JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 40}} />;
  }

  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('goTermalHotels')}>
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

      <View style={style.titleContainer}>
        <Text style={style.mainTitle}>Favori Oteller</Text>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={showCityModal}
        onRequestClose={() => setShowCityModal(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>Şehir Seçin</Text>
            <ScrollView>
              {cities.map((city, index) => (
                <TouchableOpacity
                  key={index}
                  style={style.cityItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setShowCityModal(false);
                  }}>
                  <Text style={style.cityItemText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={style.closeButton}
              onPress={() => setShowCityModal(false)}>
              <Text style={style.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={style.cardsContainer}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <View style={style.cardWrapper} key={hotel._id}>
              <TouchableOpacity
                style={style.heartButton}
                onPress={() => toggleFavorite(hotel._id)}>
                <Image
                  source={icons.heart2}
                  style={[
                    style.heartIcon,
                    favorites.includes(hotel._id)
                      ? {tintColor: 'red'}
                      : {tintColor: 'white'},
                  ]}
                />
              </TouchableOpacity>

              <HotelCard
                hotel={hotel}
                onPress={() => navigation.navigate('HotelDetail', {hotel})}
              />
            </View>
          ))
        ) : (
          <Text style={style.noHotelsText}>
            {selectedCity === 'Tüm Şehirler'
              ? 'Henüz otel bulunamadı.'
              : `${selectedCity} şehrinde otel bulunamadı.`}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default index;
