import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    formContainer: {
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
      },
      label: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 8,
      },
      textArea: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
        minHeight: 60,
        textAlignVertical: 'top',
      },
      imageRow: {
        flexDirection: 'row',
        gap: 10,
      },
      selectBox: {
        borderRadius: 8,
        overflow: 'hidden',
      },
      selectImage: {
        width: 80,
        height: 80,
        borderRadius: 6,
      },
      button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginTop: 12,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 10,
      },
      noPost: {
        textAlign: 'center',
        color: 'gray',
        marginVertical: 20,
      },
      postContainer: {
        width: '92%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        marginTop: 18,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        paddingBottom: 12,
      },
      postImage: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
        marginTop: 3,
      },
      postDescription: {
        paddingHorizontal: 15,
        paddingTop: 10,
        fontSize: 14,
        color: '#333',
      },
      menuIcons: {
        width: 27,
        height: 27,
        justifyContent: 'flex-start',
        tintColor: 'black',
        marginTop: 10,
        marginLeft: 8,
      },
});