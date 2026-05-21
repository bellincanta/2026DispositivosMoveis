import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type AppState = {
  nome: string;
  input: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome para entrar!');
      return;
    }

    this.setState({ nome: 'Bem vindo: ' + this.state.input });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo com entrada de dados</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
});

export default App;