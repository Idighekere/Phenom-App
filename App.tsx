import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import { Colors } from './constants/Color'

export default function App () {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style='light' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

    //alignItems: 'center',
    //justifyContent: 'center',
  }
})
