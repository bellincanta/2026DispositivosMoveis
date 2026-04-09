# Aula — Tamanhos dinâmicos e tamanhos fixos no React Native

## 1. Introdução

Ao desenvolver interfaces em React Native, uma das primeiras decisões visuais envolve o tamanho dos elementos exibidos na tela. Em alguns casos, faz sentido definir medidas fixas, como uma imagem de 100 pixels de largura ou um botão com altura determinada. Em outros, é mais interessante permitir que o componente ocupe o espaço disponível de forma dinâmica.

Essas duas abordagens aparecem com frequência no desenvolvimento mobile:

- **tamanhos fixos**, quando usamos valores numéricos definidos, como `width: 50` e `height: 50`;
- **tamanhos dinâmicos**, quando deixamos o React Native distribuir o espaço com propriedades como `flex: 1`.

Compreender essa diferença é fundamental para construir interfaces mais organizadas, proporcionais e adaptáveis a diferentes telas.

---

## 2. O que são tamanhos fixos?

Tamanhos fixos são medidas definidas explicitamente no componente.

### Exemplo

```tsx
style={{ width: 50, height: 50 }}
```

Nesse caso:

- `width: 50` define a largura como 50 unidades;
- `height: 50` define a altura como 50 unidades.

Em React Native, esses valores são números e representam unidades usadas pelo sistema de layout.

### Quando usar tamanhos fixos?

Tamanhos fixos costumam ser úteis quando:

- queremos exibir um bloco pequeno com tamanho controlado;
- desejamos manter proporções exatas em um exemplo didático;
- precisamos de um elemento com dimensão previsível;
- estamos montando uma interface inicial para entender posicionamento e ocupação de espaço.

### Limitação dos tamanhos fixos

Embora sejam simples, tamanhos fixos nem sempre se adaptam bem a diferentes tamanhos de tela. Um elemento que parece adequado em um dispositivo pode ficar pequeno ou grande demais em outro.

---

## 3. O que são tamanhos dinâmicos?

Tamanhos dinâmicos permitem que o componente cresça ou diminua conforme o espaço disponível na tela.

No React Native, isso normalmente é feito com a propriedade `flex`.

### Exemplo

```tsx
style={{ flex: 1 }}
```

Quando usamos `flex: 1`, estamos dizendo que o componente deve ocupar uma porção do espaço disponível dentro do contêiner pai.

### Ideia principal

Enquanto `width` e `height` definem medidas fixas, `flex` trabalha com **distribuição proporcional de espaço**.

---

## 4. Entendendo `flex: 1`

A propriedade `flex` é uma das mais importantes do layout no React Native.

### Exemplo simples

```tsx
<View style={{ flex: 1 }}>
```

Isso significa que o componente tentará ocupar o espaço livre disponível dentro do componente pai.

### Interpretação prática

- `flex: 1` → ocupa 1 parte do espaço disponível;
- `flex: 2` → ocupa 2 partes do espaço disponível;
- `flex: 3` → ocupa 3 partes do espaço disponível.

Ou seja, o valor não representa pixels. Ele representa uma **proporção**.

### Exemplo proporcional

Se três blocos estiverem assim:

```tsx
<View style={{ flex: 1 }} />
<View style={{ flex: 1 }} />
<View style={{ flex: 2 }} />
```

então o espaço será dividido em 4 partes:

- o primeiro bloco ocupa 1 parte;
- o segundo bloco ocupa 1 parte;
- o terceiro bloco ocupa 2 partes.

---

## 5. Layout vertical por padrão

No React Native, quando usamos vários componentes `View` dentro de outro `View`, o comportamento padrão é organizar esses elementos em coluna, ou seja, de cima para baixo.

Por isso, nos exemplos desta aula, os blocos coloridos aparecem um abaixo do outro.

> Em outras palavras, o React Native trabalha com `flexDirection: 'column'` por padrão.

---

## 6. Exemplo 1 — Um bloco com tamanho fixo

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'red', height: 50, width: 50 }}></View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo mostra?

Esse primeiro exemplo apresenta um `View` interno com:

- cor de fundo vermelha;
- largura fixa de `50`;
- altura fixa de `50`.

Ou seja, trata-se de um quadrado vermelho com tamanho definido manualmente.

### Explicando o código

