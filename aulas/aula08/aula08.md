# Aula 08 — ScrollView e FlatList no React Native

## 1. Introdução

Em aplicações móveis, nem sempre o conteúdo cabe completamente na tela do dispositivo. Em muitos casos, uma tela pode possuir vários textos, imagens, cards, produtos, mensagens, contatos ou registros que ultrapassam o espaço visível.

Quando isso acontece, o aplicativo precisa permitir que o usuário deslize a tela para visualizar o restante do conteúdo.

No React Native, dois componentes são muito utilizados para esse tipo de situação:

- `ScrollView`, usado para criar áreas com rolagem quando o conteúdo é limitado e conhecido;
- `FlatList`, usado para exibir listas de dados de forma mais eficiente.

Nesta aula, vamos estudar a diferença entre esses dois componentes e entender quando usar cada um.

---


## 2. O que é rolagem?

Rolagem é o comportamento que permite movimentar o conteúdo da tela para cima, para baixo ou para os lados.

Em dispositivos móveis, isso normalmente acontece quando o usuário desliza o dedo sobre a tela.

### Exemplos de telas que usam rolagem

- lista de contatos;
- feed de notícias;
- lista de produtos;
- mensagens de uma conversa;
- tela de configurações;
- formulário longo;
- tela com muitos cards.

### Ideia principal

Quando o conteúdo é maior que a área visível da tela, precisamos de um componente que permita o deslocamento desse conteúdo.

---

## 3. O que é `ScrollView`?

`ScrollView` é um componente do React Native que permite criar uma área rolável.

Ele é útil quando temos um conjunto de elementos que pode ultrapassar o tamanho da tela.

### Exemplo simples

```tsx
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>
```

Nesse caso, se o conteúdo ultrapassar a altura da tela, será possível rolar para visualizar os demais itens.

---

## 4. Quando usar `ScrollView`?

O `ScrollView` costuma ser indicado quando:

- a quantidade de conteúdo é pequena ou moderada;
- os elementos são diferentes entre si;
- a tela possui textos, imagens, cards e formulários misturados;
- o conteúdo é conhecido previamente;
- não há uma lista muito grande de dados.

### Exemplos práticos

- uma tela de detalhes de um produto;
- uma tela com instruções de uso;
- uma tela de perfil de usuário;
- um formulário com poucos campos;
- uma tela de apresentação de conteúdo.

---

## 5. Limitação do `ScrollView`

O `ScrollView` renderiza todos os seus elementos filhos de uma vez.

Isso significa que, se colocarmos muitos itens dentro dele, todos serão criados ao mesmo tempo, mesmo aqueles que ainda não aparecem na tela.

### Problema

Se a lista tiver muitos itens, o aplicativo pode ficar:

- mais lento;
- com maior consumo de memória;
- com rolagem menos fluida;
- com maior tempo de carregamento inicial.

Por isso, para listas grandes, o mais indicado é usar `FlatList`.

---

## 6. O que é `FlatList`?

`FlatList` é um componente usado para renderizar listas de dados de forma eficiente.

Diferente do `ScrollView`, o `FlatList` não precisa renderizar todos os itens de uma vez. Ele trabalha melhor com listas maiores, pois renderiza principalmente os itens que estão visíveis ou próximos de aparecer na tela.

### Exemplo simples

```tsx
<FlatList
  data={dados}
  renderItem={({ item }) => <Text>{item.nome}</Text>}
/>
```

Nesse exemplo:

- `data` recebe o array de dados;
- `renderItem` informa como cada item da lista será exibido.

---

## 7. Quando usar `FlatList`?

O `FlatList` costuma ser indicado quando:

- os dados estão em um array;
- os itens possuem estrutura semelhante;
- a lista pode crescer;
- os dados podem vir de uma API;
- é necessário melhor desempenho;
- queremos renderizar cards, produtos, contatos, mensagens ou tarefas.

### Exemplos práticos

- lista de alunos;
- lista de produtos;
- lista de mensagens;
- lista de tarefas;
- lista de notícias;
- lista de filmes;
- lista de disciplinas.

---

## 8. Comparando `ScrollView` e `FlatList`

| Recurso | `ScrollView` | `FlatList` |
|---|---|---|
| Uso principal | Conteúdo rolável geral | Lista de dados |
| Quantidade de itens | Pequena ou moderada | Média ou grande |
| Renderização | Renderiza tudo de uma vez | Renderiza de forma otimizada |
| Dados em array | Não é obrigatório | É o uso mais comum |
| Desempenho em listas grandes | Pode piorar | Melhor |
| Exemplo comum | Tela de perfil ou formulário | Lista de produtos ou contatos |

### Regra prática

Use `ScrollView` quando a tela tiver conteúdo variado e limitado.

Use `FlatList` quando a tela tiver uma lista de itens semelhantes.

---

## 9. Exemplo 1 — Conteúdo sem rolagem

