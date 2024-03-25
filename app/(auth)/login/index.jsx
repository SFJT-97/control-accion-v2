/**
 * Experimentacion
 */

import React, { useContext, useState, useEffect } from 'react'
import { Formik, useField } from 'formik'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Alert
} from 'react-native'
import { Stack, Link, Redirect } from 'expo-router'

import StyledText from './styles/StyledText.jsx'
import StyledTextInput from './styles/StyledTextInput.jsx'
import { loginValidationSchema } from './LoginValidation.js'
import { DataContext } from '../../../context/DataContext.js'
import { gql, useMutation, ApolloConsumer } from '@apollo/client'
import { GetToken } from '../../../context/GetToken.js'
import AsyncStorage from '@react-native-community/async-storage'
import CustomActivityIndicator from '../../../globals/components/CustomActivityIndicator.js'

import { TextInput, Button /*, useTheme */ } from 'react-native-paper'
import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons'

const gqlLoginM = gql`
mutation Login($userName: String!, $password: String!, $userPlatform: String!, $tokenDevice: String) {
  login(userName: $userName, password: $password, userPlatform: $userPlatform, tokenDevice: $tokenDevice) {
    value
  }
}

`

let newData
let tokenUserDevice
let userToken
const notAllowedCharacters = ['*', '%', '(', ')', '>', '/', '<', '=', '"', '\\', '>', '`', '\'']

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const { data, setData } = useContext(DataContext)
  newData = data
  // console.log(data)
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => {
          const lastChar = String(value).charAt(String(value).length - 1)
          if (notAllowedCharacters.includes(lastChar)) {
            Alert.alert('Warning!', `character ${lastChar} is not allowed`)
            value = String(value).replace(lastChar, '')
          }
          helpers.setValue(value)
          field.name === 'nickName' ? newData.nickName = value : newData.password = value
          newData.tokenDevice = tokenUserDevice
          newData.idDevice = tokenUserDevice
          setData(newData)
        }}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

async function clearData () {
  ApolloConsumer(client => {
    client.resetStore()
    client.cache.reset()
  })
  await AsyncStorage.setItem('token', '')
  await AsyncStorage.multiRemove(['token'])
  await AsyncStorage.clear()
}

export default function LoginScreen () {
  // const theme = useTheme()

  const { data, setData } = useContext(DataContext)
  const [login, dataLogedUser] = useMutation(gqlLoginM)
  const [waiting, setWaiting] = useState(false)
  try {
    const [tokenDevice, setTokenDevice] = useState(null)
    useEffect(() => GetToken().then(setTokenDevice(tokenDevice)), [{}])
    tokenUserDevice = tokenDevice
  } catch (error) {
    console.log('error getToken')
  }

  return (
    <View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={data}
        onSubmit={
            async (values) => {
              setWaiting(true)
              await AsyncStorage.clear()
              await clearData()
              let user
              const occurence = values.nickName.indexOf('@')
              occurence !== -1 ? user = values.nickName.slice(0, occurence) : user = values.nickName
              try {
                await login({
                  variables:
                  {
                    userName: user,
                    password: values.password,
                    userPlatform: Platform.OS,
                    idDevice: values.idDevice,
                    tokenDevice: values.idDevice,
                    loged: true,
                    idCompany: '',
                    companyName: '',
                    userToChat: ''
                  }
                })
                values.idDevice = tokenUserDevice
                values.loged = true
                newData.loged = true
                setData({ ...values, loged: true, userToken, userToChat: '' })
                await AsyncStorage.setItem('token', userToken)
                setWaiting(false)
              } catch (error) {
                console.error(error)
                setWaiting(false)
                return false
              }
            }
          }
      >
        {({ handleSubmit }) => {
          if (dataLogedUser.data) {
            userToken = dataLogedUser.data.login.value
            if (userToken !== null && data.loged) {
              <Redirect href='/(drawer)/home' />
            }
          }
          return (
            <View style={{ marginVertical: 50, marginHorizontal: 15, rowGap: 30 }}>
              <Stack.Screen
                options={{
                  title: 'Login'
                }}
              />

              <MaterialIcon name='chart-bar' size={56} color='black' style={{ alignSelf: 'center' }} />
              <Text style={{ textAlign: 'center', fontWeight: '200', fontSize: 26 }}>
                CONTROL ACCION
              </Text>
              <View style={{ rowGap: 25 }}>
                <View>
                  <Text>User / email</Text>
                  <FormikInputValue
                    name='nickName'
                    placeholder='User / email'
                  />
                  <FormikInputValue
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                  />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 25 }}>
                  <Button mode='contained' onPress={handleSubmit} title='Log In'>
                    Login
                  </Button>
                  <Button mode='outlined' onPress={() => console.log('Pressed Sign Up Button')}>
                    <Link href='/signup'> Sign Up </Link>
                  </Button>
                </View>
              </View>
            </View>
          )
        }}
      </Formik>
      <CustomActivityIndicator visible={waiting} />
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12,
    backgroundColor: 'lightyellow'
  }
})

/**
 * Esto de abajo, funciona
 */

