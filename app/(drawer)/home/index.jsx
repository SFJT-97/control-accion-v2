import { ScrollView, View } from 'react-native'; // * usar SafeAreaView en su lugar si en la pagina no habra scroll

import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { useTheme, Text } from 'react-native-paper';

import Chart from './components/charts/chart'

export default function HomePage () {

  const theme = useTheme()

  return (
    <ScrollView>
      <Drawer.Screen
        options={{
          title: 'Home',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor={theme.colors.primary} />
        }}
      />
      <View style={{ rowGap: 50, alignSelf: 'center' }}>
        <Text>Test Home</Text>
        <Chart />
      </View>
    </ScrollView>
  )
}