Neste primeiro exemplo, vamos criar uma tela com vários textos, mas sem usar `ScrollView`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de conteúdos</Text>

        <Text style={styles.item}>Conteúdo 1</Text>
        <Text style={styles.item}>Conteúdo 2</Text>
        <Text style={styles.item}>Conteúdo 3</Text>
        <Text style={styles.item}>Conteúdo 4</Text>
        <Text style={styles.item}>Conteúdo 5</Text>
        <Text style={styles.item}>Conteúdo 6</Text>
        <Text style={styles.item}>Conteúdo 7</Text>
        <Text style={styles.item}>Conteúdo 8</Text>
        <Text style={styles.item}>Conteúdo 9</Text>
        <Text style={styles.item}>Conteúdo 10</Text>
        <Text style={styles.item}>Conteúdo 11</Text>
        <Text style={styles.item}>Conteúdo 12</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 22,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
```

### O que este exemplo mostra?

Esse exemplo apresenta uma tela com vários textos dentro de um `View`.

Dependendo do tamanho da tela do dispositivo, parte do conteúdo pode não aparecer corretamente, pois ainda não existe rolagem.

### O que este exemplo ensina?

Ele mostra o problema que justifica o uso do `ScrollView`: quando o conteúdo é maior do que a tela, precisamos permitir que o usuário role a interface.

---

## 10. Exemplo 2 — Usando `ScrollView` vertical

Agora vamos resolver o problema adicionando o componente `ScrollView`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista com ScrollView</Text>

        <ScrollView>
          <Text style={styles.item}>Conteúdo 1</Text>
          <Text style={styles.item}>Conteúdo 2</Text>
          <Text style={styles.item}>Conteúdo 3</Text>
          <Text style={styles.item}>Conteúdo 4</Text>
          <Text style={styles.item}>Conteúdo 5</Text>
          <Text style={styles.item}>Conteúdo 6</Text>
          <Text style={styles.item}>Conteúdo 7</Text>
          <Text style={styles.item}>Conteúdo 8</Text>
          <Text style={styles.item}>Conteúdo 9</Text>
          <Text style={styles.item}>Conteúdo 10</Text>
          <Text style={styles.item}>Conteúdo 11</Text>
          <Text style={styles.item}>Conteúdo 12</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 22,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
```

### O que mudou?

Foi adicionado o componente:

```tsx
<ScrollView>
```

E os textos foram colocados dentro dele.

### Explicando o código

- `import { ScrollView, StyleSheet, Text, View } from 'react-native';`  
  Importa o componente `ScrollView`, além de `StyleSheet`, `Text` e `View`.

- `<View style={styles.container}>`  
  Cria o contêiner principal da tela.

- `<ScrollView>`  
  Cria uma área que pode ser rolada.

- `<Text style={styles.item}>Conteúdo 1</Text>`  
  Exibe cada item visual dentro da área rolável.

### O que este exemplo ensina?

Agora, mesmo que o conteúdo ultrapasse o tamanho da tela, o usuário poderá deslizar para visualizar os demais itens.

---

## 11. Exemplo 3 — Adicionando espaçamento interno no `ScrollView`

Em muitos casos, queremos controlar o espaçamento do conteúdo que está dentro do `ScrollView`.

Para isso, podemos usar a prop `contentContainerStyle`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>ScrollView com espaçamento</Text>

        <ScrollView contentContainerStyle={styles.areaScroll}>
          <Text style={styles.item}>Aula 01 — Introdução</Text>
          <Text style={styles.item}>Aula 02 — Componentes básicos</Text>
          <Text style={styles.item}>Aula 03 — Criando componentes</Text>
          <Text style={styles.item}>Aula 04 — State</Text>
          <Text style={styles.item}>Aula 05 — Tamanhos</Text>
          <Text style={styles.item}>Aula 06 — Flexbox</Text>
          <Text style={styles.item}>Aula 07 — Entrada de dados</Text>
          <Text style={styles.item}>Aula 08 — ScrollView e FlatList</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  areaScroll: {
    paddingBottom: 30,
  },
  item: {
    fontSize: 20,
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#dfe6e9',
    borderRadius: 8,
  },
});

export default App;
```

### O que mudou?

Foi adicionada a prop:

```tsx
contentContainerStyle={styles.areaScroll}
```

### Para que serve `contentContainerStyle`?

A prop `contentContainerStyle` aplica estilo ao conteúdo interno do `ScrollView`.

Ela é útil para adicionar:

- espaçamento interno;
- alinhamento;
- margem final;
- organização do conteúdo rolável.

### O que este exemplo ensina?

Esse exemplo mostra que o `ScrollView` pode ter um estilo no contêiner principal e outro estilo no conteúdo interno.

---

## 12. Exemplo 4 — `ScrollView` horizontal

O `ScrollView` também pode ser usado para rolagem horizontal.

Para isso, usamos a prop `horizontal`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Categorias</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.textoCard}>React Native</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.textoCard}>TypeScript</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.textoCard}>Mobile</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.textoCard}>Expo</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 160,
    height: 100,
    backgroundColor: '#74b9ff',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoCard: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
```

