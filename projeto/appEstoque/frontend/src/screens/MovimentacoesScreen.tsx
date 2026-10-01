import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BotaoSair } from '../components/BotaoSair';

// TODO (atividade dos alunos): implementar a tela de Movimentações.
// A API já está pronta em `movimentacaoApi` (src/api/api.ts):
//   - movimentacaoApi.listar(): Promise<Movimentacao[]>
//   - movimentacaoApi.criar({ produtoId, tipo, quantidade }): Promise<Movimentacao>
// Usem CategoriasScreen.tsx como referência de estrutura (listagem + formulário).

export function MovimentacoesScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerRight: () => <BotaoSair /> });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Movimentações</Text>
      <Text style={styles.aviso}>Tela ainda não implementada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  aviso: { color: '#666' },
});
