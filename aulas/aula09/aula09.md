# Aula 09 — Slider e Switch no React Native

## 1. Introdução

Nas aulas anteriores, vimos como receber dados digitados pelo usuário com o `TextInput` e como disparar ações com o `Button`. No entanto, nem toda interação acontece por meio de texto digitado ou de cliques em botões.

Em muitas telas, o usuário precisa **escolher um valor dentro de um intervalo** ou simplesmente **ligar e desligar uma opção**. Pense em uma tela de configurações: o volume é ajustado deslizando um controle, e o modo escuro é ativado com uma chave que alterna entre ligado e desligado.

Para esse tipo de situação, o React Native oferece dois componentes muito úteis:

- `Slider`, usado para selecionar um valor numérico dentro de um intervalo;
- `Switch`, usado para alternar entre dois estados (ligado/desligado, ativo/inativo).

Nesta aula, vamos estudar como exibir esses componentes, como armazenar seus valores no `state` e como usar essas informações para atualizar a interface.

---

## 2. O que é o componente `Slider`?

O `Slider` é um controle deslizante. Ele permite que o usuário escolha um valor arrastando um marcador ao longo de uma barra.

Pense em uma régua com um cursor: quanto mais o usuário arrasta para a direita, maior é o valor; quanto mais arrasta para a esquerda, menor é o valor.

### Exemplos de uso

- ajustar o volume de um som;
- controlar o brilho da tela;
- escolher uma quantidade;
- definir uma nota de 0 a 100;
- selecionar um nível de zoom.

### Ideia principal

O `Slider` trabalha com um valor **numérico** que varia entre um mínimo e um máximo definidos por você.

---

## 3. O que é o componente `Switch`?

O `Switch` é uma chave de duas posições. Ele representa apenas dois estados possíveis: ligado ou desligado.

Pense em um interruptor de luz: ele está aceso ou apagado, não existe um meio-termo.

### Exemplos de uso

- ativar ou desativar o modo escuro;
- ligar ou desligar as notificações;
- aceitar ou recusar uma opção;
- mostrar ou esconder uma informação;
- habilitar ou desabilitar um recurso.

### Ideia principal

O `Switch` trabalha com um valor **booleano** (`true` ou `false`).

---

## 4. Uma diferença importante: instalação

Antes de usar os componentes, é importante entender uma diferença prática entre eles.

- O `Switch` **já vem incluído** no React Native. Basta importá-lo de `react-native`, como fazemos com `View`, `Text` e `Button`.
- O `Slider` **não vem incluído** por padrão. Ele faz parte de um pacote separado, mantido pela comunidade, que precisa ser instalado antes do uso.

> Em resumo: o `Switch` está pronto para uso, mas o `Slider` exige uma instalação extra.

---

## 5. Instalando o `Slider`

Para usar o `Slider`, primeiro instale o pacote da comunidade. No terminal, dentro da pasta do projeto, execute:

```bash
npm install @react-native-community/slider --save
```

> Se o seu projeto foi criado com Expo (como nas aulas anteriores), você também pode usar o comando equivalente abaixo, que garante a versão compatível com o Expo:
>
> ```bash
> npx expo install @react-native-community/slider
> ```

Depois de instalado, o componente é importado assim:

```tsx
import Slider from '@react-native-community/slider';
```

> Atenção: diferente dos outros componentes, o `Slider` é importado **sem chaves** (`{ }`), porque ele é a exportação principal (padrão) do pacote.

---

## 6. Relação com o `state`

Tanto o `Slider` quanto o `Switch` precisam **guardar** o valor escolhido pelo usuário em algum lugar. Esse lugar é o `state`.

Em componentes de classe, criamos o `state` no construtor e o atualizamos com `setState`. O fluxo é sempre parecido:

1. o usuário interage com o componente (arrasta o `Slider` ou toca no `Switch`);
2. um evento é disparado (`onValueChange`);
3. o novo valor é salvo no `state` com `setState`;
4. a tela é atualizada automaticamente com o novo valor.

Nesta aula, vamos usar dois tipos de `state`:

- um `state` **numérico** para o `Slider`;
- um `state` **booleano** para o `Switch`.

---

## 7. Exemplo 1 — Exibindo apenas o `Slider`

