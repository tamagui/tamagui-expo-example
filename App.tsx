import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, Paragraph, Theme, YStack } from 'tamagui'
import Tamagui from './tamagui.config'

export default function App() {
  return (
    <Tamagui.Provider defaultTheme='light' spacing="$7">
      <YStack flex={1} bc="$bg" ai="center" jc="center">
        <TestComponent />
        <Theme name="dark">
          <TestComponent />
        </Theme>
      </YStack>
      <StatusBar style="auto" />
    </Tamagui.Provider>
  )
}

const TestComponent = () => {
  return (
    <YStack bc="$bg" spacing ai="center">
      <YStack width={100} height={100} backgroundColor="red" />
      <Paragraph size="$6">Hello</Paragraph>
      <Button>Hello</Button>
    </YStack>
  )
}
