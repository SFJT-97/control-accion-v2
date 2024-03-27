import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import { Icon } from 'react-native-paper'

const CardSearch = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Report Search Card Pressed.')}>
        <View style={styles.button}>
          <Icon source='text-box-search' size={50} color='#FFFFFF' style={{ paddingBottom: 5 }} />
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>Search Report</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardSearch

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
