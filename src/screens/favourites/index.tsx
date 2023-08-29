import React from 'react'
import { Text,
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native';


export const  Favourites= () => {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View> 
            <Text>Favourites</Text>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    safeArea: {
        flex: 1,
        backgroundColor: 'FFFFFF'
    },
});
