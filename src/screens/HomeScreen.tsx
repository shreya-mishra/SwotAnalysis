import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FloatingButton from '../components/FloatingButton';

const HomeScreen = () => {
  const handleButtonPress = () => {
    // Add your button press logic here
    console.log('Button Pressed');
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <FloatingButton handleButtonPress={handleButtonPress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#efefef',
  },
});
