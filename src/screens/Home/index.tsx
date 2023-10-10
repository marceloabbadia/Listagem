import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { ItemLista } from "../../components/ItemLista";
import ImageLogo from "../../assets/logo.png";
import { ButtonZap } from "../../components/ButtonZap";

export function Home() {
  const [itensLista, setItensLista] = useState<string[]>([]);
  const [itemNome, setItemNome] = useState("");
  const dataAtual = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

  function handleParticipantAdd() {
    if (itemNome === "") {
      return Alert.alert("Campo vazio", "Insira algo na caixa de texto");
    }
    if (itensLista.includes(itemNome)) {
      return Alert.alert(
        "Item Existente",
        "Já existe esse item na lista com esse nome"
      );
    }
    setItensLista((prevState) => [...prevState, itemNome]);
    setItemNome("");
  }

  function handleItemRemove(name: string) {
    Alert.alert("Remover", `Remover o item ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setItensLista((prevState) =>
            prevState.filter((list) => list !== name)
          ),
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Faz a Lista, hein!</Text>
      <Image source={ImageLogo} style={styles.logo} />

      <Text style={styles.texto2}>{dataFormatada}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input1}
          placeholder="Digite seu item na lista"
          placeholderTextColor={"#ababab"}
          onChangeText={setItemNome}
          value={itemNome}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ButtonZap shareList={itensLista} />
      <FlatList
        data={itensLista}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ItemLista
            key={item}
            name={item}
            onRemove={() => handleItemRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não incluiu nada na lista ainda? Adicione algo na sua lista e evite
            esquecer algo, sua esposa está de olho em você! :)
          </Text>
        )}
      />
    </View>
  );
}
