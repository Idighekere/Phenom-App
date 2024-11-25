import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons';
import '@/assets/logo.png'
import { Modals } from './ui';
import { GetStartedModal } from './molecules';
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

      <Pressable style={styles.button} onPress={handleShowModal}>
        <Ionicons name="people-outline" size={18} color="black" />
        <Text
          style={[
            styles.text,
            {
              color:Colors.primary
            }
          ]}
        >
          Get Started
        </Text>
      </Pressable>
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
    margin: 15,
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
  },
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
    flexDirection:"row",
    gap:4
  },
  text: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '700',

  }
})
