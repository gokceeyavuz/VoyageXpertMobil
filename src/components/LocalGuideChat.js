import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LocalGuideChat = ({city = 'Kahire'}) => {
  const [messages, setMessages] = useState([]); // [{sender: 'user' | 'ai', text: '...'}]
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {sender: 'user', text: input}]);
    setLoading(true);

    try {
      const res = await axios.post('http://192.168.6.36:3001/api/ai-guide', {
        city,

        question: input,
      });

      setMessages(prev => [...prev, {sender: 'ai', text: res.data.reply}]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {sender: 'ai', text: 'Bir hata oluştu 😢'},
      ]);
    }

    setInput('');
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bugün {city} 'da Ne Yapmak İstersin? </Text>
      <ScrollView style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <Text
            key={idx}
            style={[
              styles.message,
              msg.sender === 'user' ? styles.user : styles.ai,
            ]}>
            {msg.text}
          </Text>
        ))}
        {loading && <ActivityIndicator size="small" color="#555" />}
      </ScrollView>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Rehbere bir şey sor..."
        style={styles.input}
      />
      <Button title="Gönder" onPress={sendMessage} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: windowWidth * 1.5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  chatBox: {flex: 1, marginBottom: 10},
  message: {padding: 10, marginVertical: 5, borderRadius: 8},
  user: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  ai: {
    backgroundColor: '#EEE',
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default LocalGuideChat;
