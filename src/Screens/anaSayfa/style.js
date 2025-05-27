import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoBox: {
    width: 135,
    height: 135,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 278,
  },
  logoBoxText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#5F60E0',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
  textBar: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 49,
    color: '#5F60E0',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 38,
    color: '#EDE2FF',
    marginTop: 8,
  },
});
