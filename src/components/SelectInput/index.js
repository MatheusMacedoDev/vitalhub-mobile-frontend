import React from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import InputLabel from '../InputLabel/style';

export default function SelectInput({ defaultText = '', handleSelectedFn = null, labelText = '' }) {
  return (
    <View>
      <InputLabel>{ labelText }</InputLabel>
      <SelectDropdown 
          data={['A', 'B', 'C', 'D']}
          defaultButtonText={defaultText}
          onSelect={(selectedItem, index) => {
              handleSelectedFn(index);
          }}  
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          renderDropdownIcon={() => <AntDesign name="caretdown" size={24} color="#34898F" />}
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
  }
});