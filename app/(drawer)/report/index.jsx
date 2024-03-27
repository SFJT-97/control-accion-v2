import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { DrawerToggleButton } from '@react-navigation/drawer'
import HelpButton from './Components/ReportScreen/HelpButton'

import Card from './Components/ReportScreen/Card'
import CardAI from './Components/ReportScreen/CardAI'
import CardSearch from './Components/ReportScreen/CardSearch'
import { useMe } from '../../../context/hooks/userQH.js'
/* import { Redirect } from 'expo-router' */

export default function ReportScreen () {
  const { me } = useMe()
  const [userNick, setUserNick] = useState('')
  useEffect(() => {
    if (me) setUserNick(me.nickName)
  }, [me])
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Report Page',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
          headerRight: () => <HelpButton />
        }}
      />

      {/* Apply Surface to Cards from React Native Paper */}
      <Card />
      <CardAI />
      <CardSearch />

      {/* Investigar como pasar arrays u objetos a params, de no ser posible, deben ser invocados en la pantalla donde se usan  */}

      <Link href={{
        pathname: '/report/new/[index]',
        params: { test: '345', name: userNick }
      }}
      >
        Navigate to Test Report
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
