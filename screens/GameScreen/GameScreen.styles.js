import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 10,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 18,
      color: "#fff",
      marginBottom: 30,
      textAlign: "center",
    },
    card: {
      width: "90%",
      padding: 20,
      borderRadius: 15,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 6,
      alignItems: "center",
      marginVertical: 20,
    },
    cardText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    button: {
      marginTop: 30,
      paddingVertical: 15,
      paddingHorizontal: 40,
      backgroundColor: "#ff7f50",
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 6,
    },
    buttonText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
    },
  });

  export default styles;
