import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-community/async-storage'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
  uri: 'http://192.168.1.37:4000/graphql'
})

let tokenValue
const getValue = async () => {
  await AsyncStorage.getItem('token').then(async value => {
    await AsyncStorage.flushGetRequests(tokenValue = `BEARER ${value}`)
    console.log('tokenValue on ApolloClient side (then)= \n', tokenValue)
  }
  ).catch(
    value => {
      tokenValue = `BEARER ${value}`
      console.log('tokenValue on ApolloClient side (catch)= \n', tokenValue)
    }
  )
  if (tokenValue === 'BEARER ' + null) {
    AsyncStorage.flushGetRequests(tokenValue = await AsyncStorage.getItem('token'))
    console.log('tokenValue on ApolloClient side (tokenValue===null)= \n', tokenValue)
  }
  await AsyncStorage.flushGetRequests(tokenValue)
  return await tokenValue
}
const authLink = setContext(async (_, { headers }) => {
  return {
    credentials: 'include',
    headers: {
      ...headers,
      Authorization: await getValue()
    }
  }
})

const createApolloClient = () => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
  return client
}

export default createApolloClient
