import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Tela De Login</Text>
      </View>
      <TextInput style={styles.inputs} placeholder="E-Mail"></TextInput>
      <TextInput
        style={styles.inputs}
        placeholder="Senha"
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Fazendo Login', 'Login feito com sucesso');
        }}
        style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#5bc8e7',
    width: 150,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
  },
  inputs: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  btnLogin: {
    width: 300,
    height: 50,
    backgroundColor: '#5bc8e7',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnLoginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