### O que mudou?

Foi usada a prop:

```tsx
horizontal
```

Também foi usada a prop:

```tsx
showsHorizontalScrollIndicator={false}
```

### Explicando

- `horizontal` faz a rolagem acontecer da esquerda para a direita;
- `showsHorizontalScrollIndicator={false}` oculta a barra de rolagem horizontal;
- cada `View` representa um card de categoria.

### O que este exemplo ensina?

Esse exemplo mostra que o `ScrollView` pode ser usado tanto para rolagem vertical quanto horizontal.

Esse tipo de estrutura é comum em telas com categorias, filtros, cards ou destaques.

---

## 13. Exemplo 5 — Criando uma lista simples com `FlatList`

Agora vamos criar uma lista usando `FlatList`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const disciplinas = [
  { id: '1', nome: 'Desenvolvimento para Dispositivos Móveis' },
  { id: '2', nome: 'Programação Orientada a Objetos' },
  { id: '3', nome: 'Engenharia de Software' },
  { id: '4', nome: 'Banco de Dados' },
  { id: '5', nome: 'Estrutura de Dados' },
];

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Disciplinas</Text>

        <FlatList
          data={disciplinas}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.nome}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    fontSize: 20,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#dfe6e9',
  },
});

export default App;
```

### O que este exemplo mostra?

Esse exemplo exibe uma lista de disciplinas usando `FlatList`.

### Explicando o código

- `const disciplinas = [...]`  
  Cria um array de objetos.

- `data={disciplinas}`  
  Informa ao `FlatList` qual array será usado como fonte de dados.

- `renderItem={({ item }) => (...)}`  
  Define como cada item será exibido na tela.

- `{item.nome}`  
  Exibe o nome da disciplina atual.

### O que este exemplo ensina?

O `FlatList` trabalha diretamente com arrays.

Para cada objeto do array, o `renderItem` retorna um componente visual.

---

## 14. Exemplo 6 — Usando `keyExtractor`

Em listas, cada item precisa ter uma chave única.

No React Native, podemos informar essa chave usando a prop `keyExtractor`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const alunos = [
  { id: '1', nome: 'Ana', curso: 'TADS' },
  { id: '2', nome: 'Bruno', curso: 'TADS' },
  { id: '3', nome: 'Carla', curso: 'TADS' },
  { id: '4', nome: 'Diego', curso: 'TADS' },
];

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de alunos</Text>

        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.curso}>Curso: {item.curso}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f1f2f6',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  curso: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;
```

### O que mudou?

Foi adicionada a prop:

```tsx
keyExtractor={(item) => item.id}
```

### Para que serve `keyExtractor`?

O `keyExtractor` informa qual valor será usado como chave única de cada item da lista.

Neste exemplo, cada aluno possui um `id`, e esse `id` é usado como chave.

### O que este exemplo ensina?

Esse exemplo mostra que o `FlatList` pode renderizar itens mais completos, como cards com nome e curso.

---

## 15. Exemplo 7 — Tipando os dados com TypeScript

Como estamos usando TypeScript, podemos criar um tipo para representar cada item da lista.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Produto = {
  id: string;
  nome: string;
  preco: string;
};

const produtos: Produto[] = [
  { id: '1', nome: 'Caderno', preco: 'R$ 18,90' },
  { id: '2', nome: 'Caneta', preco: 'R$ 3,50' },
  { id: '3', nome: 'Mochila', preco: 'R$ 119,90' },
  { id: '4', nome: 'Livro', preco: 'R$ 79,90' },
  { id: '5', nome: 'Estojo', preco: 'R$ 24,90' },
];

class App extends Component {
  renderItem = ({ item }: { item: Produto }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Produtos</Text>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f5f6fa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 18,
    marginTop: 6,
  },
});

export default App;
```

### O que mudou?

Foi criado o tipo:

```tsx
type Produto = {
  id: string;
  nome: string;
  preco: string;
};
```

Também foi criada a lista:

```tsx
const produtos: Produto[] = [...]
```

### Explicando

- `Produto` define a estrutura de cada item;
- `produtos: Produto[]` informa que a lista é um array de produtos;
- `renderItem = ({ item }: { item: Produto }) => { ... }` tipa o item recebido pelo `FlatList`.

### O que este exemplo ensina?

Esse exemplo mostra como unir `FlatList` e TypeScript.

A tipagem ajuda a evitar erros e deixa claro quais informações existem em cada item da lista.

---

## 16. Exemplo 8 — Adicionando cabeçalho, rodapé e separador

O `FlatList` permite adicionar componentes auxiliares, como cabeçalho, rodapé e separadores.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Noticia = {
  id: string;
  titulo: string;
  categoria: string;
};

const noticias: Noticia[] = [
  { id: '1', titulo: 'React Native facilita o desenvolvimento mobile', categoria: 'Tecnologia' },
  { id: '2', titulo: 'Aplicativos móveis estão cada vez mais presentes', categoria: 'Mobile' },
  { id: '3', titulo: 'TypeScript ajuda a reduzir erros no código', categoria: 'Programação' },
];

class App extends Component {
  renderItem = ({ item }: { item: Noticia }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.tituloNoticia}>{item.titulo}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={noticias}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={<Text style={styles.titulo}>Notícias</Text>}
          ListFooterComponent={<Text style={styles.rodape}>Fim da lista</Text>}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f2f6',
    padding: 16,
    borderRadius: 8,
  },
  tituloNoticia: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  categoria: {
    fontSize: 16,
    marginTop: 6,
  },
  separador: {
    height: 12,
  },
  rodape: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
```

