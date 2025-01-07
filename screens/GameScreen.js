// import React, {useRef} from "react";
// import {View, StyleSheet, Text, Button} from "react-native";
// import Svg, {G, Circle, Text as SvgText} from "react-native-svg";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";

// const GameScreen = () => {
//   const rotation = useSharedValue(0); // Controla la rotación de la ruleta

//   const spinWheel = () => {
//     // Generar un giro aleatorio
//     const randomRotation = Math.floor(Math.random() * 360) + 720; // Mínimo 2 giros completos
//     rotation.value = withTiming(randomRotation, {duration: 3000}); // Animación suave de 3 segundos
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{rotate: `${rotation.value}deg`}],
//   }));

//   const numbers = Array.from({length: 10}, (_, i) => i + 1); // Números del 1 al 10

//   return (
//     <View style={styles.container}>
//       <View style={styles.wheelContainer}>
//         <Animated.View style={[styles.wheel, animatedStyle]}>
//           <Svg height="300" width="300" viewBox="0 0 100 100">
//             <G>
//               {numbers.map((num, index) => {
//                 const angle = (360 / numbers.length) * index;
//                 return (
//                   <G key={num} rotation={angle} origin="50,50">
//                     <Circle
//                       cx="50"
//                       cy="20"
//                       r="15"
//                       fill={index % 2 === 0 ? "#ffcc00" : "#ff5722"}
//                     />
//                     <SvgText
//                       x="50"
//                       y="24"
//                       textAnchor="middle"
//                       fill="#fff"
//                       fontSize="4"
//                       fontWeight="bold"
//                     >
//                       {num}
//                     </SvgText>
//                   </G>
//                 );
//               })}
//             </G>
//           </Svg>
//         </Animated.View>
//       </View>
//       <Button title="Girar Ruleta" onPress={spinWheel} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   wheelContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   wheel: {
//     width: 300,
//     height: 300,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default GameScreen;

import React, {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import * as FileSystem from "expo-file-system";
import pruebas from "../assets/pruebas.json"; // Ajusta la ruta según la ubicación del archivo
import {LinearGradient} from "expo-linear-gradient";

const GameScreen = () => {
  const [selectedPrueba, setSelectedPrueba] = useState(null);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const fileUri = FileSystem.documentDirectory + "jugadores.json";
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
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
    // Seleccionar un jugador al azar
    const randomPlayerIndex = Math.floor(Math.random() * players.length);
    setSelectedPlayer(players[randomPlayerIndex].name);

    // Seleccionar una prueba al azar
    const randomPruebaIndex = Math.floor(Math.random() * pruebas.length);
    setSelectedPrueba(pruebas[randomPruebaIndex].prueba);
  };

  return (
    <LinearGradient
      colors={["#a2ffe0", "#ff7269"]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
    >
      <View style={styles.container}>
        {selectedPlayer ? (
          <Text style={styles.title}>Turno de: {selectedPlayer}</Text>
        ) : (
          <Text style={styles.placeholder}>
            Presiona "Girar" para seleccionar un jugador
          </Text>
        )}

        {selectedPrueba ? (
          <Text style={styles.prueba}>{selectedPrueba}</Text>
        ) : (
          <Text style={styles.placeholder}>Esperando una prueba...</Text>
        )}

        <Button title="Girar" onPress={girarRuleta} />
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
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  prueba: {
    fontSize: 18,
    color: "#333",
    marginVertical: 20,
    textAlign: "center",
  },
  placeholder: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: "center",
  },
});

export default GameScreen;
