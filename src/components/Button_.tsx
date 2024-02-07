import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonType = {
  title: string;
  handler?: () => void;
  buttonColor: string;
  outLine: boolean;
  onPressIn?: () => void;
  onPressOut?: () => void;
};
const Button_ = ({title, handler, buttonColor}: ButtonType) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}]}
      onPress={handler}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button_;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