### O que mudou?

Foram adicionadas três props ao `FlatList`:

```tsx
ListHeaderComponent
ListFooterComponent
ItemSeparatorComponent
```

### Explicando

- `ListHeaderComponent` exibe um componente no início da lista;
- `ListFooterComponent` exibe um componente no final da lista;
- `ItemSeparatorComponent` exibe um separador entre os itens.

### O que este exemplo ensina?

Esse exemplo mostra que o `FlatList` permite montar listas mais organizadas visualmente, com título, separadores e rodapé.

---


## 17. Exemplo 9 — `FlatList` com dados no `state` e componente `Pessoa`

Neste exemplo, vamos criar uma lista de pessoas usando `FlatList`.

Diferente dos exemplos anteriores, os dados ficarão armazenados no `state` do componente de classe.

Além disso, cada item da lista será exibido por um componente separado chamado `Pessoa`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

// Tipo que representa os dados de uma pessoa.
type PessoaData = {
  nome: string;
  idade: number;
  email: string;
};

// Interface que representa o estado do componente App.
interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    // Estado inicial do componente.
    this.state = {
      // Array de objetos com os dados das pessoas.
      feed: [
        { nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { nome: 'João', idade: 22, email: 'joao@joao.com' },
        { nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { nome: 'Paulo', idade: 15, email: 'paulo@paulo.com' },
      ],
    };
  }

  // Função responsável por renderizar cada item da lista.
  private renderItem: ListRenderItem<PessoaData> = ({ item }) => {
    return <Pessoa data={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} // Lista que será exibida pelo FlatList.
          renderItem={this.renderItem} // Define como cada item será renderizado.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pessoa: {
    marginBottom: 12,
  },
});

// Props recebidas pelo componente Pessoa.
interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    return (
      <View style={styles.pessoa}>
        <Text>{this.props.data.nome}</Text>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse exemplo mostra uma lista de pessoas sendo renderizada com `FlatList`.

Os dados não estão em uma constante fora da classe. Eles estão dentro do `state` do componente `App`.

### O que mudou?

Foram adicionados:

```tsx
type PessoaData
interface AppState
this.state = { feed: [...] }
class Pessoa extends Component<PessoaProps>
```

### Explicando o código

- `type PessoaData` define quais campos cada pessoa deve possuir.
- `interface AppState` define a estrutura do estado da classe `App`.
- `feed: PessoaData[]` informa que `feed` será um array de pessoas.
- `data={this.state.feed}` envia o array do estado para o `FlatList`.
- `renderItem={this.renderItem}` informa qual função será usada para montar cada item da lista.
- `<Pessoa data={item} />` envia os dados de uma pessoa para o componente `Pessoa`.
- `this.props.data.nome` acessa o nome recebido por meio das propriedades do componente.

### Observação importante

Neste primeiro exemplo, os objetos ainda não possuem um campo `id`.

Por isso, a chave única da lista ainda será melhorada no próximo exemplo.

### O que este exemplo ensina?

Esse exemplo ensina como usar `FlatList` com dados armazenados no `state` e como separar a renderização de cada item em um componente próprio.

---

## 18. Exemplo 10 — Adicionando `id` e `keyExtractor` na lista de pessoas

Agora vamos melhorar o exemplo anterior adicionando um campo `id` para cada pessoa.

Esse `id` será usado pelo `keyExtractor`, permitindo que o React Native identifique cada item da lista de forma única.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

// Tipo que representa os dados de uma pessoa.
type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

// Interface que representa o estado do componente App.
interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    // Estado inicial do componente.
    this.state = {
      // Array de objetos com os dados das pessoas.
      feed: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'João', idade: 22, email: 'joao@joao.com' },
        { id: '3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { id: '4', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com' },
      ],
    };
  }

  // Função responsável por renderizar cada item da lista.
  private renderItem: ListRenderItem<PessoaData> = ({ item }) => {
    return <Pessoa data={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} // Lista que será exibida pelo FlatList.
          renderItem={this.renderItem} // Define como cada item será renderizado.
          keyExtractor={(item) => item.id} // Extrai a chave única de cada item.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pessoa: {
    marginBottom: 12,
  },
});

