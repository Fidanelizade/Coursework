import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ResultPage} from '../screens/resultPage';
import { GetStarted } from '../screens/getStarted';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="ResultPage" component={ResultPage} />
    </Stack.Navigator>
  );
};
