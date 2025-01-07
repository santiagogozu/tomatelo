import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import icon from "../assets/tomatelo-logo.png";

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#ff7269", "#a2ffe0"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
    >
      <View style={styles.container}>
        <Image
          source={icon}
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.title}>Bienvenido al Juego</Text>
        <Button
          title="Jugar"
          onPress={() => navigation.navigate("PlayerSetup")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff", // Asegúrate de que el texto sea visible
  },
});

export default HomeScreen;
