import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const index = ({navigation}) => {
  const [searchType, setSearchType] = useState('otel');
  const [text, setText] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateType, setDateType] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(2);
  const [datePickerError, setDatePickerError] = useState(null);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [rooms, setRooms] = useState([{adults: 2, children: 0}]);

  const showDatePicker = type => {
    setDateType(type);
    setDatePickerVisibility(true);
  };
  <DatePicker
    modal
    open={isDatePickerVisible}
    date={
      dateType === 'checkOut' ? checkOut || new Date() : checkIn || new Date()
    }
    mode="date"
    locale="tr"
    onConfirm={date => {
      if (dateType === 'checkIn') setCheckIn(date);
      else if (dateType === 'checkOut') setCheckOut(date);
      setDatePickerVisibility(false);
    }}
    onCancel={() => setDatePickerVisibility(false)}
  />;

  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = date => {
    try {
      if (dateType === 'checkIn') setCheckIn(date);
      else if (dateType === 'checkOut') setCheckOut(date);
      hideDatePicker();
    } catch (err) {
      setDatePickerError('Tarih seçilemedi. Lütfen tekrar deneyin.');
    }
  };

  const handleRoomChange = (roomIdx, type, op) => {
    setRooms(prev =>
      prev.map((room, idx) => {
        if (idx !== roomIdx) return room;
        if (type === 'adults') {
          let newVal =
            op === 'inc' ? room.adults + 1 : Math.max(1, room.adults - 1);
          return {...room, adults: newVal};
        } else if (type === 'children') {
          let newVal =
            op === 'inc' ? room.children + 1 : Math.max(0, room.children - 1);
          return {...room, children: newVal};
        }
        return room;
      }),
    );
  };
  const handleAddRoom = () => {
    setRooms(prev => [...prev, {adults: 2, children: 0}]);
  };
  const handleApplyGuests = () => {
    // Toplamları ana state'e yaz
    let totalAdults = rooms.reduce((sum, r) => sum + r.adults, 0);
    let totalChildren = rooms.reduce((sum, r) => sum + r.children, 0);
    setAdultCount(totalAdults);
    setRoomCount(rooms.length);
    setGuestModalVisible(false);
  };

  return (
    <View style={style.backgrounnddd}>
      <View style={style.alan1}>
        <TouchableOpacity onPress={() => navigation.navigate('go')}>
          <Image style={style.menuIcons} source={icons.menu}></Image>
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
        start={{x: 0.5, y: 1.1}}
        end={{x: 0.8, y: 1}}></LinearGradient>
      <ScrollView>
        <View style={style.topTabRowCustom}>
          <TouchableOpacity
            style={style.topTabBtnCustom}
            onPress={() => setSearchType('otel')}>
            <Text
              style={[
                style.topTabTextCustom,
                searchType === 'otel' && style.selectedTabTextCustom,
              ]}>
              Otel Ara
            </Text>
            {searchType === 'otel' && (
              <View style={style.selectedTabLineCustom} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={style.topTabBtnCustom}
            onPress={() => setSearchType('tur')}>
            <Text
              style={[
                style.topTabTextCustom,
                searchType === 'tur' && style.selectedTabTextCustom,
              ]}>
              Tur Ara
            </Text>
            {searchType === 'tur' && (
              <View style={style.selectedTabLineCustom} />
            )}
          </TouchableOpacity>
        </View>

        <View style={style.searchAreaBoxCustom}>
          <TextInput
            style={style.inputTextCustom2}
            placeholder={
              searchType === 'otel'
                ? 'Otel, Şehir, Bölge veya Tema'
                : 'Tur, Şehir, Bölge veya Tema'
            }
            placeholderTextColor="#222"
            value={text}
            onChangeText={setText}
          />
          <View style={style.rowDateCustom}>
            <TouchableOpacity
              style={style.dateBtn2}
              onPress={() => showDatePicker('checkIn')}>
              <Text style={style.dateBtnText2}>
                {checkIn ? checkIn.toLocaleDateString() : 'Giriş Tarihi'}
              </Text>
            </TouchableOpacity>
            <View style={style.dateDividerCustom} />
            <TouchableOpacity
              style={style.dateBtn2}
              onPress={() => showDatePicker('checkOut')}>
              <Text style={style.dateBtnText2}>
                {checkOut ? checkOut.toLocaleDateString() : 'Çıkış Tarihi'}
              </Text>
            </TouchableOpacity>
          </View>
          {datePickerError && (
            <Text
              style={{color: 'red', textAlign: 'center', marginVertical: 4}}>
              {datePickerError}
            </Text>
          )}
          <View style={style.guestBoxCustom}>
            <TouchableOpacity onPress={() => setGuestModalVisible(true)}>
              <Text style={style.guestLabelCustom}>Misafir</Text>
              <Text
                style={
                  style.guestTextCustom
                }>{`${adultCount} Yetişkin, ${roomCount} Oda`}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.searchBtnFullCustom}
            onPress={() => {
              if (searchType === 'otel') {
                navigation.navigate('OtelListesi', {
                  searchParams: {
                    text: text,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    adultCount: adultCount,
                    roomCount: roomCount,
                  },
                });
              } else {
                navigation.navigate('TurListesi', {
                  searchParams: {
                    text: text,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    adultCount: adultCount,
                  },
                });
              }
            }}>
            <Text style={style.searchBtnTextFullCustom}>ARA</Text>
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale="tr"
        />

        <View style={style.alan4}>
          <Text style={style.alan4Text1}>Sizin için Öneriler</Text>
          <Text style={style.alan4Text2}>Hepsini Keşfet</Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              gap: 13,
              flexDirection: 'row',
              marginTop: 14,
              marginLeft: 12,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('AquaPark')}>
              <ImageBackground
                source={images.aquapark}
                style={style.imageBack}
                borderRadius={22}>
                <TouchableOpacity style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>AquaPark Otelleri</Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TermalHotels')}>
              <ImageBackground
                source={images.termal}
                borderRadius={22}
                style={style.imageBack}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Termal Otelleri</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('balayiHotels')}>
              <ImageBackground
                source={images.balayi1}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Balayı Otelleri</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ekonomikHotels')}>
              <ImageBackground
                source={images.otelOdasi}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Ekonomik Oteller</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('herSeyDahil')}>
              <ImageBackground
                source={images.every3}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Her Şey Dahil Oteller</Text>
                </View>
              </ImageBackground>{' '}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('YurtDisiHotels')}>
              <ImageBackground
                source={images.yurtdisii1}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>YurtDışı Otelleri</Text>
                </View>
              </ImageBackground>{' '}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('deluxeHotels')}>
              <ImageBackground
                source={images.deluxe}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Deluxe Oteller</Text>
                </View>
              </ImageBackground>{' '}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('butikHotels')}>
              <ImageBackground
                source={images.butik}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Butik Oteller</Text>
                </View>
              </ImageBackground>{' '}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('denizeSifir')}>
              <ImageBackground
                source={images.denizeSifir}
                style={style.imageBack}
                borderRadius={22}>
                <View style={style.imageAciklama}>
                  <Image source={icons.pin} style={style.circleicon}></Image>
                  <Text style={style.circleText}>Denize Sıfır Oteller</Text>
                </View>
              </ImageBackground>{' '}
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{flexDirection:'row',gap:12}}>
           <Image style={style.rightArrowIcons} source={icons.rightarrow}></Image>
           <Text style={style.rigthArrowText}>KEŞFET, PAYLAŞ, İLHAM OL</Text>
          </View>
          <View>
            <Text style={style.rightArrowText2}>VX Elite üyesi misin?{'\n'} O zaman rotandaki en güzel anları bizimle paylaş!
            @VoyageXpert ve #VXElite etiketiyle gönder  seni herkes görsün!</Text>
          </View>
        <ScrollView horizontal={true} style={style.alan3Scrooll}>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.colessum} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Roma,İtaly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.amalfi} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Amalfi,İtaly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.kass2} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Kas,Antalya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.rize3} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Ayder,Rize</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.izmiir2} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Konak,İzmir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.alan3ScrollTextAlani} onPress={() => navigation.navigate('goVXelite')}>
            <View style={style.daire1}>
              <Image source={images.pisa} style={style.daire1icon}></Image>
            </View>
            <Text style={style.scrollText}>Pisa,İtaly</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={style.alan4}>
          <Text style={style.alan4Text1}>Popüler Yerler </Text>
          <Text style={style.alan4Text2}>Hepsini Keşfet</Text>
        </View>
        <ScrollView>
          <TouchableOpacity style={style.images2} onPress={() => navigation.navigate('denizeSifir')}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.amalfi} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Güneş, Deniz, Tatil!</Text>
                <Text style={style.text34}>
                  Sıcak plajlar, berrak denizler{' '}
                </Text>
                <Text style={style.text34}>mükemmel yaz destinasyonlarını</Text>
                <Text style={style.text34}>keşfet.</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.images2}  onPress={() => navigation.navigate('denizeSifir')}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.every} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}> Cennetler!</Text>
                <Text style={style.text34}>Her Şey Dahil Oteller</Text>
                <Text style={style.text34}>
                 Denizin ve Eğlencenin 
                </Text>
                <Text style={style.text34}>keyfini çıkar.</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.images2} onPress={() => navigation.navigate('YurtDisiHotels')} >
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.yurtdisii1} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Dünya Senin Olsun!</Text>
                <Text style={style.text34}>Yeni kültürler keşfet, tarihi </Text>
                <Text style={style.text34}>
                  {' '}
                  yerleri gez.Yurtdışında benzersiz{' '}
                </Text>
                <Text style={style.text34}> deneyimler seni bekliyor.</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.images2} onPress={() => navigation.navigate('deluxeHotels')}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image source={images.cruise} style={style.alanimages2}></Image>
              <View>
                <Text style={style.text23}>Lüks Her Yerde! </Text>
                <Text style={style.text34}>
                  Sadece deniz, siz ve keşfedilecek{' '}
                </Text>
                <Text style={style.text34}>eşsiz rotalar seni bekliyor!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      <Modal
        visible={guestModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setGuestModalVisible(false)}>
        <View style={style.guestModalOverlay}>
          <View style={style.guestModalBox}>
            {rooms.map((room, idx) => (
              <View key={idx} style={style.guestRoomBox}>
                <Text style={style.guestRoomTitle}>{`${idx + 1}. Oda`}</Text>
                <View style={style.guestRow}>
                  <Text style={style.guestTypeText}>Yetişkin</Text>
                  <View style={style.guestCounterRow}>
                    <TouchableOpacity
                      style={style.guestCounterBtn}
                      onPress={() => handleRoomChange(idx, 'adults', 'dec')}>
                      <Text style={style.guestCounterBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={style.guestCounterVal}>{room.adults}</Text>
                    <TouchableOpacity
                      style={style.guestCounterBtn}
                      onPress={() => handleRoomChange(idx, 'adults', 'inc')}>
                      <Text style={style.guestCounterBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.guestRow}>
                  <Text style={style.guestTypeText}>Çocuk</Text>
                  <View style={style.guestCounterRow}>
                    <TouchableOpacity
                      style={[style.guestCounterBtn, {borderColor: '#fbbf24'}]}
                      onPress={() => handleRoomChange(idx, 'children', 'dec')}>
                      <Text
                        style={[style.guestCounterBtnText, {color: '#fbbf24'}]}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text style={[style.guestCounterVal, {color: '#fbbf24'}]}>
                      {room.children}
                    </Text>
                    <TouchableOpacity
                      style={[style.guestCounterBtn, {borderColor: '#fbbf24'}]}
                      onPress={() => handleRoomChange(idx, 'children', 'inc')}>
                      <Text
                        style={[style.guestCounterBtnText, {color: '#fbbf24'}]}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
            <TouchableOpacity
              style={style.guestAddRoomBtn}
              onPress={handleAddRoom}>
              <Text style={style.guestAddRoomText}>+ Oda Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.guestApplyBtn}
              onPress={handleApplyGuests}>
              <Text style={style.guestApplyBtnText}>UYGULA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
