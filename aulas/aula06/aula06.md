# Aula 06 — Flexbox e alinhamentos no React Native

## 1. Introdução

Ao construir interfaces em React Native, não basta apenas definir cores, textos e tamanhos. Também é necessário controlar **como os elementos serão organizados na tela**.

Em muitos casos, queremos colocar componentes:

- um abaixo do outro;
- lado a lado;
- centralizados;
- alinhados no início ou no fim da tela;
- distribuídos com espaços iguais entre eles.

Para isso, o React Native utiliza o sistema de layout baseado em **Flexbox**.

O Flexbox permite organizar os componentes de forma flexível e proporcional, sendo um dos conceitos mais importantes para o desenvolvimento de interfaces mobile.

Nesta aula, vamos estudar especialmente:

- o comportamento padrão dos elementos em React Native;
- a propriedade `flexDirection`;
- a propriedade `justifyContent`;
- a propriedade `alignItems`.

---

## 2. O que é Flexbox?

Flexbox é um modelo de layout usado para organizar elementos dentro de um contêiner.

No React Native, esse modelo é amplamente utilizado para controlar:

- a direção dos elementos;
- o alinhamento horizontal;
- o alinhamento vertical;
- a distribuição de espaço entre os componentes.

### Ideia principal

Em vez de posicionar manualmente cada elemento na tela, o Flexbox permite definir regras de organização, e o React Native cuida do posicionamento.

---

## 3. Comportamento padrão do React Native

Por padrão, quando colocamos vários componentes `View` dentro de um contêiner `View`, eles são organizados em **coluna**.

Ou seja, um elemento aparece **abaixo do outro**.

Isso significa que, mesmo sem escrever nenhuma configuração de direção, o React Native trabalha com:

```tsx
flexDirection: 'column'
```

como comportamento padrão.

---

## 4. O que é `flexDirection`?

A propriedade `flexDirection` define a direção em que os elementos filhos serão organizados dentro do contêiner.

### Principais valores

- `column` → organiza os elementos de cima para baixo;
- `row` → organiza os elementos da esquerda para a direita.

### Exemplo

```tsx
<View style={{ flex: 1, flexDirection: 'row' }}>
```

Nesse caso, os elementos internos serão exibidos lado a lado.

---

## 5. O que é `justifyContent`?

A propriedade `justifyContent` controla o alinhamento dos elementos no **eixo principal**.

O eixo principal depende da direção definida em `flexDirection`.

### Se `flexDirection: 'column'`

O eixo principal é vertical.

### Se `flexDirection: 'row'`

O eixo principal é horizontal.

### Valores comuns de `justifyContent`

- `flex-start` → coloca os itens no início;
- `center` → centraliza os itens;
- `flex-end` → coloca os itens no final;
- `space-between` → distribui os itens com espaço entre eles;
- `space-around` → distribui os itens com espaço ao redor.

---

## 6. O que é `alignItems`?

A propriedade `alignItems` controla o alinhamento dos elementos no **eixo cruzado**.

Ou seja, ela atua no eixo oposto ao de `justifyContent`.

### Se `flexDirection: 'row'`

- `justifyContent` atua na horizontal;
- `alignItems` atua na vertical.

### Valores comuns de `alignItems`

- `flex-start` → alinha no início;
- `center` → centraliza;
- `flex-end` → alinha no final.

---

## 7. Exemplo 1 — Três blocos no comportamento padrão

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse exemplo exibe três blocos coloridos dentro de um contêiner com `flex: 1`.

Como não foi definido `flexDirection`, o comportamento padrão do React Native é aplicado. Assim, os blocos aparecem em coluna, um abaixo do outro.

### O que este exemplo ensina?

Ele ajuda a perceber que o React Native já possui uma direção padrão de organização dos elementos.

---

## 8. Exemplo 2 — Adicionando mais um bloco

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora existe um quarto bloco, com cor azul.

### O que este exemplo ensina?

Ele reforça que, enquanto `flexDirection` não for alterado, os elementos continuam sendo exibidos em coluna.

---

## 9. Exemplo 3 — Organizando os elementos em linha com `row`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

O contêiner principal agora possui:

```tsx
flexDirection: 'row'
```

### O que isso significa?

Os blocos deixam de ficar um abaixo do outro e passam a ficar lado a lado.

### O que este exemplo ensina?

Esse é o primeiro momento em que vemos a mudança prática da direção dos elementos usando Flexbox.

---

## 10. Exemplo 4 — Centralizando com `justifyContent: 'center'`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Foi adicionada a propriedade:

```tsx
justifyContent: 'center'
```

### O que isso faz?

Como a direção é `row`, o eixo principal é horizontal. Portanto, `justifyContent: 'center'` centraliza os blocos horizontalmente.

### O que este exemplo ensina?

Mostra que `justifyContent` atua no eixo principal e que esse eixo depende de `flexDirection`.

---

## 11. Exemplo 5 — Alinhando os itens no final com `flex-end`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora foi usado:

```tsx
justifyContent: 'flex-end'
```

