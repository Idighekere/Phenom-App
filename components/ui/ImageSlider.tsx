import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { Colors } from '@/constants/Color'

type Images = {
  source: string
  title: string
}
type Props = {
  images: Images[]
  autoplay?: boolean
  interval?: number
}
5
const ImageSlider = ({ images, autoplay = true, interval = 3000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex == images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousSlider = () => {
    setCurrentIndex(prevIndex =>
      prevIndex == 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      return nextSlide()
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [autoplay, interval])

  return (
    <View style={styles.slideContainer}>
      {/* <FlatList
        data={images}
        horizontal
        pagingEnabled
        // keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} />}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      /> */}
      <View
        style={[
          styles.imageContainer,
          { transform: `translateX(-${currentIndex + 100}%)` }
        ]}
      >
        {images.map((image, index) => (
          <View>
            <Image
              source={image?.source}
              //alt={image.title}
              style={styles.image}
              key={index}
            />
          </View>
        ))}
      </View>

      {/* INDICATORS */}
      <View style={styles.indicatorContainer}>
        {images.map((_, idx) => (
          <Pressable
            key={idx}
            onPress={() => setCurrentIndex(idx)}
            style={[
              styles.indicator,
              currentIndex == idx
                ? styles.activeIndicator
                : styles.inactiveIndicator
            ]}
          ></Pressable>
        ))}
      </View>
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({
  slideContainer: {
    position: 'relative',
    overflow: 'hidden'
  },
  imageContainer: {
    display: 'flex',

    transitionDuration: '500'
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    borderRadius: 10
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    gap: 10,
    display: 'flex'
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: '100%'
  },
  activeIndicator: {
    backgroundColor: Colors.titleText
  },
  inactiveIndicator: {
    backgroundColor: 'gray'
  }
})
