import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HotelCard = ({hotel, onPress}) => {
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

  return (
    <View>
      <View style={styles.card1}>
        <Image source={{uri: hotel.image}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{hotel.title}</Text>
          <Text style={styles.location}>{hotel.location}</Text>
          <View style={styles.row}>
            <Text style={styles.stars}>⭐️⭐️⭐️⭐️</Text>
            <Text style={styles.rating}>({hotel.rating})</Text>
          </View>
          <Text style={styles.price}>{hotel.price} ₺</Text>
          <TouchableOpacity style={styles.button} onPress={handleWebsitePress}>
            <Text style={styles.buttonText}>DETAYLI BİLGİ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    marginRight: 27,
  },
  location: {
    color: '#888',
    marginBottom: 8,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    color: '#FFD700',
    fontSize: 18,
  },
  rating: {
    color: '#888',
    marginLeft: 6,
  },
  price: {
    color: '#1565c0',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1A237E',
    borderRadius: 13,
    paddingVertical: 10,
    alignItems: 'center',
    width: windowWidth * 0.8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card1: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    marginTop: 12,
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default HotelCard;
