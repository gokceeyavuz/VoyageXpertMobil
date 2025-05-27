import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
alan1: {
    flexDirection: 'row',
    gap:102,
    backgroundColor:'white',
  
  },
  menuIcons: {
    width: 27,
    height: 27,
    justifyContent: 'flex-start',
    tintColor: 'black',
    marginTop: 15,
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
    marginTop: 10,
    marginRight: 8,
  },
  line: {
    padding: 2,
    width: windowWidth * 1,
    marginTop: 12,
  },
  background: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  alan2:{
    backgroundColor:'white',
    width: windowWidth*1,
    height: windowWidth*0.15,
    }
 
});