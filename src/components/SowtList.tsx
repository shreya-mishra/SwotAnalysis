import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SowtList = ({
  swotData,
}: {
  swotData: {toAnalyse: string; belongsTo: string}[];
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={swotData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.swotItem}>
            <Text
              style={styles.swotText}>{`To Analyse: ${item.toAnalyse}`}</Text>
            <Text
              style={styles.swotText}>{`Belongs To: ${item.belongsTo}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SowtList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  swotItem: {
    // backgroundColor: '#808080',
    backgroundColor: '#efefef',
    elevation: 3,
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  swotText: {
    color: '#000',
  },
});
