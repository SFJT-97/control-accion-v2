/* Comentarios son intentos para poner el logo encima del Drawer   */

import { Drawer } from 'expo-router/drawer'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useMe } from '../../context/hooks/userQH'
import { useEffect, useState } from 'react'
/* import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer' */

/* const DrawerBrand = (props) => {
    return (
    <View>
      <DrawerContentScrollView {...props}>
        <View>
            <DrawerItemList {...props} />
        </View>
        <View>
            <Text>
                Control Accion Brand
            </Text>
        </View>

      </DrawerContentScrollView>
    </View>
    );
  } */

export default function DrawerLayout () {
  const { me } = useMe()
  const [name, setName] = useState('')
  useEffect(() => {
    if (me) setName(me.firstName)
  }, [me])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name='home'
          options={{
            drawerLabel: 'Home',
            headerTitle: name,
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
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
