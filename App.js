import { StyleSheet, Text, View } from "react-native";
import Botao from "./src/Botao";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna}>
        <Botao number={"/"} />
        <Botao number={"7"} />
        <Botao number={"4"} />
        <Botao number={"1"} /> 
      </View> 

      <View style={styles.coluna}>
        <Botao number={"+"} />
        <Botao number={"8"} />
        <Botao number={"5"} />
        <Botao number={"2"} />
      </View>
      <View style={styles.coluna}>
        <Botao number={"*"} />
        <Botao number={"9"} />
        <Botao number={"6"} />
        <Botao number={"3"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0cc9c",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  coluna: {
    flexDirection: "column",
    margin: 15,
  },
});