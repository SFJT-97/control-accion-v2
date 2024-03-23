import { View, Text } from 'react-native'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'

export default function SettingsPage () {
  return (
    <View>
      <Drawer.Screen
        options={{
          title: 'Settings',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />
        }}
      />

      <Text>
        Settings Screen
      </Text>
    </View>
  )
}
