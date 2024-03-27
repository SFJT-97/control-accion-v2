import { SafeAreaProvider } from 'react-native-safe-area-context'; // Nos asegura que el render se encuentre dentro de los limites de la pantalla

import { PaperProvider } from 'react-native-paper'; // Aplica los temas de Material Design a todos los componentes de RN-Paper
import { ThemeProvider } from '@react-navigation/native'; // Aplica los temas de Material Design a Expo-Router & React-Navigation
import * as Theme from '../globals/themes'; // Temas de Material Design custom

// TODO: A decidir si se usara useState o useColorScheme, para definir el esquema de colores de la app

/* import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
*/

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar'; // TODO: Importado para cambiar los colores de la StatusBar, no funciona todavia

export default function RootLayout() {
  
  const theme = Theme.LightThemeColors;
  const themenav = Theme.LightThemeNavColors;
  const themestatus = "dark" // aplica estilos del color especificado (para ser multiplataforma, solo acepta dark o light)
  

    return(
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <ThemeProvider value={themenav}>
            <StatusBar style={themestatus} />
            <Slot />
          </ThemeProvider>
        </PaperProvider>
      </SafeAreaProvider>
    )
}