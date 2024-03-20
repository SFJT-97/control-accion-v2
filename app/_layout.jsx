import { PaperProvider } from 'react-native-paper';

import { Slot } from 'expo-router';

/* Investigando, parece ser que el Root y sus Wrapers se coloca en el primer _layout.jsx dentro de la carpeta "app". Seguir probando */

export default function RootLayout() {

    return(
        <PaperProvider>
            <Slot />
        </PaperProvider>
    )

}