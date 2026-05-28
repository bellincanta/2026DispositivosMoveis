# Atividade Avaliativa — Construção de App com React Native e TypeScript


## 1. Objetivo da atividade

Nesta atividade, deverá ser desenvolvido um aplicativo mobile utilizando **React Native com Expo e TypeScript**, aplicando apenas os conteúdos estudados até o momento em sala de aula.

O objetivo é verificar se o aluno consegue construir uma interface organizada, separada em componentes, com uso de props, state, estilos, Flexbox, tamanhos fixos/dinâmicos e listas.

---

## 2. Proposta do aplicativo

Cada aluno deverá desenvolver um aplicativo chamado:

## App Catálogo de Estudos

O aplicativo deverá apresentar uma lista de conteúdos, disciplinas, produtos, contatos, tarefas ou temas escolhidos pelo aluno.

Exemplos de temas permitidos:

- Lista de disciplinas do curso;
- Lista de conteúdos estudados;
- Lista de livros;
- Lista de produtos simples;
- Lista de contatos fictícios;
- Lista de tarefas;
- Lista de aplicativos favoritos;
- Lista de tecnologias estudadas.


---

## 3. Conteúdos que devem ser utilizados

O aplicativo deve utilizar obrigatoriamente os seguintes conteúdos trabalhados nas aulas:

### 3.1 React Native com Expo

O projeto deve ser criado com Expo utilizando o template:

```bash
Blank (TypeScript)
```

Comando sugerido:

```bash
npx create-expo-app@latest nomeDoApp -t
```

Para executar o projeto:

```bash
npx expo start
```

---

### 3.2 Componentes básicos

O aplicativo deve utilizar os componentes básicos vistos em sala, como:

- `View`;
- `Text`;
- `Image`, se o aluno quiser usar imagem;
- `Pressable`;
- `ScrollView`;
- `FlatList`.

---

### 3.3 Componentes próprios

O aluno deverá criar pelo menos **um componente próprio**.

Exemplo:

```txt
src/
└── components/
    └── ItemCatalogo/
        └── ItemCatalogo.tsx
```

Esse componente deverá receber dados por **props**.

Exemplo de dados que podem ser recebidos por props:

- nome;
- descrição;
- categoria;
- preço;
- e-mail;
- idade;
- status;
- imagem.

---

### 3.4 Props

O componente criado pelo aluno deverá receber informações por props.

Exemplo conceitual:

```tsx
<ItemCatalogo
  nome="React Native"
  descricao="Framework para desenvolvimento mobile"
/>
```

As props devem ser tipadas com `type` ou `interface`.

---

### 3.5 State

O aplicativo deverá utilizar `state` para controlar alguma informação da tela.

Exemplos permitidos:

- contador de cliques;
- status ativo/inativo;
- item selecionado;
- mensagem exibida na tela;
- quantidade de interações.

Exemplo de comportamento esperado:

- ao clicar em um botão, mudar uma mensagem;
- ao clicar em um botão, aumentar um contador;
- ao clicar em um botão, alternar entre “ativo” e “inativo”.

---

### 3.6 Estilos com `StyleSheet`

O aplicativo deverá utilizar `StyleSheet.create()` para organizar os estilos.

Os estilos não devem ficar todos diretamente dentro dos componentes.

Exemplo de organização:

```txt
src/
└── styles/
    └── styles.ts
```

Ou dentro do próprio componente, desde que utilize:

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

---

### 3.7 Flexbox

O aplicativo deverá utilizar propriedades de Flexbox vistas em sala, como:

- `flex`;
- `flexDirection`;
- `justifyContent`;
- `alignItems`.

Essas propriedades devem ser usadas para organizar os elementos na tela.

---

### 3.8 Tamanhos fixos e dinâmicos

O aplicativo deverá utilizar:

- pelo menos um tamanho fixo, como `width`, `height`, `padding` ou `margin`;
- pelo menos um tamanho dinâmico com `flex: 1`.

---

### 3.9 Lista com `FlatList`

O aplicativo deverá apresentar uma lista de itens utilizando `FlatList`.

A lista deverá ser criada a partir de um array de objetos.

Exemplo de estrutura dos dados:

```tsx
type Item = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
};
```

A `FlatList` deverá utilizar:

- `data`;
- `renderItem`;
- `keyExtractor`.

---

### 3.10 ScrollView

O aluno deverá utilizar `ScrollView` em alguma parte da tela.

Pode ser utilizado para:

- exibir categorias na horizontal;
- mostrar uma área com informações iniciais;
- criar uma seção com cards horizontais.

Exemplo permitido:

```tsx
<ScrollView horizontal>
  ...
</ScrollView>
```

---

## 4. Requisitos mínimos do aplicativo

O aplicativo deve conter obrigatoriamente:

1. Um título principal.
2. Um subtítulo ou pequena descrição.
3. Uma lista de itens usando `FlatList`.
4. Um componente separado para representar cada item da lista.
5. Uso de props no componente do item.
6. Uso de `state` para alterar alguma informação na tela.
7. Pelo menos um botão com `Pressable`.
8. Uso de `StyleSheet.create()`.
9. Uso de `flex: 1`.
10. Uso de `flexDirection`, `justifyContent` ou `alignItems`.
11. Uso de tamanhos fixos e tamanhos dinâmicos.
12. Uso de `ScrollView`.

---

## 5. Estrutura sugerida do projeto

A estrutura abaixo é apenas uma sugestão, mas o aluno deve manter o projeto organizado.

```txt
meuApp/
├── App.tsx
└── src/
    ├── components/
    │   └── ItemCatalogo/
    │       └── ItemCatalogo.tsx
    └── styles/
        └── styles.ts
```

---


## 6. O que não deve ser utilizado

Como a atividade deve usar apenas o conteúdo visto em sala, não será permitido utilizar:

- navegação entre telas;
- banco de dados;
- API externa;
- autenticação;
- login;
- cadastro real de usuários;
- armazenamento local;
- câmera;
- localização;
- mapas;
- bibliotecas externas não vistas em aula;
- recursos copiados prontos da internet sem explicação.

O foco da atividade é a construção da interface e o uso correto dos conceitos trabalhados em sala.

---

## 7. Entrega

O aluno deverá entregar:

1. O link do repositório no GitHub contendo o projeto.
2. O projeto deve estar funcionando.
3. O arquivo `App.tsx` deve estar presente.
4. Os componentes criados devem estar organizados em pastas.
5. O aluno deverá apresentar oralmente o funcionamento do aplicativo.

---

## 8. Apresentação oral

Na apresentação, o aluno deverá explicar:

1. Qual é o objetivo do aplicativo.
2. Qual tema foi escolhido.
3. Como o projeto foi criado.
4. Onde está o componente principal `App.tsx`.
5. Qual componente próprio foi criado.
6. Quais props foram utilizadas.
7. Onde foi usado `state`.
8. Onde foi usado `FlatList`.
9. Onde foi usado `ScrollView`.
10. Como os estilos foram organizados.
11. Como foram aplicados Flexbox e tamanhos fixos/dinâmicos.

---


## 9. Observações importantes

- O aplicativo deve ser feito individualmente.
- O aluno deverá compreender e explicar o próprio código.
- Trabalhos com estrutura idêntica poderão ter a nota reduzida ou serem zerados.
- Será verificado plágio e uso inadequado de IA.
- O aluno não deve utilizar conteúdos ainda não trabalhados em sala.
- O objetivo é demonstrar domínio dos conceitos vistos até agora.

---