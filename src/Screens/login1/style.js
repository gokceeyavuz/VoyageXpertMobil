import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#A380E0',
  },
  gorResim: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 67,
  },
  TextApp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  TextWelcome: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    justifyContent: 'flex-start',
    margin: 19,
  },
  userAlani: {
    padding: 1,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  usernameText: {
    marginLeft: '24',
  },
  userName: {
    fontSize: 16,
    fontWeight: '250',
    color: 'white',
    marginHorizontal: 20,
  },
  userAlani2: {
    padding: 1,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    marginVertical: 7,
    alignSelf: 'center',
  },
  password: {
    fontSize: 16,
    fontWeight: '250',
    color: 'white',
   
  },
  passwordAlani: {
    marginVertical: 37,
  },
  loginAlani: {
    padding: 14,
    borderRadius: 34,
    backgroundColor: 'white',
    marginTop: 49,
    alignSelf: 'center',
    width: windowWidth * 0.7,
  },
  loginText: {
    color: '#9E80DA',
    fontSize: 19,
    fontWeight: '400',
    justifyContent: 'center',
    width: windowWidth * 0.7,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textBar: {
    fontSize: 10,
    fontWeight: '200',
    color: 'white',
    alignSelf: 'center',
    margin: 8,
  },

  createAlani: {
    padding: 14,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 6,
    alignSelf: 'center',
    width: windowWidth * 0.5,

  },
  createText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    alignSelf: 'center',
    margin: 3,
  },
  alan2: {
    margin: 36,
  },
  gradient: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoBox: {
    width: 120,
    height: 120,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 54,
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
    fontSize: 32,
    color: '#5F60E0',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#EDE2FF',
    marginTop: 8,
  },
  inputText1: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  forgetpassword:{
    fontSize:15,
    fontWeight:'300',
    color:'white',
    alignSelf:'center',
    marginTop:3
  }
});
