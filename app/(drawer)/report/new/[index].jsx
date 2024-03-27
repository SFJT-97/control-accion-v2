import { ScrollView } from 'react-native' // * usar SafeAreaView en su lugar si en la pagina va a haber scroll

import { useTheme } from 'react-native-paper'

import { Stack, useLocalSearchParams } from 'expo-router'

import HelpButton from '../../../../globals/HelpButton';

export default function NewReport () {

  const theme = useTheme();

  return (
    <ScrollView style={{ rowGap: 50 }}>
      <Stack.Screen
        options={{
          title: ('New Report #'),
          headerRight: () => <HelpButton />
        }}
      />
    </ScrollView>
  )
}
