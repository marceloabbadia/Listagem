import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "marcelo",
    "renato",
    "julia",
    "carla",
    "ana",
    "Isa",
    "Joao",
    "claudio",
  ];

  function handleParticipantAdd() {
    console.log("teste");
  }

  function handleParticipantRemove() {
    console.log("teste buton");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Nome do Evento</Text>
      <Text style={styles.texto2}>sexta, 01 de dezmebro, 2023;</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participants, id) => (
          <Participant
            key={id}
            name={participants}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView>
    </View>
  );
}
