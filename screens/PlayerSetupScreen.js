import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import * as FileSystem from "expo-file-system";
import {LinearGradient} from "expo-linear-gradient";

const PlayerSetupScreen = ({navigation}) => {
  const [numPlayers, setNumPlayers] = useState("");
  const [players, setPlayers] = useState([]);

  const handleGenerateFields = () => {
    const newPlayers = Array.from({length: Number(numPlayers)}, (_, i) => ({
      id: i + 1,
      name: "",
    }));
    setPlayers(newPlayers);
  };

  const handleNameChange = (text, id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? {...player, name: text} : player
    );
    setPlayers(updatedPlayers);
  };

  const handleSavePlayers = async () => {
    const fileUri = FileSystem.documentDirectory + "jugadores.json";
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(players));
    alert("Jugadores guardados en jugadores.json");
    navigation.navigate("Game");
  };

  return (
    <LinearGradient
      colors={["#ff7269", "#a2ffe0"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
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
        <Button title="Generar Campos" onPress={handleGenerateFields} />
        <FlatList
          data={players}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.playerField}>
              <Text>Jugador {item.id}:</Text>
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
          <Button title="Guardar Jugadores" onPress={handleSavePlayers} />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  playerField: {
    marginBottom: 15,
  },
});

export default PlayerSetupScreen;
