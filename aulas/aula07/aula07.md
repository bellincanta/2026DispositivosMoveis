# Aula 07 — Recebendo dados e trabalhando com botões no React Native

## 1. Introdução

Em aplicações React Native, muitas interfaces dependem da interação direta do usuário. Em vez de apenas exibir textos e componentes estáticos, a tela pode receber informações digitadas, armazenar esses valores e reagir a ações como o clique em um botão.

Dois elementos aparecem com muita frequência nesse tipo de situação:

- `TextInput`, usado para receber dados digitados;
- `Button`, usado para disparar uma ação.

Nesta aula, vamos estudar como capturar textos digitados pelo usuário, armazenar esses dados no `state` e utilizar botões para processar essas informações.

---

## 2. O que significa receber dados?

Receber dados significa permitir que o usuário informe alguma informação para a aplicação.

Exemplos comuns:

- digitar um nome;
- informar um e-mail;
- preencher um campo de busca;
- escrever uma mensagem;
- inserir uma senha.

No React Native, isso é feito principalmente com o componente `TextInput`.

---

## 3. O que é `TextInput`?

`TextInput` é o componente usado para entrada de texto no React Native.

Com ele, o usuário pode digitar valores na tela, e o aplicativo pode capturar essas informações para exibir, validar ou processar.

### Exemplo simples

```tsx
<TextInput style={styles.input} />
```

Nesse caso, o campo será exibido na tela com o estilo informado.

---

## 4. O que é `state` nesse contexto?

Quando o usuário digita em um `TextInput`, geralmente queremos armazenar esse valor dentro do componente.

Em componentes de classe, isso é feito com `state`.

O `state` funciona como uma memória interna do componente. Ele guarda informações que podem mudar durante a execução da aplicação.

Nesta aula, vamos usá-lo para armazenar:

- o nome digitado;
- o valor atual do campo de entrada;
- a mensagem exibida ao usuário.

---

## 5. O que é um botão no React Native?

O componente `Button` representa um botão pronto para uso.

Ele é muito usado para executar ações como:

- enviar dados;
- confirmar uma operação;
- limpar campos;
- entrar em um sistema;
- mostrar mensagens na tela.

### Exemplo simples

```tsx
<Button title="Entrar" onPress={this.entrar} />
```

Nesse caso:

- `title` define o texto do botão;
- `onPress` define a função que será executada ao clicar no botão.

---

## 6. Relação entre entrada de dados e botões

Em muitos aplicativos, o fluxo básico funciona assim:

1. o usuário digita uma informação em um `TextInput`;
2. essa informação é armazenada no `state`;
3. ao clicar em um botão, uma ação é executada;
4. a tela é atualizada com base nesse valor.

Essa é a base de formulários simples, telas de login, cadastros e muitos outros recursos.

---

## 7. Exemplo 1 — Exibindo apenas o campo de texto

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,        
  }
});

export default App;
```

### O que este exemplo mostra?

Esse primeiro exemplo apresenta apenas um campo de texto na tela.

### Explicando o código

- `import { Component } from 'react';`  
  Importa a classe `Component`, usada para criar o componente principal.

- `import { StyleSheet, Text, View, TextInput } from 'react-native';`  
  Importa os componentes necessários:
  - `View` para organização da tela;
  - `TextInput` para entrada de dados;
  - `StyleSheet` para organizar os estilos.

- `class App extends Component`  
  Cria o componente principal da aplicação.

- `<View style={styles.container}>`  
  Cria a área principal da tela.

- `<TextInput style={styles.input} />`  
  Exibe um campo de texto estilizado.

- `height: 45`  
  Define a altura do campo.

- `borderWidth: 1`  
  Define a espessura da borda.

- `borderColor: 'black'`  
  Define a cor da borda.

- `margin: 10`  
  Adiciona espaçamento externo.

- `fontSize: 20`  
  Define o tamanho do texto digitado.

- `padding: 10`  
  Adiciona espaço interno no campo.

### O que este exemplo ensina?

Antes de capturar qualquer dado, precisamos primeiro exibir corretamente o campo de entrada.

---

## 8. Exemplo 2 — Exibindo um valor armazenado no state

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type AppState = {
  nome: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: 'Nelson',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />

        <Text style={styles.texto}>Bem vindo, {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
```

### O que mudou?

Agora o componente possui um `state` com a propriedade `nome`.

### Explicando o que há de novo

- `type AppState = { nome: string; };`  
  Cria um tipo para o estado do componente.

- `class App extends Component<{}, AppState>`  
  Informa que o componente não recebe props e possui um state tipado com `AppState`.

- `constructor(props: {})`  
  Método usado para inicializar o componente.

- `super(props);`  
  Chama o construtor da classe pai.

- `this.state = { nome: 'Nelson' };`  
  Define o valor inicial do state.

- `<Text style={styles.texto}>Bem vindo, {this.state.nome}</Text>`  
  Exibe o valor armazenado no state.

