import { View, Text } from 'react-native'

import { Link } from 'expo-router'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'

import { useMe } from '../../../context/hooks/userQH.js'
import { useEffect, useState } from 'react'

/* import { Button } from 'react-native-paper'; */

/* Seguir probando como pasar los temas globales a los componentes de Paper */

export default function HomePage () {
  const { me } = useMe()
  const [userNick, setUserNick] = useState('')
  useEffect(() => {
    if (me) setUserNick(me.nickName)
  }, [me])
  return (
    <View>
      <Drawer.Screen
        options={{
          title: 'Home',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />
        }}
      />

      {/* Variables locales superseden props y opciones globales, cascada inversa */}

      <Text>
        HomePage
      </Text>

      <Link href={{
        pathname: '/home/[test]',
        params: { test: userNick, idReport: 'lalala' }
      }}
      >
        Navigate to Report of Interest
      </Link>

      {/*         <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button> */}

      <Link href={{
        pathname: '/home/[test]',
        params: { test: '1029312' }
      }}
      >
        Navigate to Report of Interest
      </Link>

      <Link href={{
        pathname: '/home/[test]',
        params: { test: '345' }
      }}
      >
        Navigate to Report of Interest
      </Link>

    </View>
  )
}
