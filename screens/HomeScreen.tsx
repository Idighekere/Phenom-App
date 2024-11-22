import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import {
  About,
  EarningsLayout,
  FAQ,
  GetStarted,
  Header,
  Footer
} from '@/components'
import ImageSlider from '@/components/ui/ImageSlider'

const images = [
  { source: 'https://via.placeholder.com/300/FF0000', title: 'Red Placeholder' }, { source: 'https://via.placeholder.com/300/00FF00', title: 'Green Placeholder' }, { source: 'https://via.placeholder.com/300/0000FF', title: 'Blue Placeholder' },
]
type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.viewContainer}>
        <Header />
        <ImageSlider images={images} />
        <About />
        <EarningsLayout />
        <FAQ />
        <GetStarted />
      </View>
      <Footer />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  viewContainer: {
    backgroundColor: Colors.background,
    padding: 20
  }
})
