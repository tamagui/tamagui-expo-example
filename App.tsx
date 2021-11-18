import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tamagui from './tamagui.config'
import { YStack, Paragraph } from 'tamagui'

export default function App() {
  return (
    <Tamagui.Provider>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <YStack width={100} height={100} backgroundColor="red" />
        <Paragraph debug>Hello</Paragraph>
        <StatusBar style="auto" />
      </View>
    </Tamagui.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
