import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FloatingButton from '../components/FloatingButton';
import Form from '../components/Form';
import {swotItems} from '../constant/SwotContants';
import SowtList from '../components/SowtList';

interface SwotItem {
  toAnalyse: string;
  belongsTo: string;
}
const HomeScreen = () => {
  const [swotData, setSwotData] = useState<SwotItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(
    swotItems[0],
  );

  const handleButtonPress = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    if (textInputValue && selectedDropdownValue) {
      setSwotData(prevSwotData => [
        ...prevSwotData,
        {toAnalyse: textInputValue, belongsTo: selectedDropdownValue},
      ]);
    }

    setShowForm(false);
    setTextInputValue('');
    setSelectedDropdownValue('option1');
  };
  return (
    <View style={styles.container}>
      <SowtList swotData={swotData} />
      <FloatingButton handleButtonPress={handleButtonPress} />

      {showForm && (
        <Form
          handleFormSubmit={handleFormSubmit}
          selectedDropdownValue={selectedDropdownValue}
          setSelectedDropdownValue={setSelectedDropdownValue}
          setTextInputValue={setTextInputValue}
          textInputValue={textInputValue}
        />
      )}
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