// import { Stack, Redirect } from 'expo-router'
// import React, { useContext, useState, useEffect } from 'react'
// import { Formik, useField } from 'formik'
// import {
//   Text,
//   View,
//   StyleSheet,
//   Platform,
//   Alert
// } from 'react-native'

// import StyledText from './styles/StyledText.jsx'
// import StyledTextInput from './styles/StyledTextInput.jsx'
// import { loginValidationSchema } from './LoginValidation.js'
// import { DataContext } from '../../../context/DataContext.js'
// import { gql, useMutation, ApolloConsumer } from '@apollo/client'
// import { GetToken } from '../../../context/GetToken.js'
// import AsyncStorage from '@react-native-community/async-storage'
// import CustomActivityIndicator from '../../../globals/components/CustomActivityIndicator.js'

// import { TextInput, Button /*, useTheme */ } from 'react-native-paper'
// import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons'

// const gqlLoginM = gql`
// mutation Login($userName: String!, $password: String!, $userPlatform: String!, $tokenDevice: String) {
//   login(userName: $userName, password: $password, userPlatform: $userPlatform, tokenDevice: $tokenDevice) {
//     value
//   }
// }

// `

// let newData
// let tokenUserDevice
// let userToken
// const notAllowedCharacters = ['*', '%', '(', ')', '>', '/', '<', '=', '"', '\\', '>', '`', '\'']

// const FormikInputValue = ({ name, ...props }) => {
//   const [field, meta, helpers] = useField(name)
//   const { data, setData } = useContext(DataContext)
//   newData = data
//   return (
//     <>
//       <StyledTextInput
//         error={meta.error}
//         value={field.value}
//         onChangeText={value => {
//           const lastChar = String(value).charAt(String(value).length - 1)
//           if (notAllowedCharacters.includes(lastChar)) {
//             Alert.alert('Warning!', `character ${lastChar} is not allowed`)
//             value = String(value).replace(lastChar, '')
//           }
//           helpers.setValue(value)
//           field.name === 'nickName' ? newData.nickName = value : newData.password = value
//           newData.tokenDevice = tokenUserDevice
//           newData.idDevice = tokenUserDevice
//           setData(newData)
//         }}
//         {...props}
//       />
//       {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
//     </>
//   )
// }

// async function clearData () {
//   ApolloConsumer(client => {
//     client.resetStore()
//     client.cache.reset()
//   })
//   await AsyncStorage.setItem('token', '')
//   await AsyncStorage.multiRemove(['token'])
//   await AsyncStorage.clear()
// }

// export default function LogInScreen ({ navigation }) {
//   const { data, setData } = useContext(DataContext)
//   const [login, dataLogedUser] = useMutation(gqlLoginM)
//   const [waiting, setWaiting] = useState(false)
//   try {
//     const [tokenDevice, setTokenDevice] = useState(null)
//     useEffect(() => { GetToken().then(setTokenDevice) }, [])
//     tokenUserDevice = tokenDevice
//   } catch (error) {
//     console.log('error getToken')
//   }
//   return (
//     <>
//       <Formik
//         validationSchema={loginValidationSchema}
//         initialValues={data}
//         onSubmit={
//             async (values) => {
//               setWaiting(true)
//               await AsyncStorage.clear()
//               await clearData()
//               let user
//               const occurence = values.nickName.indexOf('@')
//               occurence !== -1 ? user = values.nickName.slice(0, occurence) : user = values.nickName
//               try {
//                 await login({
//                   variables:
//                   {
//                     userName: user,
//                     password: values.password,
//                     userPlatform: Platform.OS,
//                     idDevice: values.idDevice,
//                     tokenDevice: values.idDevice,
//                     loged: true,
//                     idCompany: '',
//                     companyName: '',
//                     userToChat: ''
//                   }
//                 })
//                 values.idDevice = tokenUserDevice
//                 values.loged = true
//                 newData.loged = true
//                 setData({ ...values, loged: true, userToken, userToChat: '' })
//                 await AsyncStorage.setItem('token', userToken)
//                 setWaiting(false)
//               } catch (error) {
//                 console.error(error)
//                 setWaiting(false)
//                 return false
//               }
//             }
//           }
//       >
//         {({ handleSubmit }) => {
//           if (dataLogedUser.data) {
//             userToken = dataLogedUser.data.login.value
//             if (userToken !== null) {
//               console.log('userToken\n', userToken)
//               console.log('data.loged\n', data.loged)
//               return <Redirect href='/(drawer)/home' />
//             }
//           }
//           return (
//             <View style={styles.form}>
//               <Stack.Screen
//                 options={{
//                   title: 'Login'
//                 }}
//               />
//               <Text>User</Text>
//               <FormikInputValue
//                 name='nickName'
//                 placeholder='User / email'
//               />
//               <Text>Password</Text>
//               <FormikInputValue
//                 name='password'
//                 placeholder='Password'
//                 secureTextEntry
//               />
//               <Button onPress={handleSubmit} title='Log In' />
//             </View>
//           )
//         }}
//       </Formik>
//       <CustomActivityIndicator visible={waiting} />
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 20,
//     marginTop: -5
//   },
//   form: {
//     margin: 12,
//     backgroundColor: 'lightyellow'
//   }
// })
