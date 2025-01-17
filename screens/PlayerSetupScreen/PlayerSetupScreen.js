import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "./PlayerSetupScreen.styles"


const PlayerSetupScreen = ({ navigation }) => {
  const [numPlayers, setNumPlayers] = useState("");
  const [players, setPlayers] = useState([]);

  const handleGenerateFields = () => {
    const newPlayers = Array.from({ length: Number(numPlayers) }, (_, i) => ({
      id: i + 1,
      name: "",
    }));
    setPlayers(newPlayers);
  };

  const handleNameChange = (text, id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, name: text } : player
    );
    setPlayers(updatedPlayers);
  };

  const handleSavePlayers = async () => {
    if (players.some((player) => player.name.trim() === "")) {
      Alert.alert("Error", "Todos los jugadores deben tener un nombre.");
      return;
    }

    //FileSystem.documentDirectory: Proporciona la ruta del directorio de documentos de la aplicación en el dispositivo.
    // FileSystem.documentDirectory= file:///data/user/0/host.exp.exponent/files/
    const fileUri = FileSystem.documentDirectory + "jugadores.json";

    //JSON.stringify(players): Convierte la lista de jugadores (players) en una cadena de texto en formato JSON.
    //FileSystem.writeAsStringAsync(fileUri, data): Guarda el contenido de data (en este caso, la lista de jugadores) en la ubicación especificada por fileUri.
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(players));
    navigation.navigate("Game");
  };

  return (
    <LinearGradient
      colors={["#ff9a9e", "#fad0c4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Configuración de Jugadores</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Número de jugadores"
          value={numPlayers}
          onChangeText={setNumPlayers}
        />
        <TouchableOpacity style={styles.button} onPress={handleGenerateFields}>
          <Text style={styles.buttonText}>Generar Campos</Text>
        </TouchableOpacity>
        <FlatList
          data={players}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.playerField}>
              <Text style={styles.playerLabel}>Jugador {item.id}:</Text>
              <TextInput
                style={styles.input}
                placeholder={`Nombre del jugador ${item.id}`}
                value={item.name}
                onChangeText={(text) => handleNameChange(text, item.id)}
              />
            </View>
          )}
        />
        {players.length > 0 && (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSavePlayers}
          >
            <Ionicons name="save-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Guardar Jugadores</Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};



export default PlayerSetupScreen;
