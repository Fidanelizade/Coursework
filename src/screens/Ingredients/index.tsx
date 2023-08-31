import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Ingredients = ({route}) => {
    const {idMeal} = route.params

    const[meal,setMeal] = useState(null)
    
async function fetchIngredient(id) {
const response = await fetch (
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const result = await response.json();
    setMeal(result.meals[0]) 
    

}
useEffect(() => {
    fetchIngredient(idMeal)
}, [idMeal])
if (meal === null) {
    return null
}
console.log(meal)
    return (
        <ScrollView>
        <View style={styles.addContainer}>
           <Text style={styles.addTitle}>{meal.strMeal}</Text>
           <ImageBackground 
           source={{uri: meal.strMealThumb}}
           style={styles.photo}/>
           <Text style={styles.addBigTitle}>{meal.strInstructions}</Text>
           
        </View>
           </ScrollView>
    )
}

const styles = StyleSheet.create ({
   addContainer: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    padding: 20

   },
    addTitle: {
        fontSize: 48,
        fontWeight: '700',
        color: '#000000',
        alignSelf: 'center',
        marginBottom: 20
    },
    addBigTitle: {
        fontSize: 20,   
    },
    photo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
        
})