import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Movimentacao } from '../types';

interface Props {
  movimentacoes: Movimentacao[];
}

export function ListaMovimentacoes({ movimentacoes }: Props) {
  return (
    <View style={styles.tabela}>
      <View style={[styles.linha, styles.cabecalho]}>
        <Text style={[styles.celula, styles.celulaCabecalho]}>ID</Text>
        <Text style={[styles.celula, styles.celulaCabecalho, { flex: 2 }]}>Produto</Text>
        <Text style={[styles.celula, styles.celulaCabecalho]}>Tipo</Text>
        <Text style={[styles.celula, styles.celulaCabecalho]}>Qtd.</Text>
        <Text style={[styles.celula, styles.celulaCabecalho, { flex: 2 }]}>Data</Text>
      </View>
      <FlatList
        data={movimentacoes}
        keyExtractor={(m) => String(m.id)}
        renderItem={({ item }) => (
          <View style={styles.linha}>
            <Text style={styles.celula}>{item.id}</Text>
            <Text style={[styles.celula, { flex: 2 }]}>{item.produto.nome}</Text>
            <Text style={[styles.celula, item.tipo === 'ENTRADA' ? styles.entrada : styles.saida]}>
              {item.tipo === 'ENTRADA' ? 'Entrada' : 'Saída'}
            </Text>
            <Text style={styles.celula}>{item.quantidade}</Text>
            <Text style={[styles.celula, { flex: 2 }]}>
              {new Date(item.criadoEm).toLocaleString('pt-BR')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabela: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  linha: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 8 },
  cabecalho: { backgroundColor: '#f5f5f5' },
  celula: { flex: 1 },
  celulaCabecalho: { fontWeight: '600' },
  entrada: { color: '#16a34a', fontWeight: '600' },
  saida: { color: '#dc2626', fontWeight: '600' },
});
