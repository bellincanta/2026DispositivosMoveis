import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Mensagem from './src/components/Mensagem';

interface ImagemProps {
  largura: number;
  altura: number;
  nome2: string;
}

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Mensagem />

        <Imagem largura={500} altura={200} nome2="Teste Props Logo React" />
      </View>
    );
  }
}

export default App;

class Imagem extends Component<ImagemProps> {
  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.nome2}</Text>
      </View>
    );
  }
}