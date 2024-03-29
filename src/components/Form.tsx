import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SWOTDropdown from './SWOTDropdown';
import {FormPropType} from '../SwotType/SwotType';
import Modal from 'react-native-modal';

const Form = ({
  textInputValue,
  setTextInputValue,
  setSelectedDropdownValue,
  handleFormSubmit,
  showForm,
  handleButtonPress,
  selectedDropdownValue,
}: FormPropType) => {
  const [textInputError, setTextInputError] = useState<string | null>(null);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  const validateForm = () => {
    if (!textInputValue.trim()) {
      setTextInputError('Please enter something to analyse');
      return false;
    } else if (!selectedDropdownValue.trim()) {
      setCategoryError('Please select a value for analysis');
      return false;
    }
    setTextInputError(null);
    setCategoryError(null);
    return true;
  };
  const submitForm = () => {
    if (validateForm()) {
      handleFormSubmit();
    }
  };
  return (
    <Modal
      isVisible={showForm}
      onBackdropPress={handleButtonPress}
      onBackButtonPress={handleButtonPress}
      backdropOpacity={0.7}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add something to analyse"
        placeholderTextColor={'black'}
        value={textInputValue}
        onChangeText={text => setTextInputValue(text)}
      />
      {textInputError && <Text style={styles.errorText}>{textInputError}</Text>}

      <SWOTDropdown selectDropDown={setSelectedDropdownValue} />
      {categoryError && <Text style={styles.errorText}>{categoryError}</Text>}
      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </Modal>
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
  errorText: {
    color: 'red',
    marginBottom: 10,
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
