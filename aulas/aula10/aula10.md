# Aula 10 — Hooks e a API `useState`

---

## 1. Contexto: por que mudar de Classes para Hooks?

Até esta aula, nossos componentes React Native foram implementados como **componentes de classe**, com estado gerenciado via `this.state` e `this.setState()`. Essa é uma forma totalmente válida e ainda presente em bases de código legadas, mas desde a versão 16.8 do React, os **Hooks** se tornaram o padrão de mercado para escrever componentes.

Um **Hook** é uma função especial que permite "conectar-se" (do inglês *to hook into*) a recursos do React — como estado e ciclo de vida — dentro de **componentes funcionais**, sem a necessidade de escrever uma classe.

| Componente de Classe | Componente Funcional com Hooks |
|---|---|
| `class Contador extends Component` | `function Contador()` ou `const Contador = () =>` |
| `this.state = { valor: 0 }` | `const [valor, setValor] = useState(0)` |
| `this.setState({ valor: novoValor })` | `setValor(novoValor)` |
| `componentDidMount()`, `componentDidUpdate()` | `useEffect(...)` (veremos em aula futura) |
| Precisa de `this` e `bind` | Não precisa de `this` |

**Vantagens práticas dos Hooks:**
- Código mais enxuto e legível.
- Elimina a confusão com `this` (comum em JavaScript/TypeScript).
- Facilita a reutilização de lógica de estado entre componentes.
- É a abordagem recomendada oficialmente pela documentação do React e React Native.

---

## 2. O que é o `useState`?

`useState` é o Hook mais fundamental do React. Ele permite que um componente funcional **tenha memória própria** entre renderizações — ou seja, guarde um valor que pode mudar ao longo do tempo (o "estado").

### 2.1 Sintaxe básica

```tsx
import React, { useState } from 'react';

const [estado, setEstado] = useState(valorInicial);
```

- `estado`: variável que contém o valor atual.
- `setEstado`: função usada **exclusivamente** para atualizar `estado`.
- `valorInicial`: valor usado somente na primeira renderização do componente.

> ⚠️ **Nunca** altere o estado diretamente (`estado = novoValor`). Isso não dispara a nova renderização da tela. Sempre use a função `setEstado`.

### 2.2 Tipagem com TypeScript

O `useState` é genérico, então podemos (e devemos) tipar explicitamente quando o TypeScript não conseguir inferir sozinho:

```tsx
const [contador, setContador] = useState<number>(0);
const [nome, setNome] = useState<string>('');
const [ativo, setAtivo] = useState<boolean>(false);
const [usuario, setUsuario] = useState<Usuario | null>(null);
```

### 2.3 Exemplo mínimo — Contador

```tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Valor: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24, marginBottom: 12 },
});
```

Repare que **não existe classe, não existe `this`, não existe `constructor`**. O componente é uma função, e o estado "vive" dentro dela graças ao `useState`.

### 2.4 Atualizando estado com base no valor anterior

Quando o novo valor depende do valor atual, é mais seguro usar a forma de **função de atualização**, evitando problemas quando várias atualizações acontecem em sequência:

```tsx
// Forma direta (cuidado em atualizações múltiplas rápidas)
setContador(contador + 1);

// Forma recomendada (função de atualização)
setContador((valorAnterior) => valorAnterior + 1);
```

### 2.5 Estado com objetos e arrays

Diferente de `this.setState` (que faz *merge* automático), o `setEstado` do `useState` **substitui** o valor anterior por completo. Por isso, ao lidar com objetos, é preciso espalhar (*spread*) o estado atual:

```tsx
interface Endereco {
  cidade: string;
  estado: string;
}

const [endereco, setEndereco] = useState<Endereco>({ cidade: 'Cascavel', estado: 'PR' });

// Atualizando apenas um campo
setEndereco((anterior) => ({ ...anterior, cidade: 'Foz do Iguaçu' }));
```

---

## 4. As Regras dos Hooks

Para os Hooks funcionarem corretamente, o React exige duas regras **obrigatórias**:

1. **Só chame Hooks no nível superior do componente.**
   Nunca dentro de `if`, `for`, ou funções aninhadas.

   ```tsx
   // ERRADO
   if (condicao) {
     const [x, setX] = useState(0);
   }

   // CORRETO
   const [x, setX] = useState(0);
   if (condicao) {
     // usar x aqui
   }
   ```

2. **Só chame Hooks dentro de componentes React ou de outros Hooks.**
   Nunca em funções JavaScript comuns, nem fora de um componente.

Essas regras existem porque o React depende da **ordem de chamada** dos Hooks para associar corretamente cada estado ao componente entre renderizações.

---

## 6. Resumo Visual do Fluxo

```
Usuário interage (toque no botão)
        │
        ▼
  onPress chama setEstado(novoValor)
        │
        ▼
  React agenda nova renderização
        │
        ▼
  Componente função é executado novamente
        │
        ▼
  useState retorna o novo valor atualizado
        │
        ▼
  Tela é redesenhada com o novo estado
```

---


