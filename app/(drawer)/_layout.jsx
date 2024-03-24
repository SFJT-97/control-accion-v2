import { Drawer } from 'expo-router/drawer';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout () {

  const theme = useTheme();

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
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
          }}
        />

        <Drawer.Screen
          name='report'
          options={{
            drawerLabel: 'Report',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='alarm-light' size={size} color={color} />
          }}
        />

        <Drawer.Screen
          name='chat'
          options={{
            drawerLabel: 'Chat',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='chat' size={size} color={color} />
          }}
        />

        <Drawer.Screen
          name='settings'
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='account-cog' size={size} color={color} />
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  )
}
