import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
      marginBottom: 20,
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      borderRadius: 10,
      backgroundColor: "#fff",
      marginBottom: 15,
      fontSize: 16,
    },
    playerField: {
      marginBottom: 15,
      padding: 10,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    playerLabel: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 5,
    },
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6a89cc",
      padding: 12,
      borderRadius: 10,
      marginTop: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    saveButton: {
      backgroundColor: "#38ada9",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      marginLeft: 5,
    },
  });

  export default styles;
