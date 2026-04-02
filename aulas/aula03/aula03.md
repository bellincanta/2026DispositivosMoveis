# React Native — Criando componentes

## O que é um componente?

Em React Native, um componente é uma parte da interface da aplicação.

Pense em um componente como um **bloco reutilizável de código**. Em vez de escrever tudo dentro do `App`, podemos separar partes da tela em componentes menores.

Por exemplo:

- um componente pode exibir uma imagem;
- outro componente pode exibir um título;
- outro componente pode mostrar um botão;
- outro componente pode representar um card, uma lista ou um formulário.

Isso deixa o projeto:

- mais organizado;
- mais fácil de entender;
- mais fácil de reaproveitar;
- mais simples de manter.

> Em React e React Native, nomes de componentes devem começar com **letra maiúscula**. Essa é uma convenção importante.

---


## Projeto da aula

A pasta com o projeto utilizado nesta aula pode ser acessada no link abaixo:

[projeto aula 03](2026DispositivosMoveis/aulas/aula03/exemploAula03)

---

## Exemplo 1 — Criando um componente para exibir a imagem

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Imagem />
      </View>
    );
  }
}

export default App;

class Imagem extends Component {
  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300 }}
      />
    );
  }
}
```

### Explicando o código linha a linha

- `import React, { Component } from 'react';`  
  Importa o React e a classe `Component`, usada para criar componentes de classe.

- `import { View, Text, Image } from 'react-native';`  
  Importa três componentes nativos importantes:
  - `View`: funciona como um contêiner;
  - `Text`: exibe textos na tela;
  - `Image`: exibe imagens.

- `class App extends Component {`  
  Cria o componente principal da aplicação.

- `render() {`  
  Todo componente de classe precisa do método `render()`. É nele que definimos o que será mostrado na tela.

- `let nome = 'IFPR';`  
  Cria uma variável local chamada `nome`, que será usada para exibir um texto na interface.

- `return (`  
  Indica que o método `render()` vai retornar a interface visual do componente.

- `<View>`  
  Cria um bloco contêiner para agrupar outros componentes.

- `<Text>Olá Mundo!</Text>`  
  Exibe o texto "Olá Mundo!" na tela.

- `<Text>Meu primeiro App!</Text>`  
  Exibe um segundo texto.

- `<Text style={{ color: 'red', fontSize: 25, margin: 15 }}>`  
  Exibe um texto estilizado. Aqui, `style` é uma **prop** do componente `Text`.

- `color: 'red'`  
  Define a cor do texto.

- `fontSize: 25`  
  Define o tamanho da fonte.

- `margin: 15`  
  Define a margem externa do componente.

- `<Text style={{ fontSize: 30 }}>{nome}</Text>`  
  Exibe o valor da variável `nome` dentro do componente `Text`.

- `<Imagem />`  
  Aqui o componente `Imagem` está sendo chamado dentro do `App`. Isso mostra a ideia central do React: **componentes podem usar outros componentes**.

- `export default App;`  
  Exporta o componente `App` como componente principal do arquivo.

- `class Imagem extends Component {`  
  Cria um novo componente chamado `Imagem`.

- `let img = 'https://reactnative.dev/img/tiny_logo.png';`  
  Guarda o endereço da imagem em uma variável.

- `<Image source={{ uri: img }} style={{ width: 300, height: 300 }} />`  
  Exibe a imagem usando:
  - `source`: prop que informa a origem da imagem;
  - `uri`: endereço da imagem;
  - `style`: prop que define largura e altura.

### O que este exemplo ensina?

Este primeiro exemplo mostra que:

- podemos criar um componente chamado `Imagem`;
- esse componente pode ficar responsável por uma parte específica da interface;
- o componente `App` pode reutilizar esse componente com `<Imagem />`.

Ou seja, em vez de deixar toda a lógica visual dentro do `App`, começamos a separar responsabilidades.

---

## Exemplo 2 — Passando props de largura e altura

Agora vamos melhorar o componente `Imagem`. Em vez de deixar largura e altura fixas, vamos receber esses valores por **props**.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

interface ImagemProps {
  largura: number;
  altura: number;
}

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Imagem largura={500} altura={200} />
      </View>
    );
  }
}

export default App;

class Imagem extends Component<ImagemProps> {
  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <Image
        source={{ uri: img }}
        style={{ width: this.props.largura, height: this.props.altura }}
      />
    );
  }
}
```

### Explicando o que mudou

- `interface ImagemProps {`  
  Cria uma interface para definir quais props o componente `Imagem` deve receber.

- `largura: number;`  
  Informa que a prop `largura` deve ser um número.

- `altura: number;`  
  Informa que a prop `altura` também deve ser um número.

- `<Imagem largura={500} altura={200} />`  
  Aqui o componente está sendo chamado com duas props:
  - `largura={500}`
  - `altura={200}`

- `class Imagem extends Component<ImagemProps> {`  
  Informa ao TypeScript que o componente `Imagem` usa a interface `ImagemProps` para tipar suas props.

- `this.props.largura`  
  Acessa o valor da prop `largura` recebida pelo componente.

- `this.props.altura`  
  Acessa o valor da prop `altura` recebida pelo componente.

- `style={{ width: this.props.largura, height: this.props.altura }}`  
  Usa os valores recebidos nas props para definir o tamanho da imagem.

### O que este exemplo ensina?

Agora o componente `Imagem` ficou mais flexível.

Antes, ele sempre mostrava a imagem com o mesmo tamanho. Agora, quem usa o componente pode decidir o tamanho da imagem no momento da chamada.

Isso é importante porque mostra o principal papel das props:

> **props servem para enviar dados de um componente pai para um componente filho.**

No exemplo:

- `App` é o componente pai;
- `Imagem` é o componente filho.

---

## Exemplo 3 — Inserindo um `Text` dentro do componente `Imagem`

Agora vamos fazer o componente `Imagem` renderizar mais de um elemento: a imagem e um texto logo abaixo dela.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

interface ImagemProps {
  largura: number;
  altura: number;
}

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Imagem largura={500} altura={200} />
      </View>
    );
  }
}

export default App;

class Imagem extends Component<ImagemProps> {
  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>Logo React</Text>
      </View>
    );
  }
}
```

### Explicando o que mudou

- `return ( <View> ... </View> )`  
  Agora o componente `Imagem` não retorna apenas a imagem. Ele retorna uma `View` contendo mais de um elemento.

- `<Image ... />`  
  Continua exibindo a imagem com largura e altura recebidas por props.

- `<Text>Logo React</Text>`  
  Exibe um texto abaixo da imagem.

### Por que usar a `View` aqui?

No React Native, quando queremos retornar mais de um elemento visual, normalmente agrupamos esses elementos dentro de um contêiner, como a `View`.

Neste caso, a `View` agrupa:

- a imagem;
- o texto.

### O que este exemplo ensina?

Este exemplo mostra que um componente pode representar uma parte mais completa da interface.

Ou seja, o componente `Imagem` não precisa mostrar apenas a imagem. Ele também pode incluir outros elementos relacionados a ela, como:

- título;
- legenda;
- descrição;
- botão;
- ícone.

---

## Exemplo 4 — Passando também uma prop de nome

Agora vamos deixar o texto abaixo da imagem dinâmico. Em vez de escrever o texto fixo `Logo React`, vamos recebê-lo por prop.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

interface ImagemProps {
  largura: number;
  altura: number;
  nome2: string;
}

class App extends Component {
  render() {
    let nome = 'IFPR';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Text style={{ fontSize: 30 }}>{nome}</Text>

        <Imagem largura={500} altura={200} nome2="Teste Props Logo React" />
      </View>
    );
  }
}

export default App;

class Imagem extends Component<ImagemProps> {
  render() {
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.nome2}</Text>
      </View>
    );
  }
}
```

