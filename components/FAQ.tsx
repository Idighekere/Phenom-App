import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Faq } from '@/constants/Faq'
import { Colors } from '@/constants/Color'
import Accordian from './ui/Accordian'

type Props = {}

const FAQ = (props: Props) => {
  const [isFaqVisible, setIsFaqVisible] = useState(false)

  const toggleAnswer = () => {
    setIsFaqVisible(prev => !prev)
  }

  return (
    <View>
      <Text style={styles.title}>Frequently asked Questions about Phenom</Text>
      <View style={styles.accordianContainer}>
        {Faq.map((faq,idx) => (
          <Accordian key={faq.id} question={faq.question} answer={faq.answer}/>
        ))}
      </View>
    </View>
  )
}

export default FAQ

const styles = StyleSheet.create({
  title: {
    color:"#fff",
    fontSize: 22,
    fontWeight: '600',
    marginBottom:20,
  },
  accordianContainer:{
    display:"flex",
    flex:1,
    gap:10,
    flexDirection:"column"
  },
  questionContainer:{
      backgroundColor:"#fff",
      padding:15,
      borderRadius:15,
      width:'100%',
      alignSelf:"stretch"

  },
  question:{
    fontWeight:"600",
    fontSize: 18,
  }
})
