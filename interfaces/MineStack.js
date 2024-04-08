import React from 'react';
import { createStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import interfaz2 from './interfaz2';
import App from '../App';

const Stack = createStackNavigator();


const MineStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="App" component={App} />
        </Stack.Navigator>

        <Stack.Navigator>
            <Stack.Screen name="interfaz2" component={interfaz2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MineStack;