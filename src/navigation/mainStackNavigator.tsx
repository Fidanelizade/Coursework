import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ResultPage } from '../screens/resultPage';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ResultPage" component={ResultPage} />
        </Stack.Navigator>

    )
}