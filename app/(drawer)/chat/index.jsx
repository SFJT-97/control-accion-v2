import { View, Text } from 'react-native'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'

export default function ChatPage () {
  return (
    <View>
      <Drawer.Screen
        options={{
          title: 'Chat',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />
        }}
      />

      <Text>Chat Page</Text>
    </View>
  )
}
