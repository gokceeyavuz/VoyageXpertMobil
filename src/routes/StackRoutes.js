import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  AnaSayfa,
  AnaSayfa2,
  balayiHotels,
  Barca,
  BizeUlasin,
  butikHotels,
  CapeTown,
  deluxeHotels,
  denizeSifir,
  Dubai,
  ekonomikHotels,
  eliteGönderi,
  erkenRezervasyon,
  Hakkimizda,
  Hamburger,
  herSeyDahil,
  Hollanda,
  istanbul,
  kahire,
  kampanyalar,
  KullanımKilavuzu,
  Liste,
  Login1,
  Login2,
  NewYork,
  noTurkey,
  OtelListesi,
  Paris,
  perdListesi,
  Rome,
  SSSS,
  TermalHotels,
  TurListesi,
  Viyana,
  VxElite,
  YurtDisiHotels,
  YurtDisiTours,
  yurticiOtels,
  YurtIciTours,
  ürünler,
} from '../Screens';
import {RoutesName} from '../config';
import buttomTabRoutess from './buttomTabRoutess';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AquaPark from '../Screens/AquaPark';
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={RoutesName.ANASAYFA}>
      <Stack.Screen
        name="seyahat"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.ANASAYFA}
        component={AnaSayfa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login2"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kayitOl"
        component={Login2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="back"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="go"
        component={Hamburger}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="back2"
        component={Hamburger}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goHakkim"
        component={Hakkimizda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goBizeUlasin"
        component={BizeUlasin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goSSS"
        component={SSSS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goKilavuz"
        component={KullanımKilavuzu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AquaPark"
        component={AquaPark}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goAquaPark"
        component={AnaSayfa2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermalHotels"
        component={TermalHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goTermalHotels"
        component={AnaSayfa2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="balayiHotels"
        component={balayiHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ekonomikHotels"
        component={ekonomikHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="herSeyDahil"
        component={herSeyDahil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="YurtDisiHotels"
        component={YurtDisiHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="deluxeHotels"
        component={deluxeHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="butikHotels"
        component={butikHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="denizeSifir"
        component={denizeSifir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goUrunler"
        component={ürünler}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goYurticiOtels"
        component={yurticiOtels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="erken"
        component={erkenRezervasyon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kampanyalar"
        component={kampanyalar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goYurtIciTours"
        component={YurtIciTours}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goYurtDisiTours"
        component={noTurkey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtelListesi"
        component={OtelListesi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TurListesi"
        component={TurListesi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kayitAnaSayfa"
        component={AnaSayfa2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goFavList"
        component={Liste}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goVXelite"
        component={VxElite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goKahire"
        component={kahire}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goRoma"
        component={Rome}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goBarca"
        component={Barca}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goWien"
        component={Viyana}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goNewYork"
        component={NewYork}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goDubai"
        component={Dubai}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goHolland"
        component={Hollanda}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goCapeTown"
        component={CapeTown}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goIstanbul"
        component={istanbul}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goParis"
        component={Paris}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="goElite"
        component={eliteGönderi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
