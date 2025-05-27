import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from './style'
import LinearGradient from 'react-native-linear-gradient'
import icons from '../../assets/icons'

const index = () => {
  return (
    <View style={style.backgrounnddd}>
          <View style={style.alan1}>
            <Image style={style.menuIcons} source={icons.menu}></Image>
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
            <View style={style.alan2}>

            </View>
            </View>
  )
}

export default index

const styles = StyleSheet.create({})