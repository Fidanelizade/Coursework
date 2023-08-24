import React, {useState}  from 'react';
import HeartIcon from '../../assets/icons/heart.svg';
import {View, StyleSheet, Text, TouchableOpacity,TextInput} from 'react-native';

const categories=[
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Category',
    key: 'category'
  },
  {
    title: 'Area',
    key: 'area'
  },
  {
    title: 'Ingredient',
    key: 'ingredient'
  }
]

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
const  [selectedCategory,setSelectedCategory] = useState('name')
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
      <View>
        {categories.map(item=>{
          return (
       <TouchableOpacity style={{backgroundColor: selectedCategory === item.key ? "tomato" : "transparent"}}
       onPress={() => setSelectedCategory(item.key)}>
        <Text>
          {item.title}
        </Text>
        </TouchableOpacity>
          )
        })}
      </View>
    </View>
  );
};



export const ResultPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeartIcon />
      </View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Here's what{'\n'}you can make</Text>
      </View>
      <SearchBar/>
    </View>
  );
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  greeting: {
    marginTop: 40,
    paddingHorizontal: 25,
    lineHeight: 30,
  },
  greetingText: {
    color: '#272D2F',
    fontSize: 34,
    fontWeight: 'bold',
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
