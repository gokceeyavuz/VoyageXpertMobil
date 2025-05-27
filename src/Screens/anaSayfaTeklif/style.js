import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  backgrounnddd: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  alan1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcons: {
    width: 27,
    height: 27,
    justifyContent: 'flex-start',
    tintColor: 'black',
    marginTop: 10,
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
  imageBack: {
    width: windowWidth * 0.98,
    height: windowWidth * 0.8,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 14,
  },
  alan3: {
    width: windowWidth * 0.98,
    height: windowWidth * 0.72,
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 14,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  alan3Teklif2: {
    width: windowWidth * 0.98,
    height: windowWidth * 0.5,
    alignSelf: 'center',
  },
  alan3Teklif3: {
    width: windowWidth * 0.97,
    height: windowWidth * 0.5,
    alignSelf: 'center',
  },
  alan3TeklifText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'flex-start',
    marginLeft: 13,
    marginTop: 11,
  },
  alan3TeklifText1: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'flex-start',
    marginLeft: 13,
    marginTop: 4,
  },
  alan3TeklifText2: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    justifyContent: 'flex-start',
    marginLeft: 13,
    marginTop: 4,
  },
});
