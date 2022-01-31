import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Button, SectionList, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>ActivityIndicator</Text>
      <ActivityIndicator size='large' color='red' />

      <Text style={{ textAlign: 'center' }}>Button</Text>
      <Button onPress={() => alert('Apertou o botão')} title='Clique aqui!' accessibilityLabel='Botão clicado' color='black' />
      <StatusBar style="auto" />

      <Text style={{ textAlign: 'center' }}>Flatlist</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
