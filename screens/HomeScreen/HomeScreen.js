import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import icon from "../../assets/tomatelo-logo.png";
import styles from "./HomeScreen.styles"; // Importa los estilos desde el archivo separado

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#ff7269", "#a2ffe0"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
    >
      <View style={styles.container}>
        <Image source={icon} style={styles.logo} />
        <Text style={styles.title}>¡Bienvenido a Tómatelo!</Text>
        <Text style={styles.subtitle}>Presiona el boton "Jugar"</Text>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => navigation.navigate("PlayerSetup")}
        >0
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
