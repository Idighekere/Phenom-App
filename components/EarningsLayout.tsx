import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Button, EarningStructureModal, Modals } from './ui'
import { Image } from 'expo-image'

type Props = {}

const EarningsLayout = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleShowModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Earnings Layout</Text>
      </View>

      <View style={styles.itemsContainer}>

        <Image source={require("@/assets/Get onboard.jpg")} style={[styles.image]} contentFit="contain"
        />
        <Button label='View Structure Breakdown' onPress={handleShowModal} />
      </View>
      <Modals isVisible={isModalVisible} onClose={handleCloseModal}>
        <EarningStructureModal />
      </Modals>
    </View>
  )
}

export default EarningsLayout

const styles = StyleSheet.create({
  container: {
    width: "auto",
    margin:15,
    borderRadius:10
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // display:"flex",
    // flexDirection:"column",
    marginBottom: 15,
    // flex:1
  },
  title: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Colors.primary,
    color: Colors.titleText,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  itemsContainer: {
    padding: 20,
    backgroundColor: Colors.primary,
    //height:"auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:12,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 8,
    height: "100%",
    width: "100%",
    marginBottom: 15,
    flex: 1
  }
})