Neste primeiro exemplo, vamos apenas mostrar o `Slider` na tela, sem guardar nenhum valor ainda.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
```

### O que este exemplo mostra?

Esse exemplo apresenta apenas o controle deslizante na tela.

### Explicando o código

- `import Slider from '@react-native-community/slider';`
  Importa o componente `Slider` do pacote instalado.

- `<Slider minimumValue={0} maximumValue={100} />`
  Cria o controle deslizante.

- `minimumValue={0}`
  Define o menor valor possível.

- `maximumValue={100}`
  Define o maior valor possível.

### O que este exemplo ensina?

Antes de capturar qualquer valor, precisamos primeiro exibir corretamente o componente. Aqui o `Slider` já funciona visualmente, mas o valor escolhido ainda não está sendo guardado nem mostrado.

---

## 8. Exemplo 2 — Guardando o valor do `Slider` no `state`

Agora vamos armazenar o valor escolhido e exibi-lo na tela.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

type AppState = {
  valor: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={this.state.valor}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
        />

        <Text style={styles.texto}>{this.state.valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
```

### O que mudou?

Agora o valor escolhido no `Slider` é guardado no `state` e exibido em um `Text`.

### Explicando o que há de novo

- `type AppState = { valor: number; };`
  Cria um tipo para o estado, indicando que `valor` é um número.

- `class App extends Component<{}, AppState>`
  Informa que o componente não recebe props e possui um state do tipo `AppState`.

- `this.state = { valor: 0 };`
  Define o valor inicial como `0`.

- `value={this.state.valor}`
  Faz o `Slider` mostrar o valor atual guardado no state.

- `onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}`
  Toda vez que o usuário arrasta o controle, o novo valor é salvo no state.

- `{this.state.valor.toFixed(2)}`
  Exibe o valor com duas casas decimais.

### Por que usar `toFixed(2)`?

O `Slider` retorna números com muitas casas decimais (por exemplo, `43.27819824`). O método `toFixed(2)` arredonda o número para duas casas decimais, deixando a exibição mais limpa: `43.28`.

### O que este exemplo ensina?

Aqui aparece o conceito central da aula: a interação do usuário altera o `state`, e a mudança do `state` atualiza a tela automaticamente.

---

## 9. Exemplo 3 — Personalizando as cores do `Slider`

Agora vamos deixar o `Slider` mais agradável visualmente, alterando as cores da barra.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

