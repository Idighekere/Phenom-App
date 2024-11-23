import { Animated, Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState,useEffect } from 'react'
import { Image } from 'expo-image';
import { Colors } from '@/constants/Color';

type Images = {
    source: string | number;
    title: string;
};

type Props = {
    images: Images[];
    autoplay?: boolean;
    interval?: number;
};


const Carousel = ({ images, autoplay = true, interval = 2000 }: Props) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const flatlistRef=useRef<FlatList>(null)
    const { width: screenWidth } = Dimensions.get("window")


    useEffect(() => {
      const timer=setInterval(()=>{

        if(currentIndex==images.length-1){

            flatlistRef.current?.scrollToIndex({
                index:0,
                animated:true
            })
        } else{
            flatlistRef?.current?.scrollToIndex({
                index:currentIndex+1,
                animated:true
            })
        }
      },interval)

      return () => {
        clearInterval(timer)
      }
    }, [currentIndex])

    const getItemLayout=(data:any,index:number)=>({

        length:screenWidth,
        offset:screenWidth*index,
        index:index
    })
    const renderItem = ({ item, index }: any) => {
        return (<View style={{
            width: screenWidth,
            flex: 1, justifyContent: "center", alignItems: "center"
        }}>
            <Image source={item.source} style={{
                height: "100%",
                width: screenWidth * 0.85,
                // minWidth:"100%",
                aspectRatio: 1,
                justifyContent: "center",
                flex: 1
            }}
                contentFit='contain'
                transition={300}
            />
        </View>)
    }

    const renderDotIndicator = () => {

        return images.map((_, index) => (<Pressable style={[styles.indicator, currentIndex === index && styles.activeIndicator]} onPress={() => setCurrentIndex(index)} key={index}></Pressable>))
    }

    const handleScroll = (event: any) => {

        //Get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x
        //console.log({ scrollPosition })

        //Get the index of the current active image
        const index = scrollPosition / screenWidth

        // Update the index
        setCurrentIndex(index)
    }
    return (
        <View style={styles.container}>

            <Animated.FlatList data={images} renderItem={renderItem}
            ref={flatlistRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            keyExtractor={(_, index) => index.toString()}
            getItemLayout={getItemLayout}

            />

            <View style={styles.indicatorContainer}>
                {renderDotIndicator()}
            </View>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        //margin:15,
        justifyContent: "center",
        flex: 1
    },
    text: {
        color: "#fff"
    },
    indicatorContainer: {
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        marginTop: 15
    },
    indicator: {
        width: 5,
        height: 5,
        borderRadius: "100%",
        backgroundColor: "white"
    },
    activeIndicator: {
        backgroundColor: "gray"
    }
})
