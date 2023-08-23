import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from "react-native";
import Girl from './assets/icon/Girl.svg';

export const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>    
              <View>
              <Girl/>
              </View>
              <View>
                <Text style={styles.title}>Make your favorites recipes</Text>
                <Text style={styles.about}>Just tell us what ingredients do you have and we will show you
what can you make.</Text>
              </View>
       </SafeAreaView>
    );           
};

const styles = StyleSheet.create( {
    safeArea: {
        flex: 1,
        backgroundColor:'#FE724C',
    },
    title: {
     width: 353,
     height: 98,
     color: '#FFF',
     textAlign: 'center',
     fontSize: 45,
     fontweight: 700,
    },
    about: {
        width: 298,
        height: 57,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontweight: 400,
    },
});

