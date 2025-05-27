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

const SearchResults = ({route, navigation}) => {
  const {searchType, searchParams} = route.params;
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const endpoint =
          searchType === 'otel' ? '/api/hotels/search' : '/api/tours/search';

        const response = await axios.post(
          `http://192.168.6.36:3001${endpoint}`,
          {
            searchText: searchParams.text,
            checkIn: searchParams.checkIn,
            checkOut: searchParams.checkOut,
            adultCount: searchParams.adultCount,
            roomCount: searchParams.roomCount,
          },
        );

        setResults(response.data);
        setError(null);
      } catch (err) {
        setError('Arama sonuçları yüklenirken bir hata oluştu.');
        console.error('Arama hatası:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchType, searchParams]);

  const renderHotelCard = hotel => (
    <TouchableOpacity
      key={hotel._id}
      style={style.resultCard}
      onPress={() => navigation.navigate('HotelDetail', {hotel})}>
      <Image
        source={{uri: hotel.imageUrl}}
        style={style.resultImage}
        defaultSource={require('../../assets/images/otelOdasi.png')}
      />
      <View style={style.resultInfo}>
        <Text style={style.resultName}>{hotel.name}</Text>
        <Text style={style.resultLocation}>{hotel.location}</Text>
        <Text style={style.resultCategory}>{hotel.category}</Text>
        <Text style={style.resultPrice}>{hotel.price} TL</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTourCard = tour => (
    <TouchableOpacity
      key={tour._id}
      style={style.resultCard}
      onPress={() => navigation.navigate('TourDetail', {tour})}>
      <Image
        source={{uri: tour.imageUrl}}
        style={style.resultImage}
        defaultSource={require('../../assets/images/amalfi.png')}
      />
      <View style={style.resultInfo}>
        <Text style={style.resultName}>{tour.name}</Text>
        <Text style={style.resultLocation}>{tour.location}</Text>
        <Text style={style.resultPrice}>{tour.price} TL</Text>
      </View>
    </TouchableOpacity>
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
          <Text style={style.backButton}>← Geri</Text>
        </TouchableOpacity>
        <Text style={style.headerTitle}>
          {searchType === 'otel' ? 'Otel Sonuçları' : 'Tur Sonuçları'}
        </Text>
      </View>
      <ScrollView style={style.resultsContainer}>
        {results.length > 0 ? (
          results.map(searchType === 'otel' ? renderHotelCard : renderTourCard)
        ) : (
          <Text style={style.noResultsText}>Sonuç bulunamadı</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchResults;
