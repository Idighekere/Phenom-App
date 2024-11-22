import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import { AdditionalInfo, EarningStructure } from '@/constants/EarningStructure'
import { Pressable } from 'react-native'

type Props = {}

const EarningStructureModal = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀Earning Structure</Text>
      <FlatList
        data={EarningStructure}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.listContainer}>
              {`\u2022`}
              {item.emoji}
              <Text style={{ fontWeight: '700' }}>{item.title}</Text>
              {item.description}
            </Text>
          </View>
        )}
      />

      <Text style={styles.title}>💡Additional Info</Text>

      <FlatList
        data={AdditionalInfo}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.listContainer}>
              {`\u2022`}
              {item.emoji}{' '}
              <Text style={{ fontWeight: '700' }}>{item.title}</Text>
              {item.description}
            </Text>
          </View>
        )}
      />


      <Pressable style={styles.button}>Get Started Now!</Pressable>
    </View>
  )
}

export default EarningStructureModal

const styles = StyleSheet.create({
  container: {
    //padding: 12
  },
  title: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '700',
    marginVertical: 15

  },
  text: {
    color: '#fff'
  },
  button: {
    backgroundColor: Colors.titleText,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: 200,
    textAlign: 'center',
    color: '#fff',
    marginVertical: 15
  },
  listContainer: {
    color: '#fff',
    fontSize: 17,
    // padding: 15,

  }
})