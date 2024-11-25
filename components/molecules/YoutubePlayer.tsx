import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview"
type Props = {
    videoId: string
}

const YoutubePlayer = ({ videoId }: Props) => {

    const { width: screenWidth } = Dimensions.get('window')
    //const height = screenWidth * 9/16; // 16:9 aspect ratio
    const height = Math.floor(screenWidth * 0.5625);

    const html = `
     <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          iframe {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1"
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </body>
    </html>
  `;
    return (
        <View style={{width:screenWidth,height,marginBottom:15,padding:15,borderRadius:10}}>
            <WebView source={{ html }} style={{ flex: 1 }}
                javaScriptEnabled={true} // Enables YouTube player functionality
                domStorageEnabled={true} // Enables proper caching and state management
                mediaPlaybackRequiresUserAction={false}  // Enables autoplay
                allowsInlineMediaPlayback={true}  // Keeps video inline on iOS
            />
        </View>
    )
}

export default YoutubePlayer

const styles = StyleSheet.create({})
