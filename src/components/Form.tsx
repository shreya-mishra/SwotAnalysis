import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import SWOTDropdown from './SWOTDropdown';

const Form = ({
  textInputValue,
  setTextInputValue,
  setSelectedDropdownValue,
  selectedDropdownValue,
  handleFormSubmit,
}) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add to analyse"
        placeholderTextColor={'black'}
        value={textInputValue}
        onChangeText={text => setTextInputValue(text)}
      />
      <SWOTDropdown selectDropDown={setSelectedDropdownValue} />
      <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10, // Android shadow
    zIndex: 11, // iOS zIndex
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    // justifyContent: 'flex-start',
  },
  dropdownDrop: {
    backgroundColor: '#fafafa',
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#3994f8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
