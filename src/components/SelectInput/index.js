import React from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import InputLabel from '../InputLabel/style';

export default function SelectInput({ data = [], defaultText = '', handleSelectedFn = null, labelText = '' }) {
  return (
    <View>
      <InputLabel>{ labelText }</InputLabel>
      <SelectDropdown 
          data={data}
          defaultButtonText={defaultText}
          onSelect={(selectedItem, index) => {
              handleSelectedFn(index);
          }}  
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          renderDropdownIcon={() => <AntDesign name="caretdown" size={24} color="#34898F" />}
          dropdownIconPosition='right'
          rowTextStyle={styles.rowText}
          dropdownOverlayColor='transparent'
          dropdownStyle={styles.dropdown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderColor: '#60BFC5',
    borderWidth: 2,
    width: '100%',
    height: 54,
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonText: {
    color: '#34898F',
    fontSize: 16,
    fontFamily: 'MontserratAlternates_600SemiBold',
    textAlign: 'left'
  },
  dropdown: {
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 2,
    borderColor: '#60BFC5',
    marginTop: -30,
    borderTopWidth: 2,
    borderBottomWidth: 0
  },
  rowText: {
    fontFamily: 'MontserratAlternates_600SemiBold',
    fontSize: 16,
    color: '#34898F'
  }
});