import { SafeAreaView } from 'react-native-safe-area-context'; // * usar ScrollView en su lugar si en la pagina va a haber scroll

import { View } from 'react-native'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'
import { useTheme, Text } from 'react-native-paper'

export default function ChatPage () {

  const theme = useTheme();

  return (
    <SafeAreaView>
      <Drawer.Screen
        options={{
          title: 'Chat',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor={theme.colors.primary} />
        }}
      />

      <Text>Chat Page</Text>
    </SafeAreaView>
  )
}
