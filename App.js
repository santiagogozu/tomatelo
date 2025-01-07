// import {StatusBar} from "expo-status-bar";
// import {StyleSheet, Text, View, Image} from "react-native";

// import icon from "./assets/icon.png";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image
//         blurRadius={5}
//         source={icon}
//         style={{
//           width: 300,
//           height: 100,
//           // resizeMode:'contain'
//           resizeMode: "stretch",
//         }}
//       />
//       <StatusBar style="auto" />
//       <Text>Aqui esta el app</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// App.js
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import PlayerSetupScreen from "./screens/PlayerSetupScreen";

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