// Props recebidas pelo componente Pessoa.
interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    return (
      <View style={styles.pessoa}>
        <Text>{this.props.data.nome}</Text>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse exemplo mostra a forma recomendada de identificar cada item de uma lista usando um campo `id`.

### O que mudou?

O tipo `PessoaData` recebeu o campo:

```tsx
id: string;
```

Cada objeto do array também recebeu um `id`:

```tsx
{ id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' }
```

E o `FlatList` recebeu a prop:

```tsx
keyExtractor={(item) => item.id}
```

### Explicando o código

- `id: string` define que cada pessoa terá um identificador textual.
- `keyExtractor={(item) => item.id}` informa ao `FlatList` qual campo será usado como chave.
- A chave ajuda o React Native a controlar melhor a renderização dos itens.

### O que este exemplo ensina?

Esse exemplo ensina a importância de definir uma chave única para cada item da lista.

Em listas reais, sempre que possível, devemos preferir um `id` em vez de usar o índice do array.

---

## 19. Exemplo 11 — Exibindo nome, idade e e-mail no componente `Pessoa`

Agora vamos ampliar a exibição dos dados.

No exemplo anterior, o componente `Pessoa` mostrava apenas o nome. Neste exemplo, ele também exibirá a idade e o e-mail.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

// Tipo que representa os dados de uma pessoa.
type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

// Interface que representa o estado do componente App.
interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    // Estado inicial do componente.
    this.state = {
      // Array de objetos com os dados das pessoas.
      feed: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'João', idade: 22, email: 'joao@joao.com' },
        { id: '3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { id: '4', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com' },
      ],
    };
  }

  // Função responsável por renderizar cada item da lista.
  private renderItem: ListRenderItem<PessoaData> = ({ item }) => {
    return <Pessoa data={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} // Lista que será exibida pelo FlatList.
          renderItem={this.renderItem} // Define como cada item será renderizado.
          keyExtractor={(item) => item.id} // Extrai a chave única de cada item.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pessoa: {
    marginBottom: 12,
  },
});

// Props recebidas pelo componente Pessoa.
interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    return (
      <View style={styles.pessoa}>
        <Text>{this.props.data.nome}</Text>
        <Text>{this.props.data.idade}</Text>
        <Text>{this.props.data.email}</Text>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse exemplo mostra que o mesmo item da lista pode exibir várias informações.

Cada pessoa possui `nome`, `idade` e `email`, e esses três campos são exibidos no componente `Pessoa`.

### O que mudou?

No componente `Pessoa`, foram adicionados mais dois componentes `Text`:

```tsx
<Text>{this.props.data.idade}</Text>
<Text>{this.props.data.email}</Text>
```

### Explicando o código

- `this.props.data.nome` exibe o nome da pessoa.
- `this.props.data.idade` exibe a idade da pessoa.
- `this.props.data.email` exibe o e-mail da pessoa.
- Todos esses dados chegam ao componente `Pessoa` por meio da prop `data`.

### O que este exemplo ensina?

Esse exemplo ensina que um componente usado dentro de uma lista pode receber um objeto completo e escolher quais informações serão exibidas na tela.

---

## 20. Exemplo 12 — Estilizando os itens da `FlatList`

Agora vamos melhorar a aparência de cada item da lista.

Para isso, o componente `Pessoa` será exibido dentro de uma área com cor de fundo, altura e espaçamento.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

// Tipo que representa os dados de uma pessoa.
type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

// Interface que representa o estado do componente App.
interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    // Estado inicial do componente.
    this.state = {
      // Array de objetos com os dados das pessoas.
      feed: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'João', idade: 22, email: 'joao@joao.com' },
        { id: '3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { id: '4', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com' },
      ],
    };
  }

  // Função responsável por renderizar cada item da lista.
  private renderItem: ListRenderItem<PessoaData> = ({ item }) => {
    return <Pessoa data={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} // Lista que será exibida pelo FlatList.
          renderItem={this.renderItem} // Define como cada item será renderizado.
          keyExtractor={(item) => item.id} // Extrai a chave única de cada item.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaPessoa: {
    backgroundColor: 'grey',
    height: 200,
    marginBottom: 15,
    padding: 10,
    justifyContent: 'center',
  },
  textoPessoa: {
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 5,
    padding: 5,
  },
});

// Props recebidas pelo componente Pessoa.
interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.email}</Text>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse exemplo mostra como aplicar estilos aos itens renderizados pela `FlatList`.

O componente `Pessoa` deixa de ser apenas um conjunto simples de textos e passa a ter uma área visual mais destacada.

### O que mudou?

Foram criados dois estilos principais:

```tsx
areaPessoa
textoPessoa
```

E eles foram aplicados no componente `Pessoa`:

```tsx
<View style={styles.areaPessoa}>
<Text style={styles.textoPessoa}>...</Text>
```

