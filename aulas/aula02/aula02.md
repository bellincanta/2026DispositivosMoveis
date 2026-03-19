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

