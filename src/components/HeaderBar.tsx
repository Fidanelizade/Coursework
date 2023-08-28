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
  },
  {
    title: 'Category',
    key: 'category',
  },
  {
    title: 'Area',
    key: 'area',
  },
  {
    title: 'Ingredient',
    key: 'ingredient',
  },
];

export const HeaderBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('name');
  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View>
      <View style={styles.header}>
        <HeartIcon />
      </View>

      <View style={styles.backContainer}>
        <Text style={styles.greetingText}>Here's what{'\n'}you can make</Text>
        <View style={styles.inputContainer}>
          <VectorIcon width={18} height={18} />

          <TextInput
            style={styles.input}
            placeholder="Search..."
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
                backgroundColor:
                  selectedCategory === item.key ? '#FE724C' : 'transparent',
              }}
              onPress={() => setSelectedCategory(item.key)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 50,
  },
  backContainer: {
    marginHorizontal: 25,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  header: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  greetingText: {
    color: '#272D2F',
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 40,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: '#272D2F',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 18,
  },
});
