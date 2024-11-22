import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'

type Props = {}

const Footer = (props: Props) => {
  return (
    <View style={styles.container}>
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

    },
    text:{
        textAlign:"center",
        color:"#fff"
    }
})
