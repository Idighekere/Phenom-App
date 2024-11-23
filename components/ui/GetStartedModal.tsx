import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Colors } from '@/constants/Color'
import SocialLinks from './SocialLinks'
import { Link } from 'expo-router'

type Props = PropsWithChildren<{
  isVisible?: boolean
  onClose?: () => void
}>

const GetStartedModal = ({ isVisible, onClose, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started with Phenom</Text>
      <Text style={styles.text}>
        To get started, message our verified vendor though our social handles
        fro further assistance. They will guide you through the registration
        process and help you make the most out of your new opportunities.
      </Text>
      {/* <Button label='Contact Our Verified Vendor'/> */}
      <Link href="" style={styles.button}><Text style={[styles.text, { textAlign: "center", }]}>
        Contact Our Verified Vendor</Text></Link>
      <SocialLinks/>
    </View>
  )
}

export default GetStartedModal

const styles = StyleSheet.create({
    container:{
        padding:15,

    },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600'
  },
  text:{
    color:"#fff",

  },
  button:{
    backgroundColor:Colors.titleText,
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:8,
    width:"auto",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    marginVertical:15,
  }
})
