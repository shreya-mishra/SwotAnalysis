/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SwortTaskType} from './component/type';

type SwotGraphProps = {
  swotGraphType: SwortTaskType;
};
const SwotGraph = ({swotGraphType}: SwotGraphProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrant, {backgroundColor: '#BED9DE'}]}>
        <Text style={styles.heading}>Strengths</Text>
        {swotGraphType.strength.map((task, index) => (
          <View key={task.id}>
            <Text style={styles.matrixItem}>
              {index + 1}- {task.toAnalyse}
            </Text>
          </View>
        ))}
        {/* Strengths content */}
      </View>
      <View style={[styles.quadrant, {backgroundColor: '#FDD1AA'}]}>
        <Text style={styles.heading}>Weaknesses</Text>
        {swotGraphType.weakness.map((task, index) => (
          <View key={task.id}>
            <Text style={styles.matrixItem}>
              {index + 1}- {task.toAnalyse}
            </Text>
          </View>
        ))}
      </View>
      <View style={[styles.quadrant, {backgroundColor: '#D4E3C2'}]}>
        <Text style={styles.heading}>Opportunities</Text>
        {swotGraphType.opportunities.map((task, index) => (
          <View key={task.id}>
            <Text style={styles.matrixItem}>
              {index + 1}- {task.toAnalyse}
            </Text>
          </View>
        ))}
      </View>
      <View style={[styles.quadrant, {backgroundColor: '#FBCAC0'}]}>
        <Text style={styles.heading}>Threats</Text>
        {swotGraphType.threats.map((task, index) => (
          <View key={task.id}>
            <Text style={styles.matrixItem}>
              {index + 1}- {task.toAnalyse}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // padding: 20,
    backgroundColor: '#fff',
  },
  quadrant: {
    width: '50%', // Adjust as needed
    borderWidth: 1,
    minHeight: 200,
    borderColor: '#ccc',
    // borderRadius: 5,
    padding: 10,
    // marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  matrixItem: {
    // color: '#000',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#696969',
  },
});

export default SwotGraph;
