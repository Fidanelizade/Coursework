import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { HeaderBar } from '../../components/HeaderBar';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export const ResultPage = () => {
const navigation = useNavigation();

const [data, setData] = useState([]);

const handleNavigate = async() => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
  );
  const result = await response.json();
  console.log(result);
  setData(result.meals);
};
  console.log(data);
  return (
    <View style={styles.container}>
      <HeaderBar onSearch={null}/>
    </View>
    <ScrollView>
      {data.map(item => {
        return (
          <View key={ items}>

          </View>
        )
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
});
