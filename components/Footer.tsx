import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import { Image } from 'expo-image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={{width:60,height:60,}} />
      <Text style={[styles.text,{fontSize:17,fontWeight:"800",marginBottom:10}]}>Phenom</Text>
      <Text style={styles.text}>© Phenom|2024. All rights reserved.</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:Colors.primary,
        justifyContent:"center",
        padding:20,
        alignItems:"center"

    },
    text:{
        textAlign:"center",
        color:"#fff"
    }
})
