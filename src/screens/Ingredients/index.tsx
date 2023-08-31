import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

export const Ingredients = ({route}) => {
    const {item} = route.params
    console.log("route", route.params)
    return (
        <View>
           <Text>{item.strMeal}</Text>
           <ImageBackground 
           source={{uri:item.strMealThumb}}/>
           <Text>{item.strInstructions}</Text>
        </View>
    )
}