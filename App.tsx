import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    const soma = parseFloat(valor1) + parseFloat(valor2);
    setResultado(soma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Valor 1</Text>
      <TextInput value={valor1} onChangeText={setValor1} style={styles.input}/>
      <Text style={styles.texto}>Valor 2</Text>
      <TextInput value={valor2} onChangeText={setValor2} style={styles.input}/>
      <Button title="CALCULAR" onPress={somar}/>
      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:20,
  },
  input:{
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },
});
