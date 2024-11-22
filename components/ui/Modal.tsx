import { Pressable, StyleSheet, Modal, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/constants/Color'

type Props = PropsWithChildren<{
  isVisible?: boolean
  onClose?: () => void
}>

const Modals = ({ isVisible, onClose, children }: Props) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <Pressable onPress={onClose}>
          <Ionicons name='close-circle-outline' size={24} color='#fff' />
        </Pressable>
        {children}
      </View>
    </Modal>
  )
}

export default Modals

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: Colors.background,
    borderWidth: 1.4,
    borderColor: Colors.primary,
    height: 'auto',
    width: '95%',
    margin: 10,
    borderRadius: 12,
    position: 'absolute',
    bottom: 0,
    padding: 15
  }
})
