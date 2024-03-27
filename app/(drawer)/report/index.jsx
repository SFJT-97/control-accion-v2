import { SafeAreaView } from 'react-native-safe-area-context'; // * usar ScrollView en su lugar si en la pagina va a haber scroll

import { View, StyleSheet } from 'react-native'

import { Link } from 'expo-router'

import { Drawer } from 'expo-router/drawer'

import { DrawerToggleButton } from '@react-navigation/drawer'

import HelpButton from '../../../globals/HelpButton'
import { GlobalStyles } from '../../../globals/styles';

import Card from './Components/Card'
import CardAI from './Components/CardAI'
import CardSearch from './Components/CardSearch'
import { useTheme, Text } from 'react-native-paper'
import { center } from '@shopify/react-native-skia';

/* import { Redirect } from 'expo-router' */

export default function ReportScreen () {

  const theme = useTheme();

  return (
    <SafeAreaView style={GlobalStyles.ContainerCenter}>
      <Drawer.Screen
        options={{
          title: 'Report Page',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor={theme.colors.primary} />,
          headerRight: () => <HelpButton />
        }}
      />

      <View style={{ alignSelf: 'center', rowGap: 50 }}>

        <Card />
        <CardAI />
        <CardSearch />
      </View>

    </SafeAreaView>
  )
}