import { Drawer } from 'expo-router/drawer'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function DrawerLayout () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false
          /* swipeEdgeWidth: 0, => Elimina la posibilidad de abrir el menu desplazando desde el borde de la pantalla */
        }}
      >

        <Drawer.Screen
          name='home'
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={24} color='black' />
          }}
        />

        <Drawer.Screen
          name='report'
          options={{
            drawerLabel: 'Report',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='alarm-light' size={24} color='black' />
          }}
        />

        <Drawer.Screen
          name='chat'
          options={{
            drawerLabel: 'Chat',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='chat' size={24} color='black' />
          }}
        />

        <Drawer.Screen
          name='settings'
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='account-cog' size={24} color='black' />
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  )
}
