import { Redirect } from 'expo-router'

import { registerRootComponent } from 'expo'

/* PaperProvider & registerRootComponent son necesarios para el funcionamiento de React Native Paper */

/* Theme:
    ThemeProvider de Expo, en lugar de Navigation.Container para construir Tema para Nav (https://docs.expo.dev/router/appearance/#react-navigation-themes)
    Investigar porque al pasar el prop de theme, el resto de la app no lo recibe para llamar los colores del tema construido en Paper (https://www.youtube.com/watch?v=ltOccWcwnxw)
*/

export default function HomeScreen () {
  /* index.js dentro de App maneja el estado de login del usuario */

  const isLoggedIn = true /* Esto va a ser un useState(); */

  if (isLoggedIn) {
    return <Redirect href='/(drawer)/home' />
  } else {
    return <Redirect href='/(auth)/login' />
  }
}

registerRootComponent(HomeScreen)
