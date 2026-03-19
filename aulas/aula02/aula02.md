# React Native — Criando App com Expo

## Criar um novo projeto

```bash
npx create-expo-app@latest meuApp -t
# ou
npx create-expo-app nomeapp -t
```
> No lugar de `nomeapp`/`meuApp`, use o nome do seu aplicativo.

### Escolher o template
Quando a CLI listar os templates, **selecione `Blank (TypeScript)`**:

```
  Default - includes tools recommended for most app developers
  Blank
>>Blank (TypeScript)
  Navigation (TypeScript)
  Blank (Bare)
```

## Rodar o projeto

Acesse a pasta criada no terminal e execute:

```bash
npx expo start
```

### Pacotes úteis (web/runtime)
Para projetos que também rodam no navegador, instale:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```


# Entendendo React Native

React Native é um framework criado por engenheiros do Facebook que permite construir **aplicativos móveis nativos** para **iOS** e **Android** usando **JavaScript/TypeScript** e conceitos do **React**. Com ele, você aproveita o ecossistema web (ES6+, NPM, JSX, Flexbox) e, ao mesmo tempo, acessa APIs nativas com excelente desempenho.

## Por que usar React Native?

- **Código único, apps nativos**: compartilhe a maior parte do código entre Android e iOS.
- **Produtividade**: Fast Refresh, NPM/Yarn e vasta comunidade de pacotes.
- **Tecnologias modernas**: ES6+ (ECMAScript 2015+), JSX, Flexbox, TypeScript (opcional).
- **Depuração integrada**: suporte a Flipper, React DevTools e breakpoints na IDE.
- **Desempenho**: acesso a câmera, geolocalização e outros recursos nativos com fluidez (alvo de 60fps em interfaces bem projetadas).

> **Nota sobre ES6+**  
> ES6 (ECMAScript 2015) é a evolução do JavaScript. Seus objetivos incluem:
> - Melhor base para apps complexas  
> - Correção de limitações históricas da linguagem  
> - Facilitar a criação de bibliotecas  
> E muito mais (arrow functions, `let/const`, classes, módulos, desestruturação, etc.).

---

## Estrutura básica de um app

Geralmente, você encontrará arquivos como:

- `index.ts` / `index.tsx`: ponto de entrada; registra o app.
- `App.ts` / `App.tsx`: **componente raiz** da aplicação.
- `src/components/*`: componentes reutilizáveis.
- `src/screens/*`: telas do app.
- `src/styles/*`: estilos e temas.

**Exemplo mínimo (`App.tsx`) usando componente funcional:**

```tsx
import React from 'react';
import { View, Text } from 'react-native';

function App(){
  return (
    <View>
      <Text>Olá Mundo!</Text>
    </View>
  );
}

export default App;
```

**Exemplo equivalente (`App.tsx`) usando componente de classe:**

```tsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Olá Mundo!</Text>
      </View>
    );
  }
}

export default App;
```

### Diferença entre os dois

Os dois códigos produzem o mesmo resultado na tela: exibem o texto **Olá Mundo!** dentro de um componente `View`.

- **Componente funcional**: é escrito como uma função JavaScript/TypeScript comum. Hoje é a forma mais usada no React, por ser mais simples e direta.
- **Componente de classe**: é escrito usando `class` e precisa do método `render()` para retornar a interface.
- No componente funcional, a interface é retornada diretamente pela função.
- No componente de classe, a interface fica dentro de `render()`.
- Em projetos mais antigos, componentes de classe eram muito comuns. Em projetos atuais, costuma-se preferir componentes funcionais.

### Comparação rápida

| Componente funcional | Componente de classe |
|---|---|
| Usa `function App()` | Usa `class App extends Component` |
| Retorna JSX diretamente | Retorna JSX dentro de `render()` |
| Sintaxe mais simples | Sintaxe um pouco mais extensa |
| Mais comum em projetos atuais | Muito usado em materiais e projetos legados |

> Para fins didáticos, é importante conhecer os dois formatos. Assim, você consegue entender exemplos antigos e também escrever código no padrão atual do React Native.

---

## JSX (dentro do `render`)

JSX é a sintaxe que permite escrever UI de forma declarativa dentro do método `render()` — parece HTML, mas é JavaScript. 

---



## Entendendo props, estilos, variáveis e métodos

Em React Native, os componentes podem receber **props** (*properties*).  
As props são informações passadas para um componente para **configurar sua aparência, seu conteúdo ou seu comportamento**.

Pense assim:

- o componente é como um objeto pronto para uso;
- as **props** são os valores que você entrega a esse objeto;
- com esses valores, o componente sabe **o que mostrar** e **como mostrar**.

Por exemplo:

- no componente `Text`, a prop `style` altera a aparência do texto;
- no componente `Image`, a prop `source` informa de onde a imagem deve ser carregada;
- em componentes criados por você, as props podem ser usadas para receber nomes, títulos, mensagens, valores e outras informações.

> Em resumo: **props são parâmetros passados para componentes**.

### Importante

Nem tudo dentro do componente é prop.

- `nome` e `img` são **variáveis JavaScript**;
- `style` e `source` são **props dos componentes**;
- `render()` é um **método** da classe, responsável por retornar o que será exibido na tela.

---

### Exemplo 1 — Usando props diretamente nos componentes

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro app!</Text>

        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}

export default App;
```

#### Explicando o código

- `import React, { Component } from 'react';`  
  Importa o React e a classe `Component`, necessária para criar um componente de classe.

- `import { View, Text, Image } from 'react-native';`  
  Importa componentes visuais do React Native:
  - `View`: funciona como um contêiner;
  - `Text`: exibe textos;
  - `Image`: exibe imagens.

- `class App extends Component`  
  Cria um componente de classe chamado `App`.

- `render()`  
  É o método obrigatório em componentes de classe. Tudo o que será mostrado na tela deve ser retornado por ele.

- `<Text style={{ color: 'red', fontSize: 25, margin: 15 }}>`  
  Aqui, `style` é uma **prop**. Ela recebe um objeto com propriedades visuais:
  - `color`: cor do texto;
  - `fontSize`: tamanho da fonte;
  - `margin`: margem externa.

- `<Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 300, height: 300 }} />`  
  Nesse caso:
  - `source` é a **prop** que indica a origem da imagem;
  - `uri` informa o endereço da imagem;
  - `style` define largura e altura.

> Atenção: em `Image`, o valor de `uri` deve apontar para o **arquivo da imagem**, e não para um site qualquer.  
> Por isso, usar `https://pudim.com.br/` em `uri` não funciona como imagem, porque esse endereço é uma página HTML, não um arquivo de imagem.

---

### Exemplo 2 — Usando uma variável dentro do componente

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

        <Text style={{ color: 'red', fontSize: 25 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 300, height: 300 }}
        />

        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }
}

export default App;
```

#### O que mudou neste exemplo?

A principal mudança é esta linha:

```tsx
let nome = 'IFPR';
```

Aqui foi criada uma **variável JavaScript** chamada `nome`.

Depois, ela é exibida na tela com:

```tsx
<Text style={{ fontSize: 30 }}>{nome}</Text>
```

Isso significa que o valor da variável será inserido dentro do componente `Text`.

#### Diferença entre variável e prop

Neste trecho:

```tsx
<Text style={{ fontSize: 30 }}>{nome}</Text>
```

- `style` é uma **prop** do componente `Text`;
- `nome` é uma **variável** usada para fornecer conteúdo ao texto.

Ou seja:
- a **prop** configura o componente;
- a **variável** guarda um valor que será mostrado.

---

### Exemplo 3 — Colocando a URL da imagem em uma variável

```tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let nome = 'IFPR';
    let img = 'https://reactnative.dev/img/tiny_logo.png';

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>

        <Text style={{ color: 'red', fontSize: 25 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300 }}
        />

        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }
}

export default App;
```

#### O que este exemplo ensina?

Agora a URL da imagem foi armazenada em uma variável:

```tsx
let img = 'https://reactnative.dev/img/tiny_logo.png';
```

Depois, essa variável foi usada aqui:

```tsx
source={{ uri: img }}
```

Isso é útil porque deixa o código mais organizado e facilita futuras alterações.  
Se você quiser trocar a imagem, basta alterar o valor da variável `img`.

#### Atenção a um erro comum

Isto está **errado**:

```tsx
source={{ uri: 'img' }}
```

Nesse caso, `'img'` entre aspas é apenas um texto literal, e não a variável.

O correto é:

```tsx
source={{ uri: img }}
```

Sem aspas, pois assim o React Native entende que deve usar o conteúdo armazenado na variável.

---

### Exemplo 4 — Um exemplo real de props em componente criado por você

Até agora, vimos props sendo usadas em componentes prontos do React Native, como `Text` e `Image`.  
Mas também podemos criar nossos próprios componentes e passar props para eles.

```tsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Saudacao extends Component<{ nome: string }> {
  render() {
    return <Text>Olá, {this.props.nome}!</Text>;
  }
}

class App extends Component {
  render() {
    return (
      <View>
        <Saudacao nome="Nelson" />
        <Saudacao nome="Turma de TADS" />
      </View>
    );
  }
}

export default App;
```

#### Explicando

- `Saudacao` é um componente criado por você.
- Ele recebe uma prop chamada `nome`.
- Dentro do componente, o valor é acessado com `this.props.nome`.
- Ao usar:
  - `<Saudacao nome="Nelson" />`
  - `<Saudacao nome="Turma de TADS" />`

  estamos enviando valores diferentes para o mesmo componente.

Isso mostra a principal ideia das props:  
**reaproveitar componentes mudando apenas os dados recebidos**.

---

### Resumo

- **Props** são propriedades passadas para componentes.
- Elas servem para configurar conteúdo, aparência e comportamento.
- `style` e `source` são exemplos de props muito usadas no React Native.
- Variáveis como `nome` e `img` não são props; elas são valores auxiliares do JavaScript.
- Em componentes de classe, `render()` é o método responsável por montar a interface.
- Em componentes criados por você, as props podem ser acessadas com `this.props`.

