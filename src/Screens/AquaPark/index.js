import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  Modal,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import icons from '../../assets/icons';
import axios from 'axios';
import HotelCard from '../../components/HotelCard';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const AquaPark = ({navigation}) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const [showCityModal, setShowCityModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Platform-specific base URL
  const getBaseUrl = () => {
    if (Platform.OS === 'ios') {
      return 'http://localhost:3001'; // iOS simülatörü için localhost
    } else if (Platform.OS === 'android') {
      return 'http://10.0.2.2:3001'; // Android emülatörü için
    } else {
      return 'http://192.168.6.36:3001'; // Diğer platformlar için
    }
  };

  const baseUrl = getBaseUrl();

  const fetchHotels = async () => {
    try {
      setLoading(true);
      console.log(
        '🔄 Fetching hotels from:',
        `${baseUrl}/api/hotels/category/aquapark`,
      );

      const response = await axios.get(
        `${baseUrl}/api/hotels/category/aquapark`,
        {
          timeout: 10000, // 10 saniye timeout
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(
        '✅ Hotels fetched successfully:',
        response.data.length,
        'hotels',
      );
      const hotelData = response.data;
      setHotels(hotelData);

      // Benzersiz şehirleri çıkar
      const uniqueCities = [
        ...new Set(hotelData.map(hotel => hotel.location.split(',')[0])),
      ];
      setCities(['Tüm Şehirler', ...uniqueCities]);
      setLoading(false);
    } catch (error) {
      console.error('❌ Error fetching hotels:', error);
      console.log('🔍 Error details:');
      console.log('- Message:', error.message);
      console.log('- Code:', error.code);
      console.log('- Response:', error.response?.data);
      console.log('- Status:', error.response?.status);
      console.log('- Base URL used:', baseUrl);

      Alert.alert(
        'Bağlantı Hatası',
        `Oteller yüklenirken bir hata oluştu.\n\nHata: ${error.message}\nURL: ${baseUrl}\n\nLütfen internet bağlantınızı kontrol edin.`,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
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

  const filteredHotels =
    selectedCity === 'Tüm Şehirler'
      ? hotels
      : hotels.filter(hotel => hotel.location.startsWith(selectedCity));

  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 40}} />;
  }

  return (
    <View style={styles.background}>
      {/* Başlık ve üst bar */}
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('seyahat')}>
          <Image style={style.menuIcons} source={icons.back}></Image>
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
      {/* Ana başlık ve filtreler */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Aquapark Otelleri</Text>
        <Text style={styles.updateText}>Son Güncelleme: {lastUpdate}</Text>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.updateButton} onPress={updateTime}>
            <Text style={styles.updateButtonText}>Fiyatları Güncelle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cityDropdown}
            onPress={() => setShowCityModal(true)}>
            <Text style={styles.cityDropdownText}>{selectedCity}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Şehir seçimi modalı */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCityModal}
        onRequestClose={() => setShowCityModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Şehir Seçin</Text>
            <ScrollView>
              {cities.map((city, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.cityItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setShowCityModal(false);
                  }}>
                  <Text style={styles.cityItemText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCityModal(false)}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Otel kartları */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <View style={styles.cardWrapper} key={hotel._id}>
              <HotelCard
                hotel={hotel}
                onPress={() => navigation.navigate('HotelDetail', {hotel})}
              />
            </View>
          ))
        ) : (
          <Text style={styles.noHotelsText}>
            {selectedCity === 'Tüm Şehirler'
              ? 'Henüz otel bulunamadı.'
              : `${selectedCity} şehrinde otel bulunamadı.`}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6c63ff',
  },
  titleContainer: {
    backgroundColor: '#F5F5F5',
    margin: 16,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 6,
    textAlign: 'center',
  },
  updateText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  filterRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#1A237E',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    flex: 1,
    marginRight: 8,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: '450',
    fontSize: 16,
    textAlign: 'center',
  },
  cityDropdown: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cityDropdownText: {
    color: '#1A237E',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  cardWrapper: {
    width: windowWidth * 0.92,
    marginVertical: 10,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cityItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cityItemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#1A237E',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  noHotelsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default AquaPark;
