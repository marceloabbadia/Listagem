import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Nome do Evento</Text>
      <Text style={styles.texto2}>sexta, 01 de dezmebro, 2023;</Text>
    </View>
  );
}
