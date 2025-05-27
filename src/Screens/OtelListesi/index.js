import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import axios from 'axios';
import icons from '../../assets/icons';

const OtelListesi = ({hotel, route, navigation}) => {
  const {searchParams} = route.params;
  const [hotels, setHotels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const baseUrl = 'http://192.168.6.36:3001';
  const handleWebsitePress = async () => {
    if (hotel.website) {
      try {
        await Linking.openURL(hotel.website);
      } catch (error) {
        console.error('Website açılırken hata oluştu:', error);
      }
    } else {
      onPress(); // Eğer website yoksa normal detay sayfasına yönlendir
    }
  };
  React.useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/hotels`);

        const q = searchParams.text.toLowerCase();

        const filtered = response.data.filter(
          hotel =>
            hotel.title?.toLowerCase().includes(q) ||
            hotel.location?.toLowerCase().includes(q) ||
            hotel.category?.toLowerCase().includes(q),
        );

        setHotels(filtered);
        setError(null);
      } catch (err) {
        setError('Otel listesi yüklenirken bir hata oluştu.');
        console.error('Otel listesi hatası:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [searchParams]);

  const renderHotelCard = hotel => (
    <View
      key={hotel._id}
      style={style.hotelCard}
      onPress={() => navigation.navigate('HotelDetail', {hotel})}>
      <Image source={{uri: hotel.image}} style={style.hotelImage} />
      <View style={style.hotelInfo}>
        <Text style={style.hotelName}>{hotel.title}</Text>
        <Text style={style.hotelLocation}>{hotel.location}</Text>
        <Text style={style.hotelCategory}>{hotel.category}</Text>
        <Text style={style.hotelPrice}>{hotel.price} TL</Text>
        <TouchableOpacity style={style.button} onPress={handleWebsitePress}>
          <Text style={style.buttonText}>DETAYLI BİLGİ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={[style.container, style.centerContent]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[style.container, style.centerContent]}>
        <Text style={style.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 6,
            }}>
            <Image style={style.menuIcons} source={icons.arrow}></Image>
            <Text
              style={{
                color: 'blue',
                fontSize: 15,
                fontWeight: '600',
                marginTop: 10,
              }}>
              Geri
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={style.headerTitle}>Otel Sonuçları</Text>
      </View>
      <ScrollView style={style.hotelsContainer}>
        {hotels.length > 0 ? (
          hotels.map(renderHotelCard)
        ) : (
          <Text style={style.noResultsText}>Sonuç bulunamadı</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default OtelListesi;
