import React from 'react';
import { SafeAreaView, StyleSheet, View} from "react-native";
import Images from './assets/images/Eating image.svg';
import Text from './assets/fonts/Text1.1.svg';
import Note from './assets/fonts/Note.svg';
import Black from './assets/icons/Black button.svg';
import Get from './assets/icons/Get started button.svg';
export const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>    
            <View style={styles.header}>
            <View style={styles.Text}/>
              <Images/>
              <Text/>
              <Note/>
              <Black/>
              <Get/>
            </View>
       </SafeAreaView>
    );           
};

const styles = StyleSheet.create( {
    safeArea: {
        flex:1,
        backgroundColor:'tomato',
    },
    header: {
        flex:1,
        justifyContent: 'flex-start',
    },
    text: {
        flex:1,
      justifyContent: 'center',
    },
});
