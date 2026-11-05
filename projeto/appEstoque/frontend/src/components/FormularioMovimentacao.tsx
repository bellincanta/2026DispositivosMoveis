import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Produto, TipoMovimentacao } from '../types';
import { produtoApi, movimentacaoApi } from '../api/api';

interface Props {
  onMovimentacaoCriada: () => void;
}

export function FormularioMovimentacao({ onMovimentacaoCriada }: Props) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoId, setProdutoId] = useState<number | null>(null);
  const [tipo, setTipo] = useState<TipoMovimentacao>('ENTRADA');
  const [quantidade, setQuantidade] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    produtoApi.listar().then((dados) => {
      setProdutos(dados);
      if (dados.length > 0) {
        setProdutoId(dados[0].id);
      }
    });
  }, []);

  async function handleSubmit() {
    if (!quantidade || produtoId === null) {
      setErro('Preencha todos os campos');
      return;
    }

    try {
      setErro('');
      await movimentacaoApi.criar({
        produtoId,
        tipo,
        quantidade: Number(quantidade),
      });
      setQuantidade('');
      onMovimentacaoCriada();
    } catch (err: any) {
      setErro(err.response?.data?.message ?? 'Erro ao criar movimentação');
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.titulo}>Nova Movimentação</Text>
      <View style={styles.input}>
        <Picker selectedValue={produtoId} onValueChange={setProdutoId}>
          {produtos.map((p) => (
            <Picker.Item key={p.id} label={p.nome} value={p.id} />
          ))}
        </Picker>
      </View>
      <View style={styles.input}>
        <Picker selectedValue={tipo} onValueChange={setTipo}>
          <Picker.Item label="Entrada" value="ENTRADA" />
          <Picker.Item label="Saída" value="SAIDA" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginTop: 16 },
  titulo: { fontWeight: '600', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginBottom: 8 },
  erro: { color: 'red', marginBottom: 8 },
  botao: { backgroundColor: '#2563eb', padding: 10, borderRadius: 6 },
  botaoTexto: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
