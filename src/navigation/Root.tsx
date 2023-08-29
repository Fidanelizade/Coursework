import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackNavigator } from './mainStackNavigator';

export const Root = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator/>
        </NavigationContainer>
    )
}