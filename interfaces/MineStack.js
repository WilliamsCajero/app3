import React from 'react';
import { createStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Interfaz2 from './interfaz2';
import Interfaz1 from './Interfaz1';
import App from '../App';  

const Stack = createStackNavigator();


export const MineStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Interfaz1" component={Interfaz1} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MineStack;



