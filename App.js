import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import PlayerSetupScreen from "./screens/PlayerSetupScreen/PlayerSetupScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Inicio"}}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{title: "Juego"}}
        />
        <Stack.Screen name="PlayerSetup" component={PlayerSetupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
