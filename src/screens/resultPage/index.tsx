import React  from 'react';
import HeartIcon from '../../assets/icons/heart.svg';
import {View, StyleSheet, Text,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';


export const Result = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeartIcon />
      </View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Here's what{'\n'}you can make</Text>
      </View>
      <View style={styles.search}>
        <TextInput
        style={{ padding: 10, borderBottomWidth: 1 }}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      </View>
      <View style={styles.result} />
    </View>
  );
};

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
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
    color:'#E6E6E6',
    paddingTop: 242,
    paddingRight: 50,
    paddingLeft: 50,
  },
  

  result: {
    flex: 1,
  },
});
