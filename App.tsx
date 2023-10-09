import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Nome do Evento</Text>
      <Text style={styles.texto2}>sexta, 01 de dezmebro, 2023;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },
  texto1: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  texto2: {
    color: "#6b6b6b",
    fontSize: 16,
  },
});
