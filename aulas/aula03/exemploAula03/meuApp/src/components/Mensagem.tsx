import React, { Component } from 'react';
import { Text } from 'react-native';

class Mensagem extends Component {
  render() {
    return (
      <Text style={{ fontSize: 22, color: 'blue', margin: 10 }}>
        Este texto veio de um componente separado!
      </Text>
    );
  }
}

export default Mensagem;