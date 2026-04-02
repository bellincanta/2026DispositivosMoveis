# Aula — States em TypeScript e grupos de estilo

## 1. Introdução

Em aplicações React Native, a interface nem sempre é fixa. Muitas vezes, o conteúdo exibido na tela muda de acordo com a ação do usuário. Um botão pode alterar uma mensagem, um contador pode aumentar, uma cor pode mudar, e uma informação pode aparecer ou desaparecer.

Para controlar esse tipo de comportamento, usamos **state**.

Além disso, conforme a interface cresce, organizar o visual do código se torna essencial. Em vez de espalhar estilos diretamente em cada componente, é mais interessante agrupá-los de forma lógica. Essa organização é feita com **grupos de estilo**.

---

## 2. O que é state?

**State** é uma informação armazenada dentro do componente que pode mudar ao longo da execução da aplicação.

Em termos simples, o state funciona como uma memória interna do componente.

### Exemplos de informações que podem ser armazenadas em state

- quantidade de cliques em um botão;
- mensagem exibida na tela;
- status de ligado ou desligado;
- item selecionado;
- valor digitado em um campo.

### Ideia central

Quando o **state muda**, a interface pode ser atualizada automaticamente.

Esse é um dos pontos mais importantes do React Native: a tela responde às mudanças de dados.

---

## 3. State e TypeScript

No React Native com TypeScript, o state pode ser tipado para deixar claro qual tipo de informação será armazenado.

Isso ajuda a:

- evitar erros;
- deixar o código mais claro;
- melhorar a leitura e a manutenção;
- garantir que os dados usados no componente façam sentido.

### Exemplos de tipos comuns

#### State numérico
Usado para:

- contador;
- idade;
- quantidade;
- pontuação.

#### State textual
Usado para:

- nome;
- mensagem;
- título;
- descrição.

#### State booleano
Usado para:

- ligado/desligado;
- ativo/inativo;
- visível/oculto;
- verdadeiro/falso.

#### State com array
Usado para:

- lista de tarefas;
- lista de nomes;
- lista de produtos.

#### State com objeto
Usado para:

- dados de usuário;
- formulários;
- configurações.

---

## 4. useState

Em componentes funcionais, usamos `useState` para criar estados.

### Exemplo

```tsx
const [ligado, setLigado] = useState<boolean>(false);
```

### Explicação

- `ligado` é o valor atual do estado;
- `setLigado` é a função usada para alterar esse valor;
- `boolean` informa que esse state guarda apenas `true` ou `false`;
- `false` é o valor inicial.

### Outro exemplo

```tsx
const [cliques, setCliques] = useState<number>(0);
```

Nesse caso:

- `cliques` guarda um número;
- `setCliques` altera esse número;
- `0` é o valor inicial.

---

## 5. Como atualizar o state

O state **não deve ser alterado diretamente**.

### Forma incorreta

```tsx
cliques = 10;
```

### Forma correta

```tsx
setCliques(10);
```

Quando o novo valor depende do valor anterior, é recomendado usar a forma funcional.

### Exemplo

```tsx
setCliques((valorAnterior) => valorAnterior + 1);
```

Essa forma é muito útil em contadores e alternâncias de status.

---

## 6. State controlando a interface

O state não serve apenas para armazenar valores. Ele também pode controlar **o que aparece** e **como aparece** na tela.

### Exemplo

```tsx
<Text>{ligado ? 'Sistema ligado' : 'Sistema desligado'}</Text>
```

Nesse exemplo:

- se `ligado` for `true`, o texto mostrado será `Sistema ligado`;
- se `ligado` for `false`, o texto mostrado será `Sistema desligado`.

Isso mostra a ligação direta entre **dados** e **interface**.

---

## 7. O que são grupos de estilo?

Grupos de estilo são conjuntos de estilos organizados por função, componente ou responsabilidade visual.

No React Native, isso geralmente é feito com `StyleSheet.create()`.

### Exemplo

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 18,
  },
});
```

### Vantagens dos grupos de estilo

- deixam o código mais organizado;
- evitam repetição de estilos;
- facilitam manutenção;
- tornam a leitura mais clara;
- ajudam a reaproveitar partes visuais do projeto.

A ideia de separar responsabilidades entre arquivos e componentes acompanha a mesma lógica de organização já usada na criação de componentes em React Native. 

---

## 8. Aplicando mais de um estilo

No React Native, um componente pode usar mais de um grupo de estilo ao mesmo tempo.

### Exemplo

```tsx
<Text style={[styles.texto, styles.destaque]}>
  Exemplo de texto
</Text>
```

Nesse caso:

- `styles.texto` define o estilo base;
- `styles.destaque` adiciona características especiais.

---

## 9. Relação entre state e grupos de estilo

Um dos usos mais interessantes é aplicar estilos diferentes de acordo com o valor do state.

### Exemplo

```tsx
<Text style={[styles.statusTexto, ligado ? styles.ativo : styles.inativo]}>
  {ligado ? 'Sistema ligado' : 'Sistema desligado'}
