import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Girl from './assets/image/Girl.svg'

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
              <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text}>Getstarted</Text>
                </TouchableOpacity>
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
     fontweight: '700',
    },
    about: {
        width: 298,
        height: 57,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontweight: '400',
    },
    button: {
        width: 314,
        height: 70,
        borderRadius: 30,
        backgroundColor: '#272D2F',
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 19,
        fontweight: '700',
        lineheight: 'normal',
    }
});
