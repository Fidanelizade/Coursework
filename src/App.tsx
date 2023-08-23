import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ResultPage} from './screens/resultPage'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ResultPage" component={ResultPage}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};
