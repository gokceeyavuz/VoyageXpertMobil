import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  alan1: {
    flexDirection: 'row',
    gap:102,
  },
  menuIcons: {
    width: 27,
    height: 27,
    justifyContent: 'flex-start',
    tintColor: 'black',
    marginTop: 13,
    marginLeft: 8,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#5F60E0',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#D7C0FF',
    marginTop: 6,
  },
  textBar: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
  iconsBell: {
    width: 27,
    height: 27,
    justifyContent: 'flex-end',
    tintColor: 'black',
    marginTop: 13,
    marginRight: 8,
  },
  line: {
    padding: 2,
    width: windowWidth * 1,
    marginTop: 12,
  },
  backgrounnddd: {
    backgroundColor: '#FBFBFB',
    flex: 1,
  },
  image: {
    width: windowWidth * 0.89,
    height: windowWidth * 0.4,
  
  },
  info: {
    padding: 16,
  },
  text567: {
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 4,
    marginRight: 140,
  },
  location: {
    color: '#888',
    marginBottom: 8,
    fontWeight: '400',
  },
  card1: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    marginTop: 12,
    width: windowWidth * 0.9,
    height: windowWidth * 0.68,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
