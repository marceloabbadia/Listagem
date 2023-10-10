import React from "react";
import { View, Text, TouchableOpacity, Alert, Share } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export function ButtonZap({ shareList }) {
  function handleShareTask() {
    if (shareList.length === 0) {
      return Alert.alert(
        "Lista Vazia",
        "A lista de tarefas/compras está vazia. Adicione tarefas antes de compartilhar."
      );
    }
    const numberedShareList = shareList.map(
      (item: string, index: number) => `${index + 1}- ${item}`
    );
    const taskList = numberedShareList.join("\n");

    Share.share({
      message: `Minha Lista de Tarefas/compras:\n${taskList}`,
      title: "Compartilhar lista",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <View>
      <TouchableOpacity onPress={handleShareTask}>
        <Icon name="share" size={15} color="blue" style={{ paddingBottom: 20 }}>
          <Text style={{ color: "white" }}> Compartilhar</Text>
        </Icon>
      </TouchableOpacity>
    </View>
  );
}
