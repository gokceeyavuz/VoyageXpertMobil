import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft:37,
    marginTop:12,
  },
  toursContainer: {
    flex: 1,
    padding: 16,
  },
  tourCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tourImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  tourInfo: {
    flex: 1,
    padding: 12,
  },
  tourName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tourLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tourPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1A237E',
    borderRadius: 13,
    paddingVertical: 10,
    alignItems: 'center',
    width: windowWidth * 0.6,
    height: windowWidth * 0.09,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  menuIcons: {
    width: 15,
    height: 15,
    justifyContent: 'flex-start',
    tintColor: 'black',
    marginTop: 13,
    marginLeft: 8,
    tintColor: 'blue',
  },
});

export default style;
