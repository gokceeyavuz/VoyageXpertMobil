import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import axios from 'axios';
import icons from '../../assets/icons';

const TurListesi = ({tour, route, navigation}) => {
  const {searchParams} = route.params;
  const [tours, setTours] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const baseUrl = 'http://192.168.6.36:3001';
  const handleWebsitePress = async () => {
    if (tour.website) {
      try {
        await Linking.openURL(tour.website);
      } catch (error) {
        console.error('Website açılırken hata oluştu:', error);
      }
    } else {
      onPress(); // Eğer website yoksa normal detay sayfasına yönlendir
    }
  };

  React.useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/api/tours`);

        const q = searchParams.text.toLowerCase();

        const filtered = response.data.filter(
          tour =>
            tour.title?.toLowerCase().includes(q) ||
            tour.location?.toLowerCase().includes(q) ||
            tour.category?.toLowerCase().includes(q),
        );

        setTours(filtered);
        setError(null);
      } catch (err) {
        setError('Tur listesi yüklenirken bir hata oluştu.');
        console.error('Tur listesi hatası:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [searchParams]);

  const renderTourCard = tour => (
    <View
      key={tour._id}
      style={style.tourCard}
      onPress={() => navigation.navigate('TourDetail', {tour})}>
      <Image
        source={{uri: tour.image}}
        style={style.tourImage}
        defaultSource={require('../../assets/images/amalfi.jpeg')}
      />
      <View style={style.tourInfo}>
        <Text style={style.tourName}>{tour.title}</Text>
        <Text style={style.tourLocation}>{tour.location}</Text>
        <Text style={style.tourPrice}>{tour.price} TL</Text>
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
         <View style={{flexDirection:'row',justifyContent:'flex-start',
          gap:6,
         }}> 
         <Image style={style.menuIcons} source={icons.arrow}></Image>
         <Text style={{color:'blue', fontSize:15,
          fontWeight:'600', marginTop:10
         }} >Geri</Text>
         </View>
        </TouchableOpacity>
        <Text style={style.headerTitle}>Tur Sonuçları</Text>
      </View>
      <ScrollView style={style.toursContainer}>
        {tours.length > 0 ? (
          tours.map(renderTourCard)
        ) : (
          <Text style={style.noResultsText}>Sonuç bulunamadı</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TurListesi;
