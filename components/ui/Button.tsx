import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'

type Props = {
  label: string
  icon?: string
  variant?: 'primary' | 'header'
  onPress?:()=>void
}

const Button = ({ label, icon, variant ,onPress }: Props) => {
  if (variant == 'header') {
    <Pressable style={styles.button} onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            color: Colors.background
          }
        ]}
      >
        {label}
      </Text>
    </Pressable>
  }
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            color: Colors.titleText
          }
        ]}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 7
  },
  text: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
})
