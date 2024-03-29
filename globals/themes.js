// Importa los schema de colores default de Material Design 3
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper'

// Define colores del schema custom que pueden ser aplicados a Material Design 3
const lightColors = {
  colors: {
    primary: 'rgb(0, 106, 106)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(0, 251, 251)',
    onPrimaryContainer: 'rgb(0, 32, 32)',
    secondary: 'rgb(74, 99, 99)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(204, 232, 231)',
    onSecondaryContainer: 'rgb(5, 31, 31)',
    tertiary: 'rgb(75, 96, 124)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(211, 228, 255)',
    onTertiaryContainer: 'rgb(4, 28, 53)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(250, 253, 252)',
    onBackground: 'rgb(25, 28, 28)',
    surface: 'rgb(250, 253, 252)',
    onSurface: 'rgb(25, 28, 28)',
    surfaceVariant: 'rgb(218, 229, 228)',
    onSurfaceVariant: 'rgb(63, 73, 72)',
    outline: 'rgb(111, 121, 121)',
    outlineVariant: 'rgb(190, 201, 200)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(45, 49, 49)',
    inverseOnSurface: 'rgb(239, 241, 240)',
    inversePrimary: 'rgb(0, 221, 221)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(238, 246, 245)',
      level2: 'rgb(230, 241, 240)',
      level3: 'rgb(223, 237, 236)',
      level4: 'rgb(220, 235, 235)',
      level5: 'rgb(215, 232, 232)'
    },
    surfaceDisabled: 'rgba(25, 28, 28, 0.12)',
    onSurfaceDisabled: 'rgba(25, 28, 28, 0.38)',
    backdrop: 'rgba(41, 50, 50, 0.4)'
  }
}

const darkColors = {
  colors: {
    primary: 'rgb(0, 221, 221)',
    onPrimary: 'rgb(0, 55, 55)',
    primaryContainer: 'rgb(0, 79, 79)',
    onPrimaryContainer: 'rgb(0, 251, 251)',
    secondary: 'rgb(176, 204, 203)',
    onSecondary: 'rgb(27, 53, 52)',
    secondaryContainer: 'rgb(50, 75, 75)',
    onSecondaryContainer: 'rgb(204, 232, 231)',
    tertiary: 'rgb(179, 200, 232)',
    onTertiary: 'rgb(28, 49, 75)',
    tertiaryContainer: 'rgb(51, 72, 99)',
    onTertiaryContainer: 'rgb(211, 228, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(25, 28, 28)',
    onBackground: 'rgb(224, 227, 226)',
    surface: 'rgb(25, 28, 28)',
    onSurface: 'rgb(224, 227, 226)',
    surfaceVariant: 'rgb(63, 73, 72)',
    onSurfaceVariant: 'rgb(190, 201, 200)',
    outline: 'rgb(136, 147, 146)',
    outlineVariant: 'rgb(63, 73, 72)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(224, 227, 226)',
    inverseOnSurface: 'rgb(45, 49, 49)',
    inversePrimary: 'rgb(0, 106, 106)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(24, 38, 38)',
      level2: 'rgb(23, 43, 43)',
      level3: 'rgb(22, 49, 49)',
      level4: 'rgb(22, 51, 51)',
      level5: 'rgb(22, 55, 55)'
    },
    surfaceDisabled: 'rgba(224, 227, 226, 0.12)',
    onSurfaceDisabled: 'rgba(224, 227, 226, 0.38)',
    backdrop: 'rgba(41, 50, 50, 0.4)'
  }
}

// Aplica los colores previamente definidos en lightColors & darkColors a Material Design 3 de React Native Paper

export const LightThemeColors = {
  ...MD3LightTheme,
  ...lightColors
}

export const DarkThemeColors = {
  ...MD3DarkTheme,
  ...darkColors
}

// * adaptReactNavigation de React Native Paper no aplicaba los colores a React Navigation, por lo que se les definio directamente

export const LightThemeNavColors = {
  dark: false,
  colors: {
    primary: lightColors.colors.primary,
    background: lightColors.colors.background,
    card: lightColors.colors.surface,
    text: lightColors.colors.onSurface,
    border: lightColors.colors.outline,
    notification: lightColors.colors.error
  }
}

export const DarkThemeNavColors = {
  dark: true,
  colors: {
    primary: darkColors.colors.primary,
    background: darkColors.colors.background,
    card: darkColors.colors.surface,
    text: darkColors.colors.onSurface,
    border: darkColors.colors.outline,
    notification: darkColors.colors.error
  }
}
