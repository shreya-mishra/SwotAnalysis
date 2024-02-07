import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type swotDataType = {toAnalyse: string; belongsTo: string}[];
const SwotGraph = ({swotData}: {swotData: swotDataType}) => {
  const strengths = swotData.filter(item =>
    item.belongsTo.toLowerCase().includes('strength'),
  );
  const weaknesses = swotData.filter(item =>
    item.belongsTo.toLowerCase().includes('weakness'),
  );
  const opportunities = swotData.filter(item =>
    item.belongsTo.toLowerCase().includes('opportunity'),
  );
  const threats = swotData.filter(item =>
    item.belongsTo.toLowerCase().includes('threats'),
  );
  const renderBulletPoints = (
    items: {toAnalyse: string; belongsTo: string}[],
  ) => {
    return items.map(
      (item: {toAnalyse: string; belongsTo: string}, index: number) => (
        <Text key={index} style={styles.matrixItem}>
          {'\u2022'} {item.toAnalyse}
        </Text>
      ),
    );
  };

  return (
    <View style={styles.matrixContainer}>
      <View style={styles.matrixRow}>
        <View style={[styles.matrixCell, {backgroundColor: '#BED9DE'}]}>
          <Text style={styles.categoryTitle}>Strengths</Text>
          {renderBulletPoints(strengths)}
        </View>
        <View style={[styles.matrixCell, {backgroundColor: '#FDD1AA'}]}>
          <Text style={styles.categoryTitle}>Weaknesses</Text>
          {renderBulletPoints(weaknesses)}
        </View>
      </View>
      <View style={styles.matrixRow}>
        <View style={[styles.matrixCell, {backgroundColor: '#D4E3C2'}]}>
          <Text style={styles.categoryTitle}>Opportunities</Text>
          {renderBulletPoints(opportunities)}
        </View>
        <View style={[styles.matrixCell, {backgroundColor: '#FBCAC0'}]}>
          <Text style={styles.categoryTitle}>Threats</Text>
          {renderBulletPoints(threats)}
        </View>
      </View>
    </View>
  );
};

export default SwotGraph;

const styles = StyleSheet.create({
  matrixContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  matrixRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  matrixCell: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    margin: 2,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  matrixItem: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#313638',
  },
});
