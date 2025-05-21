import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListHeader = React.memo(({title}: {title: string}) => {
  console.log('ListHeader rendered');
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
});

export default ListHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