### Explicando o código

- `areaPessoa` estiliza o contêiner de cada pessoa.
- `backgroundColor: 'grey'` define a cor de fundo da área da pessoa.
- `height: 200` define a altura de cada item.
- `marginBottom: 15` cria espaço entre os itens da lista.
- `textoPessoa` estiliza cada informação exibida dentro do item.

### O que este exemplo ensina?

Esse exemplo ensina que os itens de uma `FlatList` podem ser personalizados visualmente da mesma forma que qualquer outro componente em React Native.

Com isso, é possível criar cards, blocos, linhas de tabela, contatos, produtos e outros elementos visuais.

---

## 21. Exemplo 13 — Separando o componente `Pessoa` em outro arquivo

Nos exemplos anteriores, o componente `Pessoa` foi criado dentro do próprio arquivo `App.tsx`.

Essa abordagem funciona em exemplos pequenos, mas, conforme o projeto cresce, o arquivo principal pode ficar muito grande e difícil de manter.

Por isso, uma prática importante no React Native é separar os componentes em arquivos próprios.

Neste exemplo, o componente `Pessoa` será colocado em um arquivo separado chamado `Pessoa.tsx`, dentro da pasta `src/components/Pessoas/`.

### Estrutura de pastas sugerida

```txt
ProjetoAula08/
├── App.tsx
└── src/
    └── components/
        └── Pessoas/
            └── Pessoa.tsx
```

### Por que separar componentes?

Separar componentes em arquivos ajuda a:

- deixar o `App.tsx` mais limpo;
- reaproveitar componentes em outras telas;
- organizar melhor o projeto;
- facilitar a manutenção do código;
- separar responsabilidades;
- tornar o código mais fácil de ler e explicar.

Neste caso:

- o `App.tsx` ficará responsável por armazenar os dados e renderizar a `FlatList`;
- o `Pessoa.tsx` ficará responsável por exibir visualmente os dados de cada pessoa.

---

### Arquivo 1 — `src/components/Pessoas/Pessoa.tsx`

O arquivo `Pessoa.tsx` contém o componente responsável por exibir os dados de uma pessoa.

Ele também exporta o tipo `PessoaData`, que será usado no `App.tsx` para tipar o estado da aplicação.

**Arquivo:** `src/components/Pessoas/Pessoa.tsx`

```tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tipo que representa os dados de uma pessoa.
// Esse tipo será exportado para ser usado também no App.tsx.
export type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

// Interface que define quais props o componente Pessoa irá receber.
interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    // Recupera o objeto data recebido por props.
    const { data } = this.props;

    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>{data.nome}</Text>
        <Text style={styles.textoPessoa}>{data.idade}</Text>
        <Text style={styles.textoPessoa}>{data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: 'grey',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    backgroundColor: '#FFF',
    fontSize: 20,
  },
});

// Exporta o componente Pessoa para que ele possa ser importado em outros arquivos.
export default Pessoa;
```

### Explicando o arquivo `Pessoa.tsx`

- `import React, { Component } from 'react';`  
  Importa o React e a classe `Component`, necessária para criar componentes de classe.

- `import { View, Text, StyleSheet } from 'react-native';`  
  Importa os componentes visuais e o recurso de estilos usados no componente `Pessoa`.

- `export type PessoaData = { ... }`  
  Cria e exporta o tipo que representa os dados de uma pessoa.

- `interface PessoaProps`  
  Define quais dados o componente `Pessoa` deve receber.

- `data: PessoaData`  
  Informa que a prop `data` deve seguir a estrutura definida no tipo `PessoaData`.

- `class Pessoa extends Component<PessoaProps>`  
  Cria o componente `Pessoa` e informa que ele receberá props do tipo `PessoaProps`.

- `const { data } = this.props;`  
  Recupera os dados recebidos por props e facilita o uso dentro do JSX.

- `{data.nome}`  
  Exibe o nome da pessoa.

- `{data.idade}`  
  Exibe a idade da pessoa.

- `{data.email}`  
  Exibe o e-mail da pessoa.

- `export default Pessoa;`  
  Permite que o componente seja importado no `App.tsx`.

---

### Arquivo 2 — `App.tsx`

O arquivo `App.tsx` passa a importar o componente `Pessoa` e o tipo `PessoaData`.

Com isso, o `App.tsx` não precisa mais conter o código visual do componente `Pessoa`.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Pessoa, { PessoaData } from './src/components/Pessoas/Pessoa';

