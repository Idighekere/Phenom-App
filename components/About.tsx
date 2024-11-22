import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Button, GetStartedModal, Modals } from './ui'
type Props = {}

const About = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleShowModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.title}>
        Phenom: Empowering Your Path to Financial Freedom!
      </Text>
      <Text style={styles.text}>
        <Text>
          <Text style={{ fontWeight: '700' }}>Welcome to Phenom</Text>{' '}
          {`- a unique platform designed to guide and inspire you through the exciting opportunities within the Phenom network. Phenom is here to introduce you to a world of potential benefits and rewards, helping you discover ways to enhance your digital experience and cinnect with like-minded individauls.\n`}
        </Text>

        <Text style={styles.text}>
          {`Phantom offers an inside look at how you can make the most of your time online. From understanding the network's rewards to learningabout engaging activities, our app serves as an introduction to the various possibilities available. Each feature is designed with you in mind, making it simple ro explore and discover what works best for you.\n`}
        </Text>

        <Text style={styles.text}>
x          <Text style={{ fontWeight: '700' }}>Why Choose Phenom?</Text>{' '}
          {`We believe in empowering individauls to reach their fullest potential, offering knowledge and insights that can support personal and financial growth. Think of Phenom as your gateway to exploring new digital horizons, with clear and informative content to guide you every step of the way. Join us on this journey, and let Phenom be the foundation of your new opportunities.`}
        </Text>
      </Text>

      <Button label='Get started now!' onPress={handleShowModal} />

      <Modals isVisible={isModalVisible} onClose={handleCloseModal}>
        <GetStartedModal />
      </Modals>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 10,
    color: '#fff',
    marginVertical: 20
  },
  title: {
    color: Colors.titleText,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    flexDirection: 'column',
    gap: 20
  },
  textBold: {
    fontWeight: '600'
  }
})
