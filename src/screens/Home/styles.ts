import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#5271ff",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
    right: 10,
  },
  texto1: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  texto2: {
    color: "#fff",
    fontSize: 14,
  },
  input1: {
    flex: 1,
    backgroundColor: "#808080",
    height: 56,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1748d8",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});
