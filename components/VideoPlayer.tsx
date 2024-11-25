import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: "https://youtu.be/FvViBE5hSBc?si=ePLFrdF3kkmoNaxP" }} // URL or local path
        style={styles.video}
        controls={true} // Enables default controls
        resizeMode="contain" // Adjusts the video aspect ratio
        onBuffer={(e) => console.log("Buffering...", e)} // Callback for buffering
        onError={(e) => console.log("Error", e)} // Callback for video errors
        paused={false} // Autoplay video
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default VideoPlayer;
