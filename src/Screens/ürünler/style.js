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
  productListBox: {
    marginTop: 30,
    gap: 18,
    paddingHorizontal: 18,
  },
  productBoxShadow: {
    backgroundColor: 'white',
    borderRadius: 14,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    gap: 15,
  },
  downIcon: {
    width: 30,
    height: 22,
    marginRight: 10,
    tintColor: '#6c63ff',
    marginLeft: 195,
  },
  productBoxText: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  accordionBox: {
    backgroundColor: '#f7f7fa',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingHorizontal: 24,
    paddingBottom: 12,
    gap: 8,
  },
  accordionItem: {
    paddingVertical: 10,
  },
  accordionText: {
    fontSize: 16,
    color: '#6c63ff',
    fontWeight: '500',
  },
  hotelIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 12,
  },
  travellIcons: {
    width: 32,
    height: 25,
    marginLeft: 8,
  },
  travellLL: {
    width: 37,
    height: 28,
    marginLeft: 8,
  },
});
