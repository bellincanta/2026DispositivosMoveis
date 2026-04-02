import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles/statusStyles';

export default function StatusPainel() {
  const [ligado, setLigado] = useState<boolean>(false);
  const [cliques, setCliques] = useState<number>(0);

  function alternarStatus(): void {
    setLigado((valorAnterior) => !valorAnterior);
    setCliques((valorAnterior) => valorAnterior + 1);
  }

  function resetarPainel(): void {
    setLigado(false);
    setCliques(0);
  }

  return (
    <View style={styles.areaCentral}>
      <Text style={styles.titulo}>Painel de Status</Text>

      <Text style={styles.subtitulo}>
        Exemplo com State em TypeScript e grupos de estilo
      </Text>

      <Text style={[styles.statusTexto, ligado ? styles.ativo : styles.inativo]}>
        {ligado ? 'Sistema ligado' : 'Sistema desligado'}
      </Text>

      <Text style={styles.contador}>Quantidade de cliques: {cliques}</Text>

      <Pressable style={styles.botaoPrimario} onPress={alternarStatus}>
        <Text style={styles.textoBotao}>Alternar status</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario} onPress={resetarPainel}>
        <Text style={styles.textoBotao}>Resetar painel</Text>
      </Pressable>
    </View>
  );
}