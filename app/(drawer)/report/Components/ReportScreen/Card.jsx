import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import { Link } from 'expo-router'

import { Surface, Icon } from 'react-native-paper'
/* Reemplazar View con Surface o Ajustar */

/* Investigar si TouchableOpacity y TouchableHighlight pueden reemplazar a Pressable, y sus diferencias */

const Card = () => {
  return (
    <View style={styles.buttonContainer}>
      <Link
        href={{
          pathname: '/report/new/[index]',
          params: { test: '345', name: 'Santiago Juarez', status: 'Green', type: 'Electrical' }
        }}
        asChild
      >
        <TouchableOpacity style={styles.button} onPress={() => console.log('Report Card Pressed.')}>
          <View style={styles.button}>
            <Icon source='text-box' size={50} color='#FFFFFF' style={{ paddingBottom: 5 }} />
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>New Report</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  buttonContainer: {
    width: 175,
    height: 175,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  button: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#006A6A'
  }
})
