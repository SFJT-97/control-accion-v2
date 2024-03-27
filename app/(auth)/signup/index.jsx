import { View, Text } from 'react-native'

import { Stack } from 'expo-router'

import { GlobalStyles } from '../../../globals/styles'

export default function SignUp () {
  return (
    <View style={[GlobalStyles.ContainerCenter]}>
      <Stack.Screen
        options={{
          title: 'Sign Up'
        }}
      />
      <Text style={{ textAlign: 'center' }}>
        Test Sign Up Page
      </Text>
    </View>
  )
}