type AppState = {
  valor: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={this.state.valor}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
        />

        <Text style={styles.texto}>{this.state.valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
```

### O que mudou?

Foram adicionadas duas novas props ao `Slider`:

```tsx
minimumTrackTintColor="blue"
maximumTrackTintColor="red"
```

### O que essas props fazem?

- `minimumTrackTintColor`
  Define a cor da parte **já percorrida** da barra (à esquerda do marcador).

- `maximumTrackTintColor`
  Define a cor da parte **ainda não percorrida** da barra (à direita do marcador).

### O que este exemplo ensina?

Mostra que o `Slider`, assim como outros componentes, aceita props de personalização visual. À medida que o usuário arrasta o marcador, a divisão entre as duas cores muda, dando um retorno visual do valor escolhido.

---

## 10. Exemplo 4 — Usando o valor do `Slider` para mudar a interface

Até agora o valor do `Slider` apenas aparecia como número. Neste exemplo, vamos usar esse valor para **alterar a aparência** de outro elemento da tela.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

type AppState = {
  valor: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      valor: 20,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={10}
          maximumValue={80}
          value={this.state.valor}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          minimumTrackTintColor="green"
          maximumTrackTintColor="gray"
        />

        <Text style={{ textAlign: 'center', fontSize: this.state.valor }}>
          Texto de exemplo
        </Text>

        <Text style={styles.info}>Tamanho da fonte: {this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  info: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
```

### O que mudou?

O valor do `Slider` agora é usado dentro do estilo de um texto:

```tsx
<Text style={{ textAlign: 'center', fontSize: this.state.valor }}>
  Texto de exemplo
</Text>
```

Além disso, o intervalo foi ajustado para `minimumValue={10}` e `maximumValue={80}`, valores adequados para o tamanho de uma fonte.

### O que este exemplo ensina?

Mostra que o valor guardado no `state` não serve apenas para ser exibido como número: ele pode controlar diretamente a aparência da interface. Aqui, ao arrastar o `Slider`, o texto cresce ou diminui em tempo real.

---

## 11. Exemplo 5 — `Switch` básico (Ativo / Inativo)

Agora vamos para o `Switch`. Lembrando que ele já vem no React Native e não precisa de instalação.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

type AppState = {
  status: boolean;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
        />

        <Text style={styles.texto}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
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
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
```

### O que este exemplo mostra?

Uma chave que o usuário pode ligar e desligar, com um texto que muda conforme o estado.

### Explicando o código

- `import { ..., Switch } from 'react-native';`
  Importa o `Switch` diretamente do React Native, sem instalação extra.

- `type AppState = { status: boolean; };`
  Cria um tipo para o estado, indicando que `status` é um booleano.

- `this.state = { status: false };`
  Define o valor inicial como `false` (desligado).

- `value={this.state.status}`
  Faz o `Switch` refletir o valor atual do state.

- `onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}`
  Toda vez que o usuário toca no `Switch`, o novo valor (true ou false) é salvo no state.

- `{this.state.status ? 'Ativo' : 'Inativo'}`
  Exibe `Ativo` quando o status for `true` e `Inativo` quando for `false`.

### O que este exemplo ensina?

Mostra como um valor booleano pode controlar o texto exibido na tela. É o mesmo conceito de texto condicional já visto em aulas anteriores, agora controlado por um `Switch`.

---

## 12. Exemplo 6 — Mudando a cor do `Switch` conforme o estado

Agora vamos personalizar a cor do marcador do `Switch` de acordo com o valor atual.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

type AppState = {
  status: boolean;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
          thumbColor={this.state.status ? 'green' : 'black'}
        />

        <Text style={styles.texto}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
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
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default App;
```

### O que mudou?

Foi adicionada a prop `thumbColor`, que define a cor do marcador (a "bolinha") do `Switch`:

```tsx
thumbColor={this.state.status ? 'green' : 'black'}
```

### O que essa lógica faz?

- se `status` for `true`, o marcador fica verde;
- se `status` for `false`, o marcador fica preto.

### O que este exemplo ensina?

Reforça que o `state` pode controlar não apenas o texto, mas também a aparência do próprio componente. A cor do marcador passa a dar um retorno visual imediato sobre o estado atual.

---

## 13. Comparando `Slider` e `Switch`

| Recurso | `Slider` | `Switch` |
|---|---|---|
| Tipo de valor | Número | Booleano (`true`/`false`) |
| Para que serve | Escolher um valor em um intervalo | Ligar/desligar uma opção |
| Precisa instalar? | Sim (`@react-native-community/slider`) | Não (já vem no React Native) |
| Como é importado | `import Slider from '...'` (sem chaves) | `import { Switch } from 'react-native'` |
| Evento principal | `onValueChange` | `onValueChange` |
| Exemplo de uso | Volume, brilho, quantidade | Modo escuro, notificações |

### Ponto em comum

Apesar das diferenças, os dois componentes seguem o mesmo padrão de funcionamento: ambos têm a prop `value` (para mostrar o valor atual) e a prop `onValueChange` (para reagir à interação do usuário e atualizar o `state`).

---

## 14. Exemplo integrador

O exemplo abaixo reúne os principais conceitos da aula: um `Switch` para ligar ou desligar um recurso e um `Slider` para ajustar uma intensidade, com a tela respondendo aos dois.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

type AppState = {
  ligado: boolean;
  intensidade: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ligado: false,
      intensidade: 50,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Painel de controle</Text>

        <View style={styles.linha}>
          <Text style={styles.label}>Sistema</Text>
          <Switch
            value={this.state.ligado}
            onValueChange={(valorSwitch) => this.setState({ ligado: valorSwitch })}
            thumbColor={this.state.ligado ? 'green' : 'gray'}
          />
        </View>

        <Text style={styles.status}>
          {this.state.ligado ? 'Sistema ligado' : 'Sistema desligado'}
        </Text>

        <Text style={styles.label}>Intensidade</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={this.state.intensidade}
          onValueChange={(valor) => this.setState({ intensidade: valor })}
          minimumTrackTintColor="#1e88e5"
          maximumTrackTintColor="#cccccc"
        />

        <Text style={styles.valor}>
          Intensidade atual: {this.state.intensidade.toFixed(0)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  valor: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default App;
```

### O que este exemplo ensina?

Esse exemplo apresenta uma estrutura mais próxima de uma tela real de configurações. Nele temos:

- um `state` com dois campos: `ligado` (booleano) e `intensidade` (numérico);
- um `Switch` que liga e desliga o sistema;
- um texto que muda conforme o `Switch`;
- um `Slider` que ajusta a intensidade;
- um texto que mostra o valor atual da intensidade.

Ele também reaproveita conceitos de aulas anteriores, como `flexDirection: 'row'` e `justifyContent: 'space-between'` para organizar o `Switch` ao lado do rótulo.

---

## 15. Resultado esperado

Ao executar os exemplos desta aula, o estudante deve perceber que:

- o `Slider` permite escolher um valor arrastando um marcador;
- o valor do `Slider` pode ser guardado no `state` e exibido na tela;
- `toFixed` ajuda a controlar a quantidade de casas decimais;
- as cores do `Slider` podem ser personalizadas com `minimumTrackTintColor` e `maximumTrackTintColor`;
- o `Switch` alterna entre dois estados (true/false);
- o valor do `Switch` pode controlar textos e aparências na tela;
- os dois componentes podem trabalhar juntos em uma mesma interface.

---

## 16. Conceitos principais da aula

### `Slider`

Componente que permite escolher um valor numérico dentro de um intervalo.

### `Switch`

Componente que alterna entre dois estados (ligado/desligado).

### `minimumValue` e `maximumValue`

Props do `Slider` que definem o menor e o maior valor possíveis.

### `value`

Prop que informa o valor atual do componente, normalmente vindo do `state`.

### `onValueChange`

Evento disparado quando o usuário altera o valor do `Slider` ou do `Switch`.

### `minimumTrackTintColor` e `maximumTrackTintColor`

Props do `Slider` que controlam as cores da barra antes e depois do marcador.

### `thumbColor`

Prop do `Switch` que define a cor do marcador.

### `toFixed`

Método que controla quantas casas decimais um número terá ao ser exibido.

### `state`

Estrutura usada em componentes de classe para armazenar valores que podem mudar durante o uso.

---

## 17. Erros e dúvidas comuns

### 1. Esquecer de instalar o `Slider`

O `Slider` não vem no React Native por padrão. Sem a instalação do pacote, o `import` apresentará erro.

Comando de instalação:

```bash
npm install @react-native-community/slider --save
```

### 2. Importar o `Slider` com chaves

O `Slider` é a exportação padrão do pacote, então deve ser importado **sem** chaves.

Errado:

```tsx
import { Slider } from '@react-native-community/slider';
```

Correto:

```tsx
import Slider from '@react-native-community/slider';
```

### 3. Tentar instalar o `Switch`

O `Switch` já faz parte do React Native. Não é necessário instalar nada; basta importá-lo de `react-native`.

### 4. Alterar o valor diretamente, sem `setState`

Em componentes de classe, o estado não deve ser alterado diretamente.

Errado:

```tsx
this.state.valor = 50;
```

Correto:

```tsx
this.setState({ valor: 50 });
```

### 5. Esquecer a prop `value`

Sem a prop `value`, o componente pode não refletir corretamente o valor guardado no `state`.

### 6. Confundir o tipo do `state`

O `Slider` trabalha com `number` e o `Switch` trabalha com `boolean`. Declarar o tipo errado no `AppState` gera erro no TypeScript.

### 7. Exibir o valor do `Slider` sem `toFixed`

Sem `toFixed`, o número pode aparecer com muitas casas decimais, prejudicando a leitura.

---

## 18. Sugestão de condução em sala

Uma forma interessante de conduzir a aula é evoluir o código gradualmente com a turma:

1. instalar o pacote do `Slider` e exibir apenas o componente;
2. adicionar o `state` numérico e mostrar o valor com `toFixed`;
3. personalizar as cores da barra do `Slider`;
4. usar o valor do `Slider` para alterar a aparência de um texto;
5. apresentar o `Switch` básico com texto Ativo/Inativo;
6. personalizar a cor do `Switch` conforme o estado;
7. finalizar com o exemplo integrador, unindo `Slider` e `Switch`.

Essa progressão ajuda os estudantes a perceberem que cada novo recurso resolve uma necessidade específica.

---

## 19. Conclusão

O `Slider` e o `Switch` ampliam as formas de interação em aplicações React Native. Enquanto o `TextInput` recebe textos e o `Button` dispara ações, esses dois componentes permitem que o usuário escolha valores e alterne opções de maneira simples e visual.

Ao longo dos exemplos, foi possível observar uma evolução importante:

- primeiro, a exibição dos componentes;
- depois, o armazenamento dos valores no `state`;
- em seguida, a personalização visual;
- por fim, o uso conjunto dos dois componentes em uma tela de configurações.

Apesar das diferenças, ambos seguem o mesmo padrão: a prop `value` mostra o estado atual e o evento `onValueChange` atualiza o `state`, fazendo a interface responder automaticamente às escolhas do usuário. Esse padrão é a base de telas de configurações, ajustes e preferências em praticamente qualquer aplicativo móvel.
