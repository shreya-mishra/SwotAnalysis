import {View, StyleSheet} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import FloatingButton from '../components/FloatingButton';
import Form from '../components/Form';
import {swotDummyData} from '../constant/SwotContants';
import SowtList from '../components/SowtList';
import {useNavigation} from '@react-navigation/native';
import Button_ from '../components/Button_';
import {SwotDataType} from '../SwotType/SwotType';

const HomeScreen = () => {
  const [swotData, setSwotData] = useState<SwotDataType>(swotDummyData);
  const [showForm, setShowForm] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = () => {
    setShowForm(prev => !prev);
  };

  const handleFormSubmit = () => {
    if (textInputValue && selectedDropdownValue) {
      setSwotData((prevSwotData: SetStateAction<SwotDataType>) => [
        ...prevSwotData,
        {
          id: Math.random(),
          toAnalyse: textInputValue,
          belongsTo: selectedDropdownValue,
        },
      ]);
    }

    setShowForm(false);
    setTextInputValue('');
    setSelectedDropdownValue('');
  };
  return (
    <View style={styles.container}>
      <SowtList swotData={swotData} />
      <FloatingButton handleButtonPress={handleButtonPress} />

      {showForm && (
        <Form
          selectedDropdownValue={selectedDropdownValue}
          handleButtonPress={handleButtonPress}
          showForm={showForm}
          handleFormSubmit={handleFormSubmit}
          setSelectedDropdownValue={setSelectedDropdownValue}
          setTextInputValue={setTextInputValue}
          textInputValue={textInputValue}
        />
      )}
      {swotData.length > 0 ? (
        <Button_
          outLine={false}
          buttonColor="green"
          title={'Analyse'}
          handler={() =>
            navigation.navigate('SWOT Analysis', {swotData: swotData})
          }
        />
      ) : null}
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
