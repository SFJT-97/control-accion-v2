import * as React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Stack, Link } from 'expo-router'

import { TextInput, Text, Button, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons'

function LoginScreen () {
  const theme = useTheme()

  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <SafeAreaView style={{ marginVertical: 30, marginHorizontal: 15, rowGap: 30 }}>
      <Stack.Screen
        options={{
          title: 'Login'
        }}
      />

      <MaterialIcon name='chart-bar' size={56} color={theme.colors.primary} style={{ alignSelf: 'center' }} />
      <Text variant='headlineLarge' style={{ textAlign: 'center', fontWeight: '200' }}>
        CONTROL ACCION
      </Text>

      <View style={{ rowGap: 25 }}>

        <TextInput
          label='Username'
          mode='outlined'
          right={<TextInput.Icon icon='account' />}
          onChangeText={user => setUser(user)}
        />

        <TextInput
          label='Password'
          mode='outlined'
          secureTextEntry
          right={<TextInput.Icon icon='eye' onPress={() => console.log('Password Icon Pressed')} />}
          onChangeText={password => setPassword(password)}
        />

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 25 }}>

        <Button mode='contained' onPress={() => console.log('Pressed Login Button')}>
          Login
        </Button>
        <Button mode='outlined' onPress={() => console.log('Pressed Sign Up Button')}>
          <Link href='/signup'> Sign Up </Link>
        </Button>
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen
