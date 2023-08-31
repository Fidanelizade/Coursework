import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ResultPage} from '../screens/resultPage';
import { Ingredients } from '../screens/Ingredients';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ResultPage">
      <Stack.Screen name="ResultPage" component={ResultPage} />
      <Stack.Screen name="Ingredients" component={Ingredients} />
    </Stack.Navigator>
  );
};
