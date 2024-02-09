import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Swot from '../components/Swot';
import {SwotType} from '../SwotType/SwotType';

const AnalysisScreen = () => {
  const route = useRoute();

  const {swotData} = route.params;

  return (
    <View style={styles.pieChartContainer}>
      <Swot swotData={swotData as SwotType[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  pieChartContainer: {
    alignItems: 'center',
    flex: 1,
  },
});
export default AnalysisScreen;
