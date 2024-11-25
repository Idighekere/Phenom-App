import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Button, GetStartedModal, Modals, SocialLinks } from './ui'

type Props = {}

const GetStarted = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleShowModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started Now!</Text>
      <Text style={styles.text}>
        Message our Verified Agent on Telegram for your Phenom Registration
      </Text>
      <Button label='Join Waitlist Now!' onPress={handleShowModal} />

      <SocialLinks iconsJustify='center'textAlign="center"/>

      <Modals isVisible={isModalVisible} onClose={handleCloseModal}>
        <GetStartedModal />
      </Modals>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    margin: 15
  },
  title: {
    color: Colors.titleText,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16
  }
})
