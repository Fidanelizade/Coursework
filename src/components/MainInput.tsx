import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
      onSearch(searchText);
    };
  
    return (
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    search: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 242,
      },
      input:{
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 20,
      },
    });