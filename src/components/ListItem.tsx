import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = React.memo(({name}: {name: string}) => {
  console.log('ListItem rendered');
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
});

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 14,
  },
});
