import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Image } from 'expo-image'
import '@/assets/logo.png'
import { Button, GetStartedModal, Modals } from './ui'
const logo = require('@/assets/logo.png')
type Props = {}

const Header = (props: Props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleShowModal=()=>{
        setIsModalVisible(true)
    }
    const handleCloseModal =()=>{
        setIsModalVisible(false)
    }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.logoText}>Phenom</Text>
      </View>
      <Button label='Get started' variant='header' onPress={handleShowModal} />

      <Modals isVisible={isModalVisible} onClose={handleCloseModal}>
        <GetStartedModal/>
      </Modals>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: Colors.primary,
    padding: 15,

    borderRadius: 8
  },
  logoContainer: {
    //display:"flex",
    gap: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white'
  },
  image: {
    width: 24,
    height: 24
  }
})
