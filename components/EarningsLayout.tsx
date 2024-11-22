import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Color'
import { Button, EarningStructureModal, Modals } from './ui'

type Props = {}

const EarningsLayout = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleShowModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <View>
      <Text style={styles.title}>Earnings Layout</Text>
      <View style={styles.itemsContainer}>
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
  title: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    width: 180,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: Colors.titleText,
    justifyContent: 'center',
    marginBottom: 15,
    fontWeight: '600',
    fontSize: 18,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center'
  },
  itemsContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.primary
  }
})
