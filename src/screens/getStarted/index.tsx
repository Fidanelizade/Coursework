import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Girl from '../../assets/images/Girl.svg';

export const GetStarted = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.woman}>
        <Girl />
      </View>
      <View>
        <Text style={styles.title}>Make your favorites recipes</Text>
        <Text style={styles.about}>
          Just tell us what ingredients do you have and we will show you what
          can you make.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FE724C',
  },
  buttonContainer:{
paddingHorizontal: 50,
  },
  woman: {
    alignItems: 'center',
  },
  title: {
    width: 350,
    height: 90,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  about: {
    width: 360,
    height: 109,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: 'center',
    backgroundColor: '#272D2F',
  },
  text: {
    height: 100,
    fontSize: 30,
    fontWeight: '700',
    color: '#FFF',
  },
});
