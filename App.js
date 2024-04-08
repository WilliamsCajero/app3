import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Interfaz1 from "./interfaces/Interfaz1";
import Interfaz2 from "./interfaces/interfaz2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Interfaz1" component={Interfaz1}
          options={{
            headerShow: false,
            headerTintColor: '#000',
            headerStyle: { backgroundColor: '#fff'},
            headerTitle:'Interfaz1',
          }}></Stack.Screen>

        <Stack.Screen name="Interfaz2" component={Interfaz2}
          options={{
            headerShow: true,
            headerTintColor: '#000',
            headerStyle: { backgroundColor: '#fff'},
            headerTitle:'Interfaz2',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


