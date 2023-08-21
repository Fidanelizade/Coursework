import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Result} from './screens/resultPage'
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Result" componenet={Result}/>
    </StackNavigator>
  );
};
