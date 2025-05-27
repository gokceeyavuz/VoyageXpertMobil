import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import axios from 'axios';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import HotelCard from '../../components/HotelCard';

const Termal = ({navigation}) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const [showCityModal, setShowCityModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);
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
        const response = await axios.get(
          `${baseUrl}/api/hotels/category/ekonomik`,
        );
        setHotels(response.data);
        // Şehirleri benzersiz şekilde çıkar
        const uniqueCities = [
          ...new Set(response.data.map(hotel => hotel.location.split(',')[0])),
        ];
        setCities(['Tüm Şehirler', ...uniqueCities]);
      } catch (error) {
        console.error('Termal otelleri getirirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 40}} />;
  }

  return (
    <View style={style.backgrounnddd}>
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
      <View style={style.titleContainer}>
        <Text style={style.mainTitle}>Ekonomik Oteller</Text>
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
      {/* Şehir seçimi modalı */}
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

export default Termal;
