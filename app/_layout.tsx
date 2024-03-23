import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from '@react-navigation/native';
import * as Theme from './globals/themes';

/* A decidir si se usara useState o useColorScheme, para definir el esquema de colores de la app */
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';

import { Slot } from 'expo-router';

/* Investigando, parece ser que el Root y sus Wrapers se coloca en el primer _layout.jsx dentro de la carpeta "app". Seguir probando */

export default function RootLayout() {

/*   Definir si usaremos el esquema de colores en base a la configuracion del usuario, o independiente a traves de un toggler con useState
/* 
/*   const colorScheme = useColorScheme();
/* 
/*   const theme = colorScheme === 'dark' ? Theme.DarkThemeColors : Theme.LightThemeColors;
/*   const themenav = colorScheme === 'dark' ? Theme.DarkThemeNavColors : Theme.LightThemeNavColors; */
  
  const theme = Theme.LightThemeColors;
  const themenav = Theme.LightThemeNavColors;

  

    return(
        <PaperProvider theme={theme && themenav}>
          <ThemeProvider value={theme && themenav}>
            <Slot />
          </ThemeProvider>
        </PaperProvider>
    )
}