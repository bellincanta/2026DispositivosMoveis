import { useEffect, useState, useLayoutEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Movimentacao } from '../types';
import { movimentacaoApi } from '../api/api';
import { ListaMovimentacoes } from '../components/ListaMovimentacoes';
import { FormularioMovimentacao } from '../components/FormularioMovimentacao';
import { BotaoSair } from '../components/BotaoSair';

export function MovimentacoesScreen() {
  const navigation = useNavigation();
  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerRight: () => <BotaoSair /> });
  }, [navigation]);

  async function carregar() {
    setMovimentacoes(await movimentacaoApi.listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <ListaMovimentacoes movimentacoes={movimentacoes} />
        <FormularioMovimentacao onMovimentacaoCriada={carregar} />
      </View>
    </ScrollView>
  );
}
