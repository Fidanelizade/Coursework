import React from 'react';
import  HeartIcon from '../../assets/icons/heart.svg';
import { View, StyleSheet } from 'react-native';

export const Result = () => {
    return (
        <View style={styles.container}/>
        <View style={styles.header}>
            <HeartIcon/>
        </View>
        <View style={styles.greetings}/>
        <View style={styles.search}/>
        <View style={styles.category}/>
        <View style={styles.result}/>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    greetings: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    search: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    category: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    result: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
  });