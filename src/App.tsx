import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Girl from './src/assets/images/Girl 1.svg';

export const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
              <View style={styles.woman}>
              <Girl/>
              </View>
            <View>
                <Text style={styles.title}>Make your favorites recipes</Text>
                <Text style={styles.about}>Just tell us what ingredients do you have and we will show you
                    what can you make.</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text}>GET STARTED</Text>
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
    woman: {
    alignItems:'center',
    },
    title: {
     width: 350,
     height: 90,
     color: '#FFF',
     textAlign: 'center',
     fontSize: 30,
     fontWeight:'700',
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
        width: 355,
        height: 60,
        borderRadius:30,
        alignItems: 'center',
        backgroundColor: '#272D2F',
    },
    text: {
        height:60,
        color: '#FFF',
        fontSize: 35,
        fontWeight: '700',
        alignContent: 'center',
    }
});

