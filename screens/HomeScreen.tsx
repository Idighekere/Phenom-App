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
import { Carousel } from '@/components/ui';

const images = [
  { title: "Image 1", source: require("@/assets/Phenom is Global.jpg")},
  { title: "Image 2", source: require("@/assets/Unleash The Opulence In You with Phenom.jpg") },
  { title: "Image 3", source: require('@/assets/Get onboard.jpg') },
];

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.viewContainer}>
        <Header />
        <View style={{height:"auto"}}>
        <Carousel images={images} />
          </View>
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
    flex: 1,
    marginTop:35
  },
  viewContainer: {
    backgroundColor: Colors.background,
    // margin: 20,

  }
})
