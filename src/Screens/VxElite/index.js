import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../assets/icons';
import images from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem('loggedInUser');
      if (user) {
        const parsed = JSON.parse(user);
        setUserEmail(parsed.email);
      }
    };
    loadUser();
  }, []);

  const posts = [
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

  const user = {
    username: 'gokceeyavuz',
    fullname: 'Gökçe Yavuz',
  };

  return (
    <View style={style.backgrounnddd}>
      
      {/* HEADER */}
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('seyahat')}>
          <Image style={style.menuIcons} source={icons.arrow} />
        </TouchableOpacity>
        <View style={style.textBar}>
          <Text style={style.text1}>V</Text>
          <Text style={style.text2}>oyage</Text>
          <Text style={style.text1}>X</Text>
          <Text style={style.text2}>pert</Text>
        </View>
      </View>

      <LinearGradient
        style={style.line}
        colors={['#82A9FF', '#EDE2FF']}
        start={{ x: 0.5, y: 1.1 }}
        end={{ x: 0.8, y: 1 }}
      />
       {/* SEARCH BAR */}
       <View style={style.alan23}>
        <View
          style={{
            flexDirection: 'row',
            gap: 7,
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: 14,
          }}>
          <Text style={style.testVx}>VX</Text>
          <Text style={style.textElite}>Elite</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '450',
              color: 'grey',
              marginLeft: 8,
            }}>
            VoyageXpert ile en az 12 yolculuğa çıkanlar artık sıradan{'\n'}
            onlar VX Elite! Dünyayı adım adım gezen, anılarını paylaşan, ilham
            olan bireylerle tanışmak için sen de yolculuğa başla!
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 12,
              marginTop: 10,
            }}>
            Beğenmek için giriş yap, Elite olmak için yola çık. ✈️🌍
          </Text>
        </View>
      </View>
    
      <ScrollView>
        {posts.map((post, index) => (
          <View key={index} style={style.postContainer}>
            {/* Kullanıcı Bilgisi */}
            <View style={style.userRow}>
              <View style={style.daire1}>
                <Text style={style.daireIciText}>GY</Text>
              </View>
              <View style={style.userTextContainer}>
                <Text style={style.username}>{user.username}</Text>
                <Text style={style.fullname}>{user.fullname}</Text>
              </View>
            </View>

            {/* Fotoğraf */}
            <Image source={post.image} style={style.postImage} />

            {/* Kalp Butonu */}
            <View style={style.iconRow}>
              <TouchableOpacity
                onPress={() => {
                  if (!userEmail) {
                    Alert.alert(
                      'Uyarı',
                      'Beğeni yapabilmek için giriş yapmanız gerekiyor.'
                    );
                    return;
                  }

                  if (likedPosts.includes(index)) {
                    setLikedPosts(prev => prev.filter(i => i !== index));
                  } else {
                    setLikedPosts(prev => [...prev, index]);
                  }
                }}>
                <Image
                  source={icons.hearttInsta}
                  style={[
                    style.iconHeart,
                    {
                      tintColor: likedPosts.includes(index)
                        ? 'red'
                        : 'black',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>

            {/* Açıklama */}
            <Text style={style.postDescription}>
              <Text style={{ fontWeight: 'bold' }}>{user.username} </Text>
              {post.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;
