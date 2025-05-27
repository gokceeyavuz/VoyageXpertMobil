import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LocalGuideChat from '../../components/LocalGuideChat';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';

const index = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={style.alan2}>
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
          start={{ x: 0.5, y: 1.1 }}
          end={{ x: 0.8, y: 1 }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>
          🗼 Clara Konuşuyor: "Paris' e Hoşgeldiniz!"
          </Text>
          <LocalGuideChat city="Paris" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default index;