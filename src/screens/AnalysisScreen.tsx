import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import SwotGraph from '../components/SwotGraph';

const AnalysisScreen = () => {
  const route = useRoute();

  const {swotData} = route.params;

  return (
    <View style={styles.pieChartContainer}>
      {/* <PieChart style={{height: 300}} data={transformedData} /> */}
      <SwotGraph swotData={swotData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // backgroundColor: '#F5F5F5',
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
  },
});
export default AnalysisScreen;
