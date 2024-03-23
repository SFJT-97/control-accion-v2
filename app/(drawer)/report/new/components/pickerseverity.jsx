import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const PickerComponent = () => {
  const type = [
    'DEFCON 1',
    'DEFCON 2',
    'DEFCON 3',
    'DEFCON 4',
    'DEFCON 5'
  ]

  return (
    <SelectDropdown
      data={type}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
      }}
      defaultButtonText='Select type'
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        return item
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color='#444' size={18} />
      }}
      dropdownIconPosition='right'
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
    />
  )
}

export default PickerComponent

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6'
  },
  headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },

  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444'
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' }

})
