import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getHotels} from '../../services/amadeus'; // Daha önce yazdığımız fonksiyon
import style from './style';

const index = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const hotelIds = 'ACPAR419';
        
        const hotelData = await getHotels(hotelIds);
       
       
        setHotels(hotelData.data); // Otel verilerini state'e kaydediyoruz
      } catch (err) {
        setError('Otel verileri alınırken bir hata oluştu');
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <View style={style.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Veriler yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={style.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <FlatList
        data={hotels}
        keyExtractor={item => item.hotel.id.toString()}
        renderItem={({item}) => (
          <View style={style.hotelCard}>
            <Text style={style.hotelName}>{item.hotel.name}</Text>
            <Text>
              {item.hotel.address.line1}, {item.hotel.address.city}
            </Text>
            
          </View>
        )}
      />
    </View>
  );
};

export default index;
