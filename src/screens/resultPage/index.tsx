import React  from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { HeaderBar } from '../../components/HeaderBar';

export const ResultPage = () => {
  return (
    <View style={styles.container}>
      <HeaderBar onSearch={null}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
});
