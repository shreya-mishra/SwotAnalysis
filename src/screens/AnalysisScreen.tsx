import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {PieChart} from 'react-native-svg-charts';

const AnalysisScreen = () => {
  const route = useRoute();

  const {swotData} = route.params;
  const strengthsCount = swotData.filter(
    item => item.belongsTo === 'Strengths',
  ).length;
  const weaknessesCount = swotData.filter(
    item => item.belongsTo === 'Weaknesses',
  ).length;
  const opportunitiesCount = swotData.filter(
    item => item.belongsTo === 'Opportunities',
  ).length;
  const threatsCount = swotData.filter(
    item => item.belongsTo === 'Threats',
  ).length;

  const transformedData = [
    {
      key: 1,
      value: strengthsCount,
      svg: {fill: 'green'},
      arc: {outerRadius: '130%', cornerRadius: 10},
    },
    {
      key: 2,
      value: weaknessesCount,
      svg: {fill: 'red'},
      arc: {outerRadius: '110%', cornerRadius: 10},
    },
    {
      key: 3,
      value: opportunitiesCount,
      svg: {fill: 'yellow'},
      arc: {outerRadius: '90%', cornerRadius: 10},
    },
    {
      key: 4,
      value: threatsCount,
      svg: {fill: 'orange'},
      arc: {outerRadius: '70%', cornerRadius: 10},
    },
  ];
  return (
    <View style={styles.pieChartContainer}>
      <PieChart style={{height: 300}} data={transformedData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
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
