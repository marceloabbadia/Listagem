import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function ItemLista({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.form1}>
        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
