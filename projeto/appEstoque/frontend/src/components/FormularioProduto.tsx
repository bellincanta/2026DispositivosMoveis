import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Categoria } from '../types';
import { categoriaApi, produtoApi } from '../api/api';

interface Props {
  onProdutoCriado: () => void;
}

export function FormularioProduto({ onProdutoCriado }: Props) {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [categoriaId, setCategoriaId] = useState<number | null>(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    categoriaApi.listar().then((dados) => {
      setCategorias(dados);
      if (dados.length > 0) {
        setCategoriaId(dados[0].id);
      }
    });
  }, []);

  async function handleSubmit() {
    if (!nome || !preco || !quantidade || categoriaId === null) {
      setErro('Preencha todos os campos');
      return;
    }

    try {
      setErro('');
      await produtoApi.criar({
        nome,
        preco: Number(preco.replace(',', '.')),
        quantidade: Number(quantidade),
        categoriaId,
      });
      setNome('');
      setPreco('');
      setQuantidade('');
      onProdutoCriado();
    } catch (err: any) {
      setErro(err.response?.data?.message ?? 'Erro ao criar produto');
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.titulo}>Novo Produto</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <View style={styles.input}>
        <Picker selectedValue={categoriaId} onValueChange={setCategoriaId}>
          {categorias.map((c) => (
            <Picker.Item key={c.id} label={c.nome} value={c.id} />
          ))}
        </Picker>
      </View>
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
