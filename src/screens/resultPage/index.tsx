import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {HeaderBar} from '../../components/HeaderBar';
import {MealItem} from './components/MealItem';


export const ResultPage = () => {
  const [searchData, setSearchData] = useState([]);

  console.log(searchData);

  const onSearch = data => {
    setSearchData(data);
  };
 
  return (
    <View style={styles.container}>
      <HeaderBar onSearch={onSearch} />
      <FlatList
        data={searchData}
        keyExtractor={item => item.idMeal}
        renderItem={(item) => <MealItem {...item} />}
        numColumns = {2}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
});