// Interface que representa o estado do componente App.
interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);

    // Estado inicial do componente.
    this.state = {
      // Array de objetos PessoaData.
      feed: [
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { id: '2', nome: 'João', idade: 22, email: 'joao@joao.com' },
        { id: '3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { id: '4', nome: 'Paulo', idade: 15, email: 'joao@joao.com' },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} // Lista que irá receber os dados.
          renderItem={({ item }) => <Pessoa data={item} />} // Renderiza cada item usando o componente Pessoa.
          keyExtractor={(item) => item.id} // Extrai a chave única de cada item da lista.
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

### Explicando o arquivo `App.tsx`

- `import Pessoa, { PessoaData } from './src/components/Pessoas/Pessoa';`  
  Importa o componente `Pessoa` e também o tipo `PessoaData`.

- `Pessoa`  
  É o componente visual que será usado para exibir cada item da lista.

- `PessoaData`  
  É o tipo usado para garantir que os objetos do array tenham `id`, `nome`, `idade` e `email`.

- `interface AppState`  
  Define a estrutura do estado do componente `App`.

- `feed: PessoaData[]`  
  Informa que `feed` é um array de objetos do tipo `PessoaData`.

- `data={this.state.feed}`  
  Envia o array de pessoas para a `FlatList`.

- `renderItem={({ item }) => <Pessoa data={item} />}`  
  Para cada item da lista, renderiza o componente `Pessoa` e envia os dados por meio da prop `data`.

- `keyExtractor={(item) => item.id}`  
  Usa o campo `id` como chave única de cada item.

### O que mudou em relação ao exemplo anterior?

Antes, o componente `Pessoa`, o tipo `PessoaData`, as props e os estilos do item ficavam dentro do próprio `App.tsx`.

Agora, esses elementos foram movidos para o arquivo `Pessoa.tsx`.

Com isso, o `App.tsx` fica mais focado na lista e nos dados, enquanto o `Pessoa.tsx` fica responsável pela aparência de cada pessoa.

### Fluxo dos dados entre os arquivos

```txt
App.tsx
  └── possui o state com o array feed
      └── envia cada item para Pessoa.tsx pela prop data
          └── Pessoa.tsx recebe data e exibe nome, idade e email
```

### O que este exemplo ensina?

Esse exemplo ensina como organizar melhor uma aplicação React Native separando componentes em arquivos.

Também reforça três conceitos importantes:

- `export`, para disponibilizar componentes e tipos para outros arquivos;
- `import`, para utilizar componentes e tipos criados em outros arquivos;
- `props`, para enviar dados do componente pai para o componente filho.

Essa organização é muito comum em aplicações reais, principalmente quando o projeto começa a ter várias telas e vários componentes reutilizáveis.

---

## 22. Comparando os exemplos

| Exemplo | Ideia principal |
|---|---|
| Exemplo 1 | mostra o problema de conteúdo maior que a tela sem rolagem |
| Exemplo 2 | usa `ScrollView` para criar rolagem vertical |
| Exemplo 3 | usa `contentContainerStyle` para estilizar o conteúdo interno |
| Exemplo 4 | usa `ScrollView` horizontal |
| Exemplo 5 | cria uma lista simples com `FlatList` |
| Exemplo 6 | usa `keyExtractor` para definir chaves únicas |
| Exemplo 7 | tipa os dados da lista com TypeScript |
| Exemplo 8 | adiciona cabeçalho, rodapé e separador ao `FlatList` |
| Exemplo 9 | usa `FlatList` com dados armazenados no `state` |
| Exemplo 10 | adiciona `id` e `keyExtractor` na lista de pessoas |
| Exemplo 11 | exibe nome, idade e e-mail no componente `Pessoa` |
| Exemplo 12 | estiliza os itens renderizados pela `FlatList` |
| Exemplo 13 | separa o componente `Pessoa` em um arquivo próprio |

---

## 23. Conceitos principais da aula

### `ScrollView`

Componente usado para criar uma área rolável.

### `horizontal`

Prop usada no `ScrollView` para ativar rolagem horizontal.

### `contentContainerStyle`

Prop usada para aplicar estilos ao conteúdo interno do `ScrollView`.

### `FlatList`

Componente usado para renderizar listas de dados de forma eficiente.

### `data`

Prop do `FlatList` que recebe o array de dados.

### `renderItem`

Prop do `FlatList` que define como cada item será exibido.

### `ListRenderItem`

Tipo do React Native usado para tipar a função que renderiza cada item da lista.

### `keyExtractor`

Prop usada para informar a chave única de cada item.

### `state`

Estrutura usada em componentes de classe para armazenar dados que podem ser utilizados na interface.

### `props`

Dados enviados de um componente pai para um componente filho.

### `export`

Comando usado para disponibilizar um componente, tipo, função ou variável para ser utilizado em outro arquivo.

### `import`

Comando usado para trazer para um arquivo algo que foi exportado por outro arquivo.

### Separação de componentes

Prática de organizar a aplicação em arquivos menores, deixando cada componente com uma responsabilidade específica.

### `ListHeaderComponent`

Prop usada para exibir um cabeçalho na lista.

### `ListFooterComponent`

Prop usada para exibir um rodapé na lista.

### `ItemSeparatorComponent`

Prop usada para exibir separadores entre os itens.

---

## 24. Exemplo integrador

O exemplo abaixo reúne os principais conceitos trabalhados na aula: `FlatList`, dados tipados, cards, cabeçalho, rodapé e separadores.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Contato = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
};

const contatos: Contato[] = [
  { id: '1', nome: 'Ana Souza', telefone: '(45) 99999-1111', email: 'ana@email.com' },
  { id: '2', nome: 'Bruno Lima', telefone: '(45) 99999-2222', email: 'bruno@email.com' },
  { id: '3', nome: 'Carla Mendes', telefone: '(45) 99999-3333', email: 'carla@email.com' },
  { id: '4', nome: 'Diego Santos', telefone: '(45) 99999-4444', email: 'diego@email.com' },
  { id: '5', nome: 'Eduarda Alves', telefone: '(45) 99999-5555', email: 'eduarda@email.com' },
];

class App extends Component {
  renderItem = ({ item }: { item: Contato }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.info}>Telefone: {item.telefone}</Text>
        <Text style={styles.info}>E-mail: {item.email}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <View style={styles.cabecalho}>
              <Text style={styles.titulo}>Agenda de contatos</Text>
              <Text style={styles.subtitulo}>Exemplo integrador com FlatList</Text>
            </View>
          }
          ItemSeparatorComponent={() => <View style={styles.separador} />}
          ListFooterComponent={<Text style={styles.rodape}>Total de contatos: {contatos.length}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  cabecalho: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 6,
  },
  card: {
    backgroundColor: '#f1f2f6',
    padding: 16,
    borderRadius: 8,
  },
  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginTop: 4,
  },
  separador: {
    height: 12,
  },
  rodape: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
```

### O que este exemplo ensina?

Esse exemplo apresenta uma estrutura mais próxima de uma tela real.

Nele, temos:

- uma lista de contatos;
- dados tipados com TypeScript;
- cards para cada contato;
- cabeçalho da lista;
- separadores entre os itens;
- rodapé com o total de contatos.

---


## 25. Erros e dúvidas comuns

### 1. Colocar muitos itens dentro de `ScrollView`

Esse é um erro comum. O `ScrollView` renderiza todos os elementos de uma vez. Para listas grandes, prefira `FlatList`.

### 2. Esquecer o `flex: 1` no contêiner principal

Se o contêiner principal não ocupar a tela corretamente, a rolagem pode não funcionar como esperado.

Exemplo recomendado:

```tsx
container: {
  flex: 1,
}
```

### 3. Confundir `style` com `contentContainerStyle`

No `ScrollView`:

- `style` estiliza o componente externo;
- `contentContainerStyle` estiliza o conteúdo interno.

### 4. Esquecer de passar o array em `data`

O `FlatList` precisa receber os dados pela prop `data`.

Exemplo:

```tsx
<FlatList data={produtos} renderItem={this.renderItem} />
```

### 5. Esquecer de retornar um componente em `renderItem`

O `renderItem` deve retornar o que será exibido para cada item.

Exemplo:

```tsx
renderItem={({ item }) => <Text>{item.nome}</Text>}
```

### 6. Não definir uma chave única

Quando os objetos possuem `id`, é uma boa prática usar `keyExtractor`.

Exemplo:

```tsx
keyExtractor={(item) => item.id}
```

### 7. Usar `FlatList` para conteúdo muito variado

Se a tela não é uma lista e possui muitos tipos diferentes de componentes, talvez `ScrollView` seja mais simples.

### 8. Criar uma lista sem pensar na chave dos itens

Quando a lista cresce, é importante que cada item tenha uma chave única.

O ideal é usar um campo próprio, como `id`.

Exemplo:

```tsx
keyExtractor={(item) => item.id}
```


### 9. Errar o caminho do `import` ao separar componentes

Quando um componente é movido para outro arquivo, o caminho usado no `import` precisa corresponder exatamente à estrutura de pastas do projeto.

Exemplo:

```tsx
import Pessoa, { PessoaData } from './src/components/Pessoas/Pessoa';
```

Se a pasta ou o nome do arquivo estiver diferente, o projeto apresentará erro de importação.

### 10. Esquecer de exportar o componente ou o tipo

Para que o `App.tsx` consiga usar o componente `Pessoa`, o arquivo `Pessoa.tsx` precisa exportá-lo.

Exemplo:

```tsx
export default Pessoa;
```

Como o tipo `PessoaData` também é usado no `App.tsx`, ele precisa ser exportado.

Exemplo:

```tsx
export type PessoaData = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};
```

## 26. Conclusão

`ScrollView` e `FlatList` são componentes fundamentais para a construção de interfaces móveis em React Native.

O `ScrollView` é adequado para telas com conteúdo variado e limitado, permitindo que o usuário role a interface quando o conteúdo ultrapassa a tela.

O `FlatList`, por sua vez, é mais indicado para listas de dados, especialmente quando os itens possuem estrutura semelhante e podem crescer em quantidade.
