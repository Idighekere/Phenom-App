import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {
  question: string
  answer: string
}

const Accordian = ({ answer, question }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordian = () => {
    setIsOpen(!isOpen)
  }
  return (
    <View style={styles.accordianContainer}>
      <TouchableOpacity
        onPress={toggleAccordian}
        style={styles.questionContainer}
      >
        <Text style={styles.question}>❓{question}</Text>
        <Text style={styles.toggleIcons}>{isOpen ? <AntDesign name="caretup" size={24} color="black" /> : <AntDesign name="caretdown" size={24} color="black" />}</Text>
      </TouchableOpacity>
      {isOpen && <Text style={styles.answer}>{answer}</Text>}
    </View>
  )
}

export default Accordian

const styles = StyleSheet.create({
  accordianContainer: {
    overflow: 'hidden',
    gap: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15
  },
  questionContainer: { justifyContent: 'space-between', flexDirection: 'row' },
  toggleIcons: {
    fontSize: 19,
    fontWeight: '800'
  },
  question: {
    fontWeight: '700',
    fontSize: 18
  },
  answer: {
    fontSize: 16
  }
})
