import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import * as FileSystem from "expo-file-system";
import pruebas from "../../assets/pruebas.json";
import {LinearGradient} from "expo-linear-gradient";
import styles from "./GameScreen.styles";

const GameScreen = () => {
  const [selectedPrueba, setSelectedPrueba] = useState(null);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [slideAnim] = useState(new Animated.Value(300)); // Animación para la tarjeta
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  
  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const fileUri = FileSystem.documentDirectory + "jugadores.json";
        console.log("entra a loadPlaers");
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        console.log(fileContent);
        setPlayers(JSON.parse(fileContent));
      } catch (error) {
        console.error("Error al cargar los jugadores:", error);
      }
    };

    loadPlayers();
  }, []);

  const girarRuleta = () => {
    if (pruebas.length === 0 || players.length === 0) {
      alert("Faltan pruebas o jugadores");
      return;
    }

    // Seleccionar el jugador
    const nextPlayer = players[currentPlayerIndex].name;
    setSelectedPlayer(nextPlayer);

    // Actualizar el índice para el siguiente jugador
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);

    // Seleccionar una prueba al azar
    const randomPruebaIndex = Math.floor(Math.random() * pruebas.length);
    setSelectedPrueba(pruebas[randomPruebaIndex].prueba);

    // Iniciar la animación deslizante de la tarjeta
    slideAnim.setValue(300);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={["#4facfe", "#00f2fe"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
    >
      <View style={styles.container}>
        <Text style={styles.header}>🎲 Juego de Pruebas 🎉</Text>
        {selectedPlayer ? (
          <Text style={styles.subtitle}>Turno de: {selectedPlayer}</Text>
        ) : (
          <Text style={styles.subtitle}>
            Presiona "Girar" para seleccionar un jugador
          </Text>
        )}

        {selectedPrueba && (
          <Animated.View
            style={[
              styles.card,
              {
                transform: [{translateY: slideAnim}],
              },
            ]}
          >
            <Text style={styles.cardText}>{selectedPrueba}</Text>
          </Animated.View>
        )}

        <TouchableOpacity style={styles.button} onPress={girarRuleta}>
          <Text style={styles.buttonText}>🎡 Girar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default GameScreen;
