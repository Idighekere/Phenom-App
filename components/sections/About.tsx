import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Image } from 'expo-image'
import { Button, Modals } from '../ui'
import { GetStartedModal } from '../molecules'
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

      <View style={styles.itemsContainer}>

        <Image source={require("@/assets/Get onboard.jpg")} style={[styles.image]} contentFit="contain"
        />
      </View>
      <View >
        <View style={styles.paragraphWrapper}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Welcome to Phenom</Text> - a unique platform designed to guide and inspire you through the exciting opportunities within the Phenom network. Phenom is here to introduce you to a world of potential benefits and rewards, helping you discover ways to enhance your digital experience and connect with like-minded individuals.
          </Text>
        </View>

        <View style={styles.paragraphWrapper}>
          <Text style={styles.text}>
            Phenom offers an inside look at how you can make the most of your time online. From understanding the network's rewards to learning about engaging activities, our app serves as an introduction to the various possibilities available. Each feature is designed with you in mind, making it simple to explore and discover what works best for you.
          </Text>
        </View>

        <View style={styles.paragraphWrapper}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Why Choose Phenom?</Text> We believe in empowering individuals to reach their fullest potential, offering knowledge and insights that can support personal and financial growth. Think of Phenom as your gateway to exploring new digital horizons, with clear and informative content to guide you every step of the way. Join us on this journey, and let Phenom be the foundation of your new opportunities.
          </Text>
        </View>
      </View>

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
    marginVertical: 20,
    margin: 15
  },
  title: {
    color: Colors.titleText,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 3,

  },
  paragraphWrapper: {
    marginBottom: 16, // Space between paragraphs
  },
  boldText: {
    fontWeight: '700'
  },
  image: {
    aspectRatio: 1,
    borderRadius: 8,
    height: "100%",
    width: "100%",
    marginBottom: 15,
    flex: 1
  }, itemsContainer: {
    //padding: 20,
    backgroundColor: Colors.primary,
    //height:"auto",
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
