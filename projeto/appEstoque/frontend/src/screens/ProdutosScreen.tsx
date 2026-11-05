import { useEffect, useState, useLayoutEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Produto } from '../types';
import { produtoApi } from '../api/api';
import { ListaProdutos } from '../components/ListaProdutos';
import { FormularioProduto } from '../components/FormularioProduto';
import { BotaoSair } from '../components/BotaoSair';

export function ProdutosScreen() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerRight: () => <BotaoSair /> });
  }, [navigation]);

  async function carregar() {
    setProdutos(await produtoApi.listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <ListaProdutos produtos={produtos} />
        <FormularioProduto onProdutoCriado={carregar} />
      </View>
    </ScrollView>
  );
}