</Text>
```

### O que acontece aqui?

- `styles.statusTexto` é o estilo base do texto;
- se `ligado` for `true`, também será aplicado `styles.ativo`;
- se `ligado` for `false`, será aplicado `styles.inativo`.

Assim, o **state controla a lógica** e os **grupos de estilo controlam a aparência**.

---

## 11. Exemplo 

**Arquivo:** `App.tsx`

```tsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import StatusPainel from './components/StatusPainel';
import { styles } from './styles/statusStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <StatusPainel />
    </SafeAreaView>
  );
}
```

### Explicação

- importa o React;
- importa `SafeAreaView` e `StatusBar` do React Native;
- importa o componente `StatusPainel`;
- importa os estilos do arquivo `statusStyles.ts`;
- renderiza o componente principal da tela dentro da área segura do dispositivo.

---

**Arquivo:** `components/StatusPainel.tsx`

```tsx
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
```

### Explicação geral

Esse componente concentra a parte principal do exemplo.

#### Estados criados

```tsx
const [ligado, setLigado] = useState<boolean>(false);
const [cliques, setCliques] = useState<number>(0);
```

- `ligado` controla se o sistema está ligado ou desligado;
- `cliques` controla quantas vezes o botão principal foi pressionado.

#### Função `alternarStatus`

```tsx
function alternarStatus(): void {
  setLigado((valorAnterior) => !valorAnterior);
  setCliques((valorAnterior) => valorAnterior + 1);
}
```

Essa função:

- inverte o valor atual de `ligado`;
- soma 1 ao contador de cliques.

#### Função `resetarPainel`

```tsx
function resetarPainel(): void {
  setLigado(false);
  setCliques(0);
}
```

Essa função:

- volta o estado para desligado;
- zera o contador.

#### Texto condicional

```tsx
{ligado ? 'Sistema ligado' : 'Sistema desligado'}
```

Esse trecho faz a mensagem mudar conforme o valor do state.

#### Estilo condicional

```tsx
style={[styles.statusTexto, ligado ? styles.ativo : styles.inativo]}
```

Esse trecho aplica:

- um estilo base (`statusTexto`);
- um estilo de cor verde (`ativo`) quando ligado;
- um estilo de cor vermelha (`inativo`) quando desligado.

---

**Arquivo:** `styles/statusStyles.ts`

```ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  areaCentral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  statusTexto: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },

  ativo: {
    color: 'green',
  },

  inativo: {
    color: 'red',
  },

  contador: {
    fontSize: 18,
    marginBottom: 24,
  },

  botaoPrimario: {
    backgroundColor: '#1e88e5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
    width: 220,
    alignItems: 'center',
  },

  botaoSecundario: {
    backgroundColor: '#6d4c41',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 220,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

### Explicação geral

Esse arquivo centraliza os estilos usados no projeto.

#### Principais grupos de estilo

- `container`: estilo da área principal do app;
- `areaCentral`: organiza o conteúdo no centro da tela;
- `titulo`: define a aparência do título;
- `subtitulo`: define a aparência do subtítulo;
- `statusTexto`: estilo base da mensagem de status;
- `ativo`: estilo aplicado quando o sistema está ligado;
- `inativo`: estilo aplicado quando o sistema está desligado;
- `contador`: estilo do texto que mostra a quantidade de cliques;
- `botaoPrimario` e `botaoSecundario`: estilos visuais dos botões;
- `textoBotao`: aparência do texto exibido dentro dos botões.

---

## 14. Resultado esperado

Ao executar o projeto, a tela deverá apresentar:

- o título **Painel de Status**;
- um subtítulo explicativo;
- a mensagem **Sistema desligado** inicialmente;
- o contador de cliques com valor inicial `0`;
- um botão para alternar o status;
- um botão para resetar o painel.

### Comportamento esperado

Ao clicar em **Alternar status**:

- a mensagem muda;
- a cor do texto muda;
- o contador aumenta.

Ao clicar em **Resetar painel**:

- o sistema volta para desligado;
- o contador volta para `0`.

---


## 16. Conclusão

States e grupos de estilo são dois conceitos fundamentais para o desenvolvimento de interfaces em React Native com TypeScript.

O **state** permite construir telas dinâmicas, capazes de responder às ações do usuário. Já os **grupos de estilo** ajudam a manter a interface organizada, clara e mais fácil de evoluir.

No exemplo apresentado, esses dois conceitos trabalham juntos:

- o state controla o comportamento da tela;
- os grupos de estilo organizam sua aparência.

Essa combinação é essencial para que os estudantes compreendam como construir aplicações interativas de forma limpa, legível e bem estruturada.