- `import React, { Component } from 'react';`  
  Importa o React e a classe `Component`.

- `import { Text, View } from 'react-native';`  
  Importa o componente `View`. O `Text` foi importado, mas não está sendo usado neste exemplo.

- `class App extends Component {`  
  Cria o componente principal da aplicação.

- `render() {`  
  Método responsável por retornar a interface.

- `<View>`  
  Contêiner principal.

- `<View style={{ backgroundColor: 'red', height: 50, width: 50 }}></View>`  
  Cria um bloco vermelho com altura e largura fixas.

### Ideia importante

Aqui ainda não há uso de `flex`. O tamanho do elemento depende exclusivamente dos valores numéricos informados.

---

## 7. Exemplo 2 — Adicionando cor de fundo ao contêiner pai

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora o `View` pai recebeu:

```tsx
style={{ backgroundColor: 'black' }}
```

Isso faz com que o contêiner principal tenha fundo preto.

### O que este exemplo ensina?

Esse exemplo ajuda a perceber que existe uma diferença entre:

- o **contêiner pai**, que agrupa os elementos;
- o **contêiner filho**, que neste caso é o bloco vermelho.

Mesmo com o fundo preto no pai, o bloco vermelho continua com tamanho fixo de `50 x 50`.

### Observação importante

Como o `View` pai ainda não possui `flex: 1`, ele não necessariamente ocupa toda a tela. Ele ocupará apenas o espaço necessário para seus conteúdos.

---

## 8. Exemplo 3 — Inserindo textos no contêiner

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
        <Text>Olá mundo!</Text>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora, além do bloco vermelho, o contêiner também possui dois componentes `Text`.

### O que este exemplo ensina?

Este exemplo mostra que um `View` pode agrupar vários elementos, como:

- outros `View`;
- textos;
- imagens;
- botões.

Também mostra a ordem de renderização: primeiro o quadrado vermelho, depois os dois textos.

### Atenção visual

Como o fundo do contêiner está preto e os textos não receberam estilo de cor, dependendo do ambiente os textos podem ficar com pouco contraste visual. Isso pode ser útil para discutir a importância da estilização e da legibilidade.

---

## 9. Exemplo 4 — Fazendo o contêiner principal ocupar a tela

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
        <Text>Olá mundo!</Text>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

export default App;
```

### O que mudou?

O contêiner principal agora possui:

```tsx
flex: 1
```

### O que isso significa?

Isso faz com que o `View` principal tente ocupar todo o espaço disponível da tela.

### O que este exemplo ensina?

Agora o fundo preto tende a ocupar toda a área disponível, e não apenas a área correspondente ao conteúdo interno.

Esse é um ponto didático muito importante, porque muitos estudantes percebem aqui, pela primeira vez, a função prática do `flex: 1`.

### Resumo da diferença entre o exemplo 3 e o exemplo 4

- no exemplo 3, o contêiner pai ocupa apenas o espaço necessário;
- no exemplo 4, o contêiner pai passa a ocupar o espaço disponível da tela.

---

## 10. Exemplo 5 — Dividindo a tela em partes iguais

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black' }}>
        <View style={{ flex:1,backgroundColor: 'red'}}>
          <Text>Texto 1</Text>
          <Text>Texto 2</Text>
          <Text>Texto 3</Text>
          <Text>Texto 4</Text>
          <Text>Texto 5</Text>
          <Text>Texto 6</Text>
          <Text>Texto 7</Text>

        </View>
        <View style={{ flex:1, backgroundColor: 'green'}}></View>
        <View style={{ flex:1, backgroundColor: 'yellow'}}></View>
        
        
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora existem três blocos internos, todos com:

```tsx
flex: 1
```

### O que isso significa?

A tela será dividida em três partes proporcionais iguais.

- o primeiro bloco vermelho ocupa 1 parte;
- o segundo bloco verde ocupa 1 parte;
- o terceiro bloco amarelo ocupa 1 parte.

Como todos têm o mesmo valor de `flex`, a divisão tende a ser equilibrada.

### O que este exemplo ensina?

Esse exemplo mostra claramente como o `flex` pode ser usado para criar layouts proporcionais sem definir altura manualmente para cada área.

Além disso, o primeiro bloco vermelho contém vários textos, mostrando que o conteúdo fica dentro da área que lhe foi reservada.

### Ponto didático importante

Mesmo com muitos textos no bloco vermelho, o valor `flex: 1` continua representando a proporção de espaço reservada para ele em relação aos outros blocos.

---

## 11. Exemplo 6 — Dividindo a tela com proporções diferentes

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black' }}>
        <View style={{ flex:1,backgroundColor: 'red'}}></View>
        <View style={{ flex:1, backgroundColor: 'green'}}></View>
        <View style={{ flex:2, backgroundColor: 'yellow'}}></View>
        
        
      </View>
    );
  }
}

export default App;
```

