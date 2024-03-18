/* import { Picker } from '@react-native-picker/picker';

import { useState } from 'react'; */

/* Pensar en reemplazar por react-native-dropdown-picker a pesar de que este lo recomiendo expo, 
funciones limitadas y falta de mantenimiento */

/* const PickerComponent = () => {
    const [ selectedItem, setSelectedItem ] = useState();

    return(
        <Picker
            selectedValue={selectedItem}
            onValueChange={( itemValue, itemIndex ) => setSelectedItem(itemValue) }
            mode='dropdown'
        >
            <Picker.Item label="Electrical" value="electrical" />
            <Picker.Item label="Infrastructural" value="infrastructural" />
            <Picker.Item label="Vehicular" value="Vehicular" />
            <Picker.Item label="Incorrect Use" value="incorrectuse" />
            <Picker.Item label="Incidental" value="incidental" />
            <Picker.Item label="Security" value="security" />

        </Picker>
    );
} */

/* export default PickerComponent; */

import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const PickerComponent = () => {

    const type = [
        'Electrical',
        'Infrastructural',
        'Vehicular',
        'Incorrect Use',
        'Incidental',
        'Security',
    ];

    return(
        <SelectDropdown
        data={type}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Select type'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    )

}

export default PickerComponent;

const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
    saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},

    dropdown1BtnStyle: {
      width: '80%',
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  });