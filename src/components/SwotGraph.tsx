import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {AnimatedValues, SwotDataType} from '../SwotType/SwotType';

const SwotGraph = ({swotData}: {swotData: SwotDataType}) => {
  const animatedValues: AnimatedValues = useRef({
    strengths: new Animated.Value(0),
    weaknesses: new Animated.Value(0),
    opportunities: new Animated.Value(0),
    threats: new Animated.Value(0),
  }).current;

  const fadeInAnimation = (category: string) => {
    Animated.timing(animatedValues[category], {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeInAnimation('strengths');
    fadeInAnimation('weaknesses');
    fadeInAnimation('opportunities');
    fadeInAnimation('threats');
  }, []);

  const renderBulletPoints = (
    items: {toAnalyse: string; belongsTo: string}[],
    category: string,
  ) => {
    const sortedItems = items.sort((a, b) =>
      a.toAnalyse.localeCompare(b.toAnalyse),
    );

    return sortedItems.map(
      (item: {toAnalyse: string; belongsTo: string}, index: number) => (
        <Animated.Text
          key={index}
          style={[
            styles.matrixItem,
            {
              opacity: animatedValues[category].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: animatedValues[category].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, 0],
                  }),
                },
              ],
            },
          ]}>
          {'\u2022'} {item.toAnalyse}
        </Animated.Text>
      ),
    );
  };

  return (
    <View style={styles.matrixContainer}>
      <View style={styles.matrixRow}>
        <View style={[styles.matrixCell, {backgroundColor: '#BED9DE'}]}>
          <Text style={styles.categoryTitle}>Strengths</Text>
          {renderBulletPoints(
            swotData.filter(item =>
              item.belongsTo.toLowerCase().includes('strength'),
            ),
            'strengths',
          )}
        </View>
        <View style={[styles.matrixCell, {backgroundColor: '#FDD1AA'}]}>
          <Text style={styles.categoryTitle}>Weaknesses</Text>
          {renderBulletPoints(
            swotData.filter(item =>
              item.belongsTo.toLowerCase().includes('weakness'),
            ),
            'weaknesses',
          )}
        </View>
      </View>
      <View style={styles.matrixRow}>
        <View style={[styles.matrixCell, {backgroundColor: '#D4E3C2'}]}>
          <Text style={styles.categoryTitle}>Opportunities</Text>
          {renderBulletPoints(
            swotData.filter(item =>
              item.belongsTo.toLowerCase().includes('opportunities'),
            ),
            'opportunities',
          )}
        </View>
        <View style={[styles.matrixCell, {backgroundColor: '#FBCAC0'}]}>
          <Text style={styles.categoryTitle}>Threats</Text>
          {renderBulletPoints(
            swotData.filter(item =>
              item.belongsTo.toLowerCase().includes('threats'),
            ),
            'threats',
          )}
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
    color: '#696969',
  },
});
