/* Investigando, parece ser que el Root y sus Wrapers se coloca en el primer _layout.jsx dentro de la carpeta "app". Seguir probando */
/* Default Themes overwrite */

import { ApolloProvider } from '@apollo/client'
import createApolloClient from '../context/apolloClient.js'
import { DataProvider } from '../context/DataContext.js'
import * as Notifications from 'expo-notifications'

import { PaperProvider } from 'react-native-paper'
import { ThemeProvider } from '@react-navigation/native'
import React /*, { useState, useEffect } */ from 'react'
import { LightThemeColors, LightThemeNavColors /*, DarkThemeColors, DarkThemeNavColors */ } from '../globals/theme.js'

import { Slot } from 'expo-router'

const apolloClient = createApolloClient()

export default function RootLayout () {
  // const [theme, setTheme] = useState(LightThemeColors) // Light Theme Default
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    })
  })

  const theme = LightThemeColors

  return (
    <DataProvider>
      <ApolloProvider client={apolloClient}>
        <PaperProvider theme={theme}>
          <ThemeProvider value={LightThemeNavColors}>
            <Slot />
          </ThemeProvider>
        </PaperProvider>
      </ApolloProvider>
    </DataProvider>
  )
}
