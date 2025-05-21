import React, {useState, useMemo} from 'react';
import {
  SafeAreaView,
  SectionList,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {createNamesData, filterAndGroupNames} from './src/utils';
import ListHeader from './src/components/ListHeader';
import ListItem from './src/components/ListItem';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const namesData = useMemo(() => {
    console.log('namesData rendered');
    return createNamesData(1000);
  }, []);

  const groupedData = useMemo(() => {
    console.log('groupedData rendered');
    return filterAndGroupNames(namesData, searchQuery, sortAsc);
  }, [searchQuery, sortAsc]);

  console.log(groupedData);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LIST</Text>
      <TextInput
        style={styles.input}
        placeholder="Search names..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity
        style={styles.sortBtn}
        onPress={() => setSortAsc(prev => !prev)}>
        <Text style={styles.sortText}>Sort: {sortAsc ? 'A → Z' : 'Z → A'}</Text>
      </TouchableOpacity>

      <SectionList
        sections={groupedData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <ListItem name={item} />}
        renderSectionHeader={({section: {title}}) => (
          <ListHeader title={title} />
        )}
        stickySectionHeadersEnabled
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={10}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  sortBtn: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  sortText: {
    color: 'blue',
    fontWeight: '500',
  },
  item: {
    padding: 12,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 14,
  },
});
