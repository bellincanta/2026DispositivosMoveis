import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Produto } from '../types';

interface Props {
  produtos: Produto[];
}

export function ListaProdutos({ produtos }: Props) {
  return (
    <View style={styles.tabela}>
      <View style={[styles.linha, styles.cabecalho]}>
        <Text style={[styles.celula, styles.celulaCabecalho]}>ID</Text>
        <Text style={[styles.celula, styles.celulaCabecalho, { flex: 2 }]}>Nome</Text>
        <Text style={[styles.celula, styles.celulaCabecalho]}>Categoria</Text>
        <Text style={[styles.celula, styles.celulaCabecalho]}>Preço</Text>
        <Text style={[styles.celula, styles.celulaCabecalho]}>Qtd.</Text>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <View style={styles.linha}>
            <Text style={styles.celula}>{item.id}</Text>
            <Text style={[styles.celula, { flex: 2 }]}>{item.nome}</Text>
            <Text style={styles.celula}>{item.categoria.nome}</Text>
            <Text style={styles.celula}>R$ {item.preco.toFixed(2)}</Text>
            <Text style={styles.celula}>{item.quantidade}</Text>
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
});
