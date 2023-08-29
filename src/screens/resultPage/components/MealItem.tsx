import React from 'react';
import {Text, View} from 'react-native';

export const MealItem = ({strMeal}) => {
  return (
    <View>
      <Text>{strMeal}</Text>
    </View>
  );
};
