import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  alan1: {
     marginLeft: 8,
    backgroundColor: 'white',
    width: windowWidth * 0.96,
    borderRadius: 15,
    padding: 29,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
     
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Android için
    backgroundColor: '#fff', // zorunlu iOS gölgesi için
  },
  alan2:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  text1:{
    fontSize:20,
    fontWeight:'500',
    color:'#6B62FF',
    marginBottom:8,
  },
  text2:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
  },
  daire1:{
    backgroundColor:'white',
    width:50,
    borderRadius:29,
    borderWidth:2,
    borderColor:'#6B62FF',

  },
  daireIciText:{
    fontSize:21,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    marginTop:10,
  },
  favoriAlan:{
    width:windowWidth*0.96,
    borderRadius: 15,
    padding: 29,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
     
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Android için
    backgroundColor: '#fff', // zorunlu iOS gölgesi için
    marginLeft:8,
    marginTop:21,
  },
  favoriText1:{
    fontSize:16,
    fontWeight:'600',
    color:'black',
  },
  favoriText2:{
    fontSize:16,
    fontWeight:'600',
    color:'#D32F2F',
  }
});
