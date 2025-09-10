
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [Valor01, setValor1] = useState("");
  const [Valor02, setValor2] = useState("");
  const[resultado, setResultado] = useState(0);

  const somar = ()=>{
    const soma = parseFloat(Valor01) + parseFloat(Valor02);                                                                       
    setResultado(soma);
  }
  const dividir = ()=>{
    const dividir = parseFloat(Valor01) / parseFloat(Valor02);                                                                
    setResultado(dividir);
  }
  const subtrair = ()=>{
    const subtrair = parseFloat(Valor01) - parseFloat(Valor02);                                                                
    setResultado(subtrair);
  }
  const multiplicar = ()=>{
    const multiplicar = parseFloat(Valor01) *parseFloat(Valor02);                                                                
    setResultado(multiplicar);
  }

  return (
    <View style={styles.container}>
     <Text style={styles.texto}>Valor 1</Text>
     <TextInput  value={Valor01} onChangeText={setValor1} style={styles.input} />
     <Text style={styles.texto}>Valor 2</Text>
     <TextInput value={Valor02} onChangeText={setValor2} style={styles.input} />
     <Button title='➕' onPress={somar}/>
     <Button title='➗' onPress={dividir}/>
     <Button title='➖' onPress={subtrair}/>
     <Button title='✖️' onPress={multiplicar}/>
     <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a3464',
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
    fontSize: 20
  },
  Button:{
    justifyContent: 'center',
    flexDirection:'row',
    gap:'10',
    height: 30,
    width: 40,
  },
});


