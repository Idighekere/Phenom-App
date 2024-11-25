import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import { Footer, Header } from '@/components';
import { YoutubePlayer } from '@/components/molecules';
import { Carousel } from '@/components/ui';
import { About, EarningsLayout, FAQ, GetStarted } from '@/components/sections';

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
        <YoutubePlayer videoId='FvViBE5hSBc'/>
        <View style={{height:"auto"}}>
        <Carousel images={images} />
          </View>
        <About />
        <EarningsLayout />
        <FAQ />
        <GetStarted />
        <YoutubePlayer videoId='FvViBE5hSBc'/>
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