### O que este exemplo ensina?

Aqui o valor ainda não está sendo digitado pelo usuário, mas já mostra a ideia de que a tela pode exibir dados vindos do `state`.

---

## 9. Exemplo 3 — Atualizando o state com o texto digitado

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type AppState = {
  nome: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: 'Nelson',
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto: string) {
    this.setState({ nome: texto });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome."
          underlineColorAndroid={"transparent"}
          onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}>Bem vindo, {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
```

### O que mudou?

Agora o que o usuário digita pode alterar o valor armazenado no `state`.

### Explicando o que há de novo

- `this.pegaNome = this.pegaNome.bind(this);`  
  Faz a ligação do método com o contexto da classe.

- `pegaNome(texto: string)`  
  Cria um método que recebe o texto digitado.

- `this.setState({ nome: texto });`  
  Atualiza o state com o valor informado.

- `placeholder="Digite seu nome."`  
  Mostra um texto de apoio dentro do campo.

- `underlineColorAndroid={"transparent"}`  
  Remove o sublinhado padrão em alguns casos no Android.

- `onChangeText={this.pegaNome}`  
  Executa o método sempre que o texto do campo é alterado.

### O que este exemplo ensina?

Esse é o primeiro exemplo em que a aplicação realmente recebe dados do usuário e atualiza a tela dinamicamente.

À medida que o usuário digita, a mensagem exibida também muda.

---

## 10. Exemplo 4 — Mostrando mensagem apenas quando houver texto

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type AppState = {
  nome: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto: string) {
    if (texto.length > 0){
      this.setState({ nome: 'Bem vindo: ' + texto });
    }  else {
      this.setState({ nome: '' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome."
          underlineColorAndroid={"transparent"}
          onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}> {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App; 
```

### O que mudou?

Agora existe uma verificação para saber se o usuário digitou algo antes de mostrar a mensagem.

### Explicando a lógica

- `nome: ''`  
  O state começa vazio.

- `if (texto.length > 0)`  
  Verifica se existe pelo menos um caractere digitado.

- `this.setState({ nome: 'Bem vindo: ' + texto });`  
  Se houver texto, monta a mensagem completa.

- `this.setState({ nome: '' });`  
  Se o campo estiver vazio, a mensagem também fica vazia.

### O que este exemplo ensina?

Esse exemplo introduz uma ideia muito importante: **não basta receber dados; muitas vezes precisamos tratá-los antes de exibi-los**.

---

## 11. Exemplo 5 — Trabalhando com botão para confirmar a ação

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type AppState = {
  nome: string;
  input: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({ nome: 'Bem vindo: '+ this.state.input });
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome."
          underlineColorAndroid={"transparent"}
          onChangeText={ (texto)=> this.setState({input: texto}) }
        />

        <Button  title='Entrar' onPress={this.entrar}/>

        <Text style={styles.texto}> {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
```

### O que mudou?

Agora o texto digitado não é exibido imediatamente. Primeiro ele é armazenado em `input`, e só depois o botão é usado para confirmar a ação.

### Explicando o que há de novo

- `import { ..., Button } from 'react-native';`  
  Importa o componente `Button`.

- `type AppState = { nome: string; input: string; };`  
  Agora o state possui duas informações:
  - `input`: guarda o que está sendo digitado;
  - `nome`: guarda a mensagem que será exibida.

- `this.state = { nome: '', input: '' };`  
  Inicializa ambos os campos vazios.

- `this.entrar = this.entrar.bind(this);`  
  Faz a ligação do método com a classe.

- `entrar() { this.setState({ nome: 'Bem vindo: '+ this.state.input }); }`  
  Define o que acontece quando o botão for clicado.

- `onChangeText={ (texto)=> this.setState({input: texto}) }`  
  Armazena o texto digitado em `input`.

- `<Button title='Entrar' onPress={this.entrar}/>`  
  Exibe um botão que executa o método `entrar` ao ser pressionado.

### O que este exemplo ensina?

Esse exemplo mostra um padrão muito comum:

- o usuário digita um valor;
- esse valor é guardado em um campo auxiliar;
- o botão confirma a ação;
- a interface é atualizada depois do clique.

---

## 12. Exemplo 6 — Validando o campo antes de continuar

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type AppState = {
  nome: string;
  input: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if(this.state.input === ''){
      alert('Digite seu nome para entrar!');
      return;
    } 
    this.setState({ nome: 'Bem vindo: '+ this.state.input });
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome."
          underlineColorAndroid={"transparent"}
          onChangeText={ (texto)=> this.setState({input: texto}) }
        />

        <Button  title='Entrar' onPress={this.entrar}/>

        <Text style={styles.texto}> {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
```

### O que mudou?

Antes de exibir a mensagem, o código agora verifica se o campo foi preenchido.

### Explicando a lógica

- `if(this.state.input === '')`  
  Verifica se o campo está vazio.

- `alert('Digite seu nome para entrar!');`  
  Exibe uma mensagem de alerta ao usuário.

- `return;`  
  Interrompe a execução do método naquele momento.

- `this.setState({ nome: 'Bem vindo: '+ this.state.input });`  
  Só executa se o campo estiver preenchido.

### O que este exemplo ensina?

Esse exemplo introduz o conceito de **validação**.

Em aplicações reais, raramente basta apenas receber um dado. Normalmente também precisamos verificar se ele é válido antes de continuar.

---

## 13. Comparando os exemplos

| Exemplo | Ideia principal |
|---|---|
| Exemplo 1 | exibe apenas o campo `TextInput` |
| Exemplo 2 | mostra um valor fixo armazenado no `state` |
| Exemplo 3 | atualiza o `state` conforme o usuário digita |
| Exemplo 4 | exibe mensagem apenas quando houver texto |
| Exemplo 5 | usa botão para confirmar a ação |
| Exemplo 6 | valida o campo antes de exibir a mensagem |

---

## 14. Conceitos principais da aula

### `TextInput`

Usado para receber dados digitados pelo usuário.

### `state`

Usado para armazenar informações que podem mudar durante o uso da aplicação.

### `setState`

Usado para atualizar o valor do `state`.

### `onChangeText`

Executa uma ação sempre que o texto do campo é alterado.

### `Button`

Cria um botão para executar uma ação.

### `onPress`

Executa uma função quando o botão é pressionado.

### `alert()`

Exibe uma mensagem de aviso ao usuário.

---

## 15. Exemplo integrador

O exemplo abaixo reúne os principais conceitos trabalhados na aula: campo de entrada, armazenamento no state, botão e validação.

**Arquivo:** `App.tsx`

```tsx
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type AppState = {
  nome: string;
  input: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome para entrar!');
      return;
    }

    this.setState({ nome: 'Bem vindo: ' + this.state.input });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo com entrada de dados</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
});

export default App;
```

### O que este exemplo ensina?

Esse exemplo organiza melhor os elementos na tela e mostra de forma mais clara o fluxo completo:

- o usuário digita;
- o valor vai para o `state`;
- o botão executa a ação;
- o sistema valida o campo;
- a mensagem é exibida na tela.

---

## 16. Resultado esperado

Ao executar os exemplos desta aula, o estudante deve perceber que:

- o `TextInput` permite digitar informações na tela;
- o texto digitado pode ser capturado com `onChangeText`;
- o valor pode ser armazenado no `state`;
- a tela pode ser atualizada dinamicamente;
- o botão executa ações com `onPress`;
- validações simples podem evitar entradas vazias.

---

## 17. Erros e dúvidas comuns

### 1. Esquecer de usar `setState`

Em componentes de classe, o valor do estado não deve ser alterado diretamente.

Errado:

```tsx
this.state.nome = 'Novo valor';
```

Correto:

```tsx
this.setState({ nome: 'Novo valor' });
```

### 2. Esquecer de fazer o `bind` do método

Quando usamos métodos da classe em eventos, muitas vezes é necessário fazer o `bind` no construtor.

Exemplo:

```tsx
this.entrar = this.entrar.bind(this);
```

### 3. Confundir o valor digitado com a mensagem final

Em alguns exemplos, `input` guarda o texto digitado e `nome` guarda a mensagem exibida. Esses papéis são diferentes.

### 4. Não validar entrada vazia

Se o código não validar o campo, o botão poderá exibir mensagens incompletas ou sem sentido.

### 5. Achar que o botão atualiza sozinho

O botão apenas dispara uma função. A atualização da tela acontece porque essa função altera o `state`.

---

## 18. Sugestão de condução em sala

Uma forma interessante de conduzir a aula é evoluir o código gradualmente com a turma:

1. começar mostrando apenas o `TextInput`;
2. adicionar o `state` com um valor inicial;
3. capturar o texto digitado com `onChangeText`;
4. montar a mensagem na tela;
5. adicionar o botão;
6. incluir a validação do campo vazio.

Essa progressão ajuda os estudantes a perceberem que cada novo recurso resolve uma necessidade específica.

---

## 19. Conclusão

Receber dados e trabalhar com botões são dois passos fundamentais no desenvolvimento de interfaces interativas em React Native.

Com o `TextInput`, o usuário consegue informar valores para a aplicação. Com o `Button`, esses valores podem ser processados quando uma ação é confirmada.

Ao longo dos exemplos, foi possível observar uma evolução importante:

- primeiro, apenas o campo de entrada;
- depois, o uso do `state`;
- em seguida, a atualização dinâmica da tela;
- por fim, o uso do botão e a validação dos dados.

Esses conceitos são a base para construir telas como login, cadastro, busca, formulários e diversas outras funcionalidades comuns em aplicações móveis.
