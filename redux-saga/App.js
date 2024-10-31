import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './Redux_Saga/Store';
import { GET, ADD, DELETE } from './Redux_Saga/Action';

const DataComponent = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [selectedItem, setSelectedItem] = useState({ id: '', YourJob: '' });
  const [newJob, setNewJob] = useState('');

  useEffect(() => {
    dispatch({ type: GET });
  }, [dispatch]);

  const handleAddItem = () => {
    if (newJob.trim()) {
      const newItem = { YourJob: newJob };
      dispatch({ type: ADD, payload: newItem });
      setNewJob('');
    }
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: DELETE, payload: id });
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={selectedItem.id}
        editable={false}
        placeholder="ID"
      />
      <TextInput
        style={styles.input}
        value={selectedItem.YourJob}
        onChangeText={(text) => setSelectedItem({ ...selectedItem, YourJob: text })}
        placeholder="Your Job"
      />
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.item}>
              <Text>ID: {item.id}</Text>
              <Text>Your Job: {item.YourJob}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TextInput
        style={styles.input}
        value={newJob}
        onChangeText={setNewJob}
        placeholder="New Job"
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="Delete Selected Item" onPress={() => handleDeleteItem(selectedItem.id)} />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <DataComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