### O que mudou?

Agora os blocos internos têm estas proporções:

- vermelho: `flex: 1`
- verde: `flex: 1`
- amarelo: `flex: 2`

### Como o espaço é distribuído?

A soma total é:

```tsx
1 + 1 + 2 = 4
```

Portanto:

- o bloco vermelho ocupa 1 de 4 partes;
- o bloco verde ocupa 1 de 4 partes;
- o bloco amarelo ocupa 2 de 4 partes.

### O que este exemplo ensina?

Esse exemplo é importante porque mostra que o `flex` não serve apenas para preencher espaço, mas também para controlar proporções entre áreas diferentes da tela.

---

## 12. Comparando tamanhos fixos e tamanhos dinâmicos

| Tamanhos fixos | Tamanhos dinâmicos |
|---|---|
| Usam valores como `width: 50` e `height: 50` | Usam valores como `flex: 1` e `flex: 2` |
| Mais previsíveis em exemplos simples | Mais adaptáveis a diferentes telas |
| Úteis para elementos específicos | Úteis para distribuir espaço em layouts |
| Podem limitar a responsividade | Favorecem interfaces proporcionais |

---

## 13. Exemplo integrador

O código abaixo mistura tamanho fixo com distribuição dinâmica de espaço.

**Arquivo:** `App.tsx`

```tsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: 'lightgray', justifyContent: 'center' }}>
          <Text>Topo com altura fixa</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center' }}>
          <Text>Área central com tamanho dinâmico</Text>
        </View>

        <View style={{ height: 60, backgroundColor: 'lightgreen', justifyContent: 'center' }}>
          <Text>Rodapé com altura fixa</Text>
        </View>
      </View>
    );
  }
}

export default App;
```

### O que este exemplo ensina?

Nesse caso:

- o topo possui altura fixa de `80`;
- o rodapé possui altura fixa de `60`;
- a área central ocupa dinamicamente o espaço restante com `flex: 1`.

Esse tipo de estrutura é comum em aplicações com:

- cabeçalho;
- conteúdo principal;
- rodapé.

---

## 14. Resultado esperado

Ao executar os exemplos da aula, o estudante deve perceber que:

- um componente com `width` e `height` definidos mantém tamanho fixo;
- um componente com `flex` passa a ocupar espaço de forma proporcional;
- `flex: 1` no contêiner principal faz a tela ser preenchida;
- vários blocos com `flex` podem dividir o espaço igualmente ou em proporções diferentes.

---

## 15. Erros e dúvidas comuns

### 1. `flex: 1` não significa 1 pixel

Esse é um erro comum. O valor `1` em `flex: 1` representa uma proporção, e não um tamanho fixo em pixels.

### 2. O fundo do `View` não ocupa a tela toda

Isso geralmente acontece quando o contêiner principal não recebeu `flex: 1`.

### 3. Misturar medidas fixas e dinâmicas sem planejamento

Isso pode gerar interfaces desorganizadas. É importante pensar em quais áreas precisam ter tamanho exato e quais devem apenas se adaptar ao espaço disponível.

---

## 16. Conclusão

Tamanhos fixos e tamanhos dinâmicos são conceitos fundamentais para a construção de interfaces em React Native.

Os **tamanhos fixos** ajudam quando queremos controle direto sobre a largura e a altura de um elemento. Já os **tamanhos dinâmicos**, especialmente com `flex`, permitem construir telas mais proporcionais e adaptáveis.

Nos exemplos analisados, foi possível observar uma evolução importante:

- primeiro, um elemento com tamanho fixo;
- depois, o uso de contêineres com cor de fundo;
- em seguida, a ocupação total da tela com `flex: 1`;
- por fim, a divisão proporcional do espaço entre várias áreas.

