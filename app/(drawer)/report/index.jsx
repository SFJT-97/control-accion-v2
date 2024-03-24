import { SafeAreaView } from 'react-native-safe-area-context'; // * usar ScrollView en su lugar si en la pagina va a haber scroll

import { View, StyleSheet } from 'react-native'

import { Link } from 'expo-router'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'

import HelpButton from '../../../globals/HelpButton'

import Card from './Components/Card'
import CardAI from './Components/CardAI'
import CardSearch from './Components/CardSearch'
import { useTheme, Text } from 'react-native-paper'

/* import { Redirect } from 'expo-router' */

export default function ReportScreen () {

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Report Page',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor={theme.colors.primary} />,
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
        params: { test: '345', name: 'Santiago Juarez' }
      }}
      >
        Navigate to Test Report
      </Link>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
