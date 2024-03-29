import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const FloatingButton = ({
  handleButtonPress,
}: {
  handleButtonPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3994f8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Android shadow
    zIndex: 10, // iOS zIndex
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
