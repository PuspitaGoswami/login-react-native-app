import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, FlatList } from "react-native";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Make an API call to get the search results
    // Replace the placeholder data with your own API call
    const results = [
      { id: 1, name: "Search Result 1" },
      { id: 2, name: "Search Result 2" },
      { id: 3, name: "Search Result 3" },
      { id: 4, name: "Search Result 4" },
      { id: 5, name: "Search Result 5" },
    ];

    setSearchResults(results);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: "#ffcccc" }]}>
      <Text style={styles.welcome}>Welcome to Homapage!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom:50,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  list: {
    flex: 1,
  },
});

export default HomePage;
