import { useState } from 'react'
import { Redirect } from 'expo-router'

// ? Parece que registrar el Root no es necesario si el _layout.jsx que lo establece es el primero dentro de ./app, investigar mas.
// import { registerRootComponent } from 'expo'

export default function HomeScreen () {
  // * index.js dentro de App maneja el estado de login del usuario

  // TODO: Expandir useState con el BE
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <Redirect href='/(drawer)/home' />
  } else {
    return <Redirect href='/(auth)/login' />
  }
}