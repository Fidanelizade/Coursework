import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import HeartIcon from '../assets/icons/heart.svg';
import VectorIcon from '../assets/icons/Vector.svg';

const categories = [
  {
    title: 'Name',
    key: 'name',
    url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  },
  {
    title: 'Category',
    key: 'category',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  },
  {
    title: 'Area',
    key: 'area',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
  },
  {
    title: 'Ingredient',
    key: 'ingredient',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  },
];

export const HeaderBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSearch = async () => {
    const response = await fetch(`${selectedCategory.url}${searchText}`);
    const reponseJson = await response.json();
    onSearch(reponseJson.meals);
  
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeartIcon />
      </View>
      <View style={styles.backContainer}>
        <Text style={styles.greetingText}>Here's what{'\n'}you can make</Text>
        <View style={styles.inputContainer}>
          <VectorIcon style={{width: 18, height: 18, marginHorizontal: 15}} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
    
        <View style={styles.categories}>
          {categories.map(item => {
            return (
              <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                width: 90,
                height: 30,
                backgroundColor:
                selectedCategory.key === item.key
                ? '#FE724C'
                : 'transparent',
              }}
              onPress={() => setSelectedCategory(item)}>
                <Text
                  style={[
                    styles.buttonTitle,
                    {
                      color:
                      selectedCategory.key === item.key ? 'white' : '#272D2F',
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  backContainer: {},
  inputContainer: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#E6E6E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  greetingText: {
    color: '#272D2F',
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 40,
    marginBottom: 30,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    lineHeight: 24,
  },
  title: {
    color: '#272D2F',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 18,
  },
  buttonTitle: {
    fontSize: 17,
    alignSelf: 'center',
  },
});