### O que isso faz?

Os blocos passam a ficar alinhados no final do eixo principal, ou seja, no lado direito da tela quando a direção é `row`.

---

## 12. Exemplo 6 — Alinhando os itens no início com `flex-start`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo reforça?

Aqui os blocos ficam no início do eixo principal. Como a direção é horizontal, isso significa alinhamento à esquerda.

Esse exemplo é importante para comparar com `center` e `flex-end`.

---

## 13. Exemplo 7 — Distribuindo com `space-between`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que isso faz?

O primeiro item vai para o início, o último vai para o final, e os demais são distribuídos no espaço entre eles.

### O que este exemplo ensina?

Mostra uma forma muito comum de distribuir elementos em menus, barras de ações e áreas de navegação.

---

## 14. Exemplo 8 — Distribuindo com `space-around`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que isso faz?

Os elementos recebem espaço ao redor, criando uma distribuição mais equilibrada visualmente.

### Diferença para `space-between`

- `space-between` distribui o espaço apenas entre os itens;
- `space-around` cria espaço também nas laterais externas.

---

## 15. Exemplo 9 — Centralizando verticalmente com `alignItems: 'center'`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Foi adicionada a propriedade:

```tsx
alignItems: 'center'
```

### O que isso faz?

Como a direção está em `row`, o eixo cruzado é vertical. Assim, os itens são centralizados verticalmente.

### O que este exemplo ensina?

Mostra como combinar `justifyContent` e `alignItems` no mesmo layout.

---

## 16. Exemplo 10 — Alinhando verticalmente no final com `alignItems: 'flex-end'`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que isso faz?

Os blocos passam a ficar alinhados na parte inferior do contêiner.

### O que este exemplo ensina?

Ajuda a visualizar claramente o papel do eixo cruzado quando usamos `alignItems`.

---

## 17. Exemplo 11 — Alinhando verticalmente no início com `alignItems: 'flex-start'`

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{ width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'yellow'}}></View>
        <View style={{ width:50, height:50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo reforça?

Com `alignItems: 'flex-start'`, os blocos ficam alinhados no topo do contêiner.

Esse exemplo fecha a comparação entre:

- `alignItems: 'center'`;
- `alignItems: 'flex-end'`;
- `alignItems: 'flex-start'`.

---

## 18. Comparando `justifyContent` e `alignItems`

| Propriedade | Função | Depende de `flexDirection`? |
|---|---|---|
| `justifyContent` | Alinha no eixo principal | Sim |
| `alignItems` | Alinha no eixo cruzado | Sim |

### Quando `flexDirection: 'row'`

- `justifyContent` organiza na horizontal;
- `alignItems` organiza na vertical.

### Quando `flexDirection: 'column'`

- `justifyContent` organiza na vertical;
- `alignItems` organiza na horizontal.

---

## 19. Exemplo integrador

O código abaixo reúne direção em linha, distribuição horizontal e centralização vertical.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ width: 70, height: 70, backgroundColor: 'red' }}></View>
        <View style={{ width: 70, height: 70, backgroundColor: 'green' }}></View>
        <View style={{ width: 70, height: 70, backgroundColor: 'blue' }}></View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo ensina?

Nesse layout:

- os blocos ficam em linha com `flexDirection: 'row'`;
- são distribuídos horizontalmente com `space-between`;
- ficam centralizados verticalmente com `alignItems: 'center'`.

Esse tipo de configuração aparece com frequência em cabeçalhos, barras de navegação e painéis.

---

## 20. Resultado esperado

Ao executar os exemplos desta aula, o estudante deve perceber que:

- o padrão do React Native organiza os elementos em coluna;
- `flexDirection: 'row'` coloca os elementos lado a lado;
- `justifyContent` altera a distribuição no eixo principal;
- `alignItems` altera o alinhamento no eixo cruzado;
- a combinação dessas propriedades permite construir layouts mais organizados e profissionais.

---

## 21. Erros e dúvidas comuns

### 1. Confundir `justifyContent` com `alignItems`

Esse é um dos erros mais comuns. A diferença entre eles depende do eixo principal e do eixo cruzado.

### 2. Esquecer que o padrão é coluna

Muitos estudantes esperam que os itens fiquem em linha automaticamente. No React Native, isso não acontece. O padrão é `column`.

### 3. Tentar alinhar sem usar `flex: 1`

Em muitos casos, o alinhamento visual fica mais claro quando o contêiner ocupa o espaço da tela com `flex: 1`.

### 4. Não observar o efeito da direção

O comportamento de `justifyContent` e `alignItems` muda conforme a direção escolhida. Por isso, sempre é importante analisar primeiro o valor de `flexDirection`.

---

## 22. Conclusão

Flexbox é um dos recursos mais importantes do React Native para a construção de interfaces.

Com ele, conseguimos controlar:

- a direção dos elementos;
- o alinhamento;
- a distribuição do espaço.

As propriedades `flexDirection`, `justifyContent` e `alignItems` formam a base do posicionamento visual em React Native.