### Explicando o que mudou

- `nome2: string;`  
  Foi adicionada uma nova prop na interface `ImagemProps`.

- `<Imagem largura={500} altura={200} nome2="Teste Props Logo React" />`  
  Agora, além de `largura` e `altura`, também estamos enviando a prop `nome2`.

- `<Text>{this.props.nome2}</Text>`  
  O componente `Imagem` exibe o valor recebido pela prop `nome2`.

### O que este exemplo ensina?

Este exemplo reforça que um componente pode receber vários dados diferentes por props.

No caso do componente `Imagem`, ele agora recebe:

- `largura`;
- `altura`;
- `nome2`.

Com isso, o componente fica mais reutilizável, pois pode ser usado em situações diferentes apenas trocando os valores recebidos.

> Observação didática: no exemplo foi usado o nome `nome2` porque ele aparece no material-base da aula. Em projetos reais, um nome mais descritivo como `titulo`, `legenda` ou `descricao` costuma ser melhor.

---

## Erro comum com props no TypeScript

Um erro muito comum é passar uma prop para o componente, mas esquecer de declará-la na interface.

Por exemplo, se você fizer isto:

```tsx
<Imagem largura={500} altura={200} nome2="Teste" />
```

mas a interface estiver assim:

```tsx
interface ImagemProps {
  largura: number;
  altura: number;
}
```

o TypeScript irá reclamar, porque `nome2` foi enviada, mas não foi declarada na interface.

### Como corrigir?

Basta declarar a prop que falta:

```tsx
interface ImagemProps {
  largura: number;
  altura: number;
  nome2: string;
}
```

### Ideia importante

No TypeScript, a interface funciona como um contrato.

Ela diz exatamente:

- quais props o componente aceita;
- quais tipos cada prop deve ter.

Se o uso do componente não seguir esse contrato, o TypeScript mostra erro.

---

## Resumindo a evolução dos exemplos

### Exemplo 1
Mostra como criar um componente separado para exibir a imagem.

### Exemplo 2
Mostra como passar `largura` e `altura` por props.

### Exemplo 3
Mostra que o componente pode retornar mais de um elemento visual.

### Exemplo 4
Mostra como deixar também o texto dinâmico com props.
