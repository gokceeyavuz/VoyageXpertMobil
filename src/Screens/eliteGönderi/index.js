import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import icons from '../../assets/icons';
import images from '../../assets/images';
import style from './style';

const ElitePanel = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // mock
  const [isAllowed, setIsAllowed] = useState(false);
  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('loggedInUser');
      if (user) {
        const parsed = JSON.parse(user);
        setUserEmail(parsed.email);
        setIsAllowed(parsed.email === 'gokceeyavuz34@gmail.com');
      }
    };
    checkUser();
  }, []);

  const handlePost = () => {
    if (!description || !selectedImage) {
      Alert.alert('Uyarı', 'Lütfen görsel ve açıklama girin.');
      return;
    }

    const newPost = {
      image: selectedImage,
      description,
    };

    setPosts(prev => [newPost, ...prev]);
    setDescription('');
    setSelectedImage(null);

    Alert.alert('Başarılı', 'Gönderiniz eklendi.');
  };

  const fakeImages = [
    images.amalfiResim,
    images.portofinoResim,
    images.napoliPostt3,
    images.parisss,
    images.amalfi,
    images.capetown,
    images.paris
  ];

  const staticVXPosts = [
    {
      image: images.zebraLoungeport,
      description:
        "İstanbul'un Göbeğinde GalataPort ve Boğazı izleyerek eğlencenin tadını çıkarın @zebraloungePort ,#VXElite #İstanbul",
    },
    {
      image: images.İstanbulTurkey,
      description: 'Beşiktaşş #VXElite,#Beşiktaş #İstanbul 🌊',
    },
    {
      image: images.amalfiResim,
      description:
        'Akdeniz Kıyılarında olan İtalya Amalfi denizin tadını çıkarın #VXElite #Amalfi',
    },
    {
      image: images.batumii,
      description:
        'Karadeniz’in kıyısında egzotik bir kaçamak! Sahil, tarih, gece hayatı ve lezzet bir arada. 🌴✨',
    },
    {
      image: images.cesmeAlacati,
      description:
        'Turkuaz koylar, hafif rüzgar ve güneşin en tatlı hali... Alaçatı’da denize açılmadan yaz tamamlanmaz! ⛵🌊',
    },
    {
      image: images.milanoResim,
      description:
        'Moda, sanat ve kahveyle dolu zarif bir kaçamak... Her adımda stil kokan bir şehir! 🇮🇹🖤 #milano #VXElite',
    },
    {
      image: images.napoliGokce23,
      description:
        'Tarihin kalbinde, pizzanın anavatanında ateşli bir İtalyan rüyası! 🍕🌋🇮🇹 #napoli #VXElite',
    },
    {
      image: images.napoliPostt3,
      description:
        'Dar sokaklar, Vezüv manzarası ve sokakta hayatın en gerçek hali... Napoli seni içine çeker! 🇮🇹🔥 #Napoli #VXElite',
    },
    {
      image: images.pantheonPostt2,
      description:
        'Tanrıların mabedi, zamanın ötesinde bir başyapıt… Roma’nın kalbinde sonsuz bir durak! 🇮🇹🏛️ #Romee #VXElite',
    },
    {
      image: images.pisaPosttGokce,
      description:
        'Eğik kule, düz anılar! İtalya’da eğlenceli bir pozun klasiği seni bekliyor. 🇮🇹📸🗼',
    },
    {
      image: images.portofinoResim,
      description:
        'Renkli evler, lüks yatlar ve İtalyan rivierasının en zarif hali... Hayalin denizle buluştuğu yer! 🇮🇹⚓🌺',
    },
    {
      image: images.rizePost,
      description:
        'Çay kokulu vadilerden bulutların üstüne yolculuk… Kaçkar’ın zirvesinde özgürlük, Rize’nin kalbinde huzur var! 🌿🏔️☁️',
    },
    {
      image: images.fontanaDiTrevi,
      description:
        'Bir dilek, bir bozukluk ve belki de bir sonsuz aşk... Aşıklar Çeşmesi’nde kalbin Roma’ya kalır. 💫🪙💖',
    },
    {
      image: images.VenedikPost,
      description:
        'Kanallar, gondollar ve masalsı sokaklar... Venedik’te zaman yavaş akar, kalp hızlanır. 🚤🎭🌊',
    },
  ];

  if (!userEmail) {
    return (
      <View style={style.container}>
        <Text style={style.title}>Sadece Elite üyeler bu sayfaya erişebilir.</Text>
      </View>
    );
  }
  if (!isAllowed) {
    Alert.alert(
      'Uyarı',
      'Bu Sayfa Sadece Elite Kullanıcılarına Özel bir Sayfadır',
      [
        {
          text: 'Ok',
          onPress: () => navigation.goBack(), // Geri yönlendir
        },
      ]
    );
    return null; // sayfa render etmesin
  }
  return (
   
    <ScrollView style={style.backgrounnddd}>
      
      <TouchableOpacity
        style={{ }}
        onPress={() => navigation.navigate('seyahat')}>
        <Image source={icons.arrow} style={style.menuIcons} />
      </TouchableOpacity>

      <Text style={{fontSize:20, color:'black', fontWeight:'bold',textAlign:'center',marginBottom:16,}}>Elite Gönderi Paneli</Text>

      {/* Yeni Gönderi Formu */}
      <View style={style.formContainer}>
        <Text style={style.label}>Açıklama:</Text>
        <TextInput
          placeholder="Ne paylaşmak istersin?"
          value={description}
          onChangeText={setDescription}
          multiline
          style={style.textArea}
        />

        <Text style={style.label}>Görsel Seç:</Text>
        <View style={style.imageRow}>
          {fakeImages.map((img, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedImage(img)}
              style={[
                style.selectBox,
                selectedImage === img && { borderColor: 'blue', borderWidth: 2 },
              ]}>
              <Image source={img} style={style.selectImage} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={style.button} onPress={handlePost}>
          <Text style={style.buttonText}>Gönderiyi Paylaş</Text>
        </TouchableOpacity>
      </View>

      {/* Kullanıcının Yeni Gönderileri */}
      <Text style={style.sectionTitle}>Yeni Gönderileriniz:</Text>
      {posts.length === 0 ? (
        <Text style={style.noPost}>Henüz yeni gönderiniz yok.</Text>
      ) : (
        posts.map((post, index) => (
          <View key={index} style={style.postContainer}>
            <Image source={post.image} style={style.postImage} />
            <Text style={style.postDescription}>{post.description}</Text>
          </View>
        ))
      )}

      {/* VXElite Sabit Gönderiler */}
      <Text style={style.sectionTitle}>Geçmiş Gönderileriniz:</Text>
      {staticVXPosts.map((post, index) => (
        <View key={`vx-${index}`} style={style.postContainer}>
          <Image source={post.image} style={style.postImage} />
          <Text style={style.postDescription}>{post.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ElitePanel;
