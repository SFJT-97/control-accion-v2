/* Cambiar por la interfaz de reporte individual que tendra una grafica de reporte general y sus respectivas tablas */

import { View, Text } from 'react-native'

import { Stack, useLocalSearchParams } from 'expo-router'

export default function TestReport () {
  const { test } = useLocalSearchParams()

  return (
    <View>

      <Stack.Screen
        options={{
          title: ('Report #' + test)
        }}
      />

      <Text>
        Test Report: {test}
      </Text>
    </View>
  )
}
