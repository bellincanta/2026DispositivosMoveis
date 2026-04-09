// Importa o React e o hook useState para controlar estados no componente.
import React, { useState } from 'react';

// Importa componentes visuais do React Native.
import { View, Text, Pressable } from 'react-native';

// Importa o grupo de estilos definido em outro arquivo.
import { styles } from '../styles/statusStyles';

// Exporta o componente StatusPainel como padrão.
export default function StatusPainel() {
  // Cria o estado "ligado", iniciando com false, e a função para alterá-lo.
  const [ligado, setLigado] = useState<boolean>(false);

  // Cria o estado "cliques", iniciando com 0, e a função para alterá-lo.
  const [cliques, setCliques] = useState<number>(0);

  // Função responsável por alternar o status do sistema e incrementar os cliques.
  function alternarStatus(): void {
    // Inverte o valor atual de "ligado": se for true vira false, se for false vira true.
    setLigado((valorAnterior) => !valorAnterior);

    // Soma 1 ao valor anterior da quantidade de cliques.
    setCliques((valorAnterior) => valorAnterior + 1);
  }

  // Função responsável por resetar o painel para o estado inicial.
  function resetarPainel(): void {
    // Define o status como desligado.
    setLigado(false);

    // Zera a quantidade de cliques.
    setCliques(0);
  }

  // Retorna a estrutura visual do componente.
  return (
    // View principal centralizando o conteúdo na tela.
    <View style={styles.areaCentral}>
      {/* Texto principal do painel. */}
      <Text style={styles.titulo}>Painel de Status</Text>

      {/* Texto secundário explicando o exemplo. */}
      <Text style={styles.subtitulo}>
        Exemplo com State em TypeScript e grupos de estilo
      </Text>

      {/* 
        Exibe o status do sistema.
        Usa dois estilos ao mesmo tempo:
        - styles.statusTexto: estilo base
        - styles.ativo ou styles.inativo: depende do valor de "ligado"
      */}
      <Text style={[styles.statusTexto, ligado ? styles.ativo : styles.inativo]}>
        {/* Mostra um texto diferente dependendo do valor de "ligado". */}
        {ligado ? 'Sistema ligado' : 'Sistema desligado'}
      </Text>

      {/* Exibe a quantidade de cliques realizados no botão de alternar. */}
      <Text style={styles.contador}>Quantidade de cliques: {cliques}</Text>

      {/* Botão que chama a função alternarStatus ao ser pressionado. */}
      <Pressable style={styles.botaoPrimario} onPress={alternarStatus}>
        {/* Texto exibido dentro do botão principal. */}
        <Text style={styles.textoBotao}>Alternar status</Text>
      </Pressable>

      {/* Botão que chama a função resetarPainel ao ser pressionado. */}
      <Pressable style={styles.botaoSecundario} onPress={resetarPainel}>
        {/* Texto exibido dentro do botão secundário. */}
        <Text style={styles.textoBotao}>Resetar painel</Text>
      </Pressable>
    </View>
  );
}