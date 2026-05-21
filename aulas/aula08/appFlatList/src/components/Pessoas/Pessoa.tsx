import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component <PessoaProps> {
      render() {
        const { data } = this.props;
        return (
          <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
            <Text style={styles.textoPessoa}>{this.props.data.idade}</Text>
            <Text style={styles.textoPessoa}>{this.props.data.email}</Text>
        
          </View>
        );
      }
    }

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor:'grey',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    backgroundColor:'#FFF',
    fontSize: 20,
  }
});

export default Pessoa;