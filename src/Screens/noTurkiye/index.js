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
import TourCard from '../../components/TourCard';

const index = ({navigation}) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const [showCityModal, setShowCityModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    updateTime();
    fetchTours();
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

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/tours`);
      const allTours = response.data;

      // Yalnızca kategori "yurtdisi" olmayan turlar
      const domesticTours = allTours.filter(
        tour => tour.category && tour.category.toLowerCase() == 'yurtdisi',
      );

      // Şehirleri çıkart
      const allCities = domesticTours
        .flatMap(tour => tour.location.split(','))
        .map(city => city.trim());

      const uniqueCities = ['Tüm Şehirler', ...new Set(allCities)];

      setCities(uniqueCities);
      setTours(domesticTours);
    } catch (error) {
      console.error('Yurt içi turlar alınırken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTours =
    selectedCity === 'Tüm Şehirler'
      ? tours
      : tours.filter(tour =>
          tour.location.toLowerCase().includes(selectedCity.toLowerCase()),
        );

  if (loading) {
    return <ActivityIndicator size="large" style={{marginTop: 40}} />;
  }

  return (
    <View style={style.backgrounnddd}>
      {/* ÜST BAR */}
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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

      {/* BAŞLIK */}
      <View style={style.titleContainer}>
        <Text style={style.mainTitle}>Yurt Dışı Turlar</Text>
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

      {/* ŞEHİR MODALI */}
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

      {/* TUR KARTLARI */}
      <ScrollView contentContainerStyle={style.cardsContainer}>
        {filteredTours.length > 0 ? (
          filteredTours.map(tour => (
            <View style={style.cardWrapper} key={tour._id}>
              <TourCard
                tour={tour}
                onPress={() => navigation.navigate('TourDetail', {tour})}
              />
            </View>
          ))
        ) : (
          <Text style={style.noHotelsText}>
            {selectedCity === 'Tüm Şehirler'
              ? 'Henüz tur bulunamadı.'
              : `${selectedCity} şehrinde tur bulunamadı.`}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default index;
