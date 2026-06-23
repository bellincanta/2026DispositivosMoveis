# Lista de Exercícios — React Native + TypeScript

**Entrega:** Link do repositório Git no Google Classrom + vídeo curto (até 2 min) demonstrando cada app rodando

# Exercício 01 — App "Álcool ou Gasolina?"

---

## 1. Contexto

Todo motorista de carro flex no Brasil já se fez a mesma pergunta no posto: *"vale mais a pena abastecer com álcool ou com gasolina?"*. A regra prática é simples, mas erramos muito de cabeça. Vocês vão transformar essa regra em um pequeno aplicativo móvel.

A imagem de referência (mockup) entregue junto com este enunciado mostra **como o app deve ficar** ao final. Ela é o nosso "requisito visual". O comportamento esperado está descrito mais abaixo.

---

## 2. A regra de negócio (lógica do cálculo)

A decisão segue a clássica **regra dos 70%**:

```
fator = preco_alcool / preco_gasolina

se fator < 0.7  -> recomendar ÁLCOOL
senão           -> recomendar GASOLINA
```

**Exemplo:** álcool a R$ 4,29 e gasolina a R$ 6,92.
`4,29 / 6,92 = 0,6199...` → menor que 0,7 → **compensa o álcool**.


---

## 3. Requisitos funcionais (RF)

| ID | Requisito |
|----|-----------|
| RF01 | O app deve apresentar uma tela com dois campos numéricos: **preço do álcool (por litro)** e **preço da gasolina (por litro)**. |
| RF02 | O app deve ter um botão **"Calcular"** que dispara o cálculo. |
| RF03 | Ao calcular, o app deve aplicar a regra dos 70% e exibir a recomendação: **"Compensa usar Álcool"** ou **"Compensa usar Gasolina"**. |
| RF04 | A tela de resultado deve exibir os dois preços informados pelo usuário (resumo: "Álcool: R$ X" e "Gasolina: R$ Y"). |
| RF05 | A tela de resultado deve ter um botão **"Calcular novamente"** que volta para a tela de entrada. |
| RF06 | O app deve validar a entrada: não calcular se algum campo estiver vazio, não numérico ou com valor ≤ 0. |

## 5. Requisitos não funcionais (RNF)

| ID | Requisito |
|----|-----------|
| RNF01 | O app deve ser implementado em **React Native com TypeScript** (arquivos `.tsx`). |
| RNF02 | Não é permitido usar `any` para tipar estado e props; use tipos explícitos. |
| RNF03 | O teclado dos campos de preço deve ser **numérico** (`keyboardType="numeric"`). |
| RNF04 | O layout deve ser fiel ao mockup (tema escuro, cartão central, botão de destaque). Não precisa ser pixel-perfect, mas a hierarquia visual deve ser respeitada. |
| RNF05 | O código deve estar organizado em funções/componentes com nomes claros e em português ou inglês consistente. |

---

## 4. Especificação das telas

O app trabalha com **dois momentos** (podem ser duas telas ou um único componente que troca o conteúdo conforme o estado):

**Tela 1 — Entrada**
- Ícone/título "Qual melhor opção?"
- Campo: *Álcool (preço por litro)*
- Campo: *Gasolina (preço por litro)*
- Botão: **Calcular**

**Tela 2 — Resultado**
- Título com a recomendação em destaque (verde para álcool / outra cor para gasolina, à escolha)
- Bloco "Com os preços:" listando álcool e gasolina informados
- Botão: **Calcular novamente**

> Vocês escolhem **como** alternar entre as telas. A forma mais simples para começar é usar uma variável de estado booleana (ex.: `mostrarResultado`) e renderização condicional, **sem** precisar de biblioteca de navegação.


---

# Exercício 01 — App "Situação do Aluno"

## 1. Contexto

Construir o **App "Situação do Aluno"**: um aplicativo que recebe as notas de um aluno, calcula a média, classifica a situação (**Aprovado**, **Recuperação** ou **Reprovado**) e **guarda um histórico** de todos os cálculos feitos, exibido em uma lista.

---

## 3. A regra de negócio

A média é a média aritmética simples de **três notas** (cada uma de 0 a 10):

```
media = (nota1 + nota2 + nota3) / 3
```

A situação é classificada assim:

| Condição da média | Situação | Cor sugerida |
|---|---|---|
| `media >= 7.0` | **Aprovado** | verde |
| `5.0 <= media < 7.0` | **Recuperação** | amarelo/laranja |
| `media < 5.0` | **Reprovado** | vermelho |

> A cor da situação deve mudar conforme a faixa — exatamente o padrão de **estilo condicional** da aula 04: `style={[styles.base, situacao === 'Aprovado' ? styles.verde : ...]}`.

---

## 4. Requisitos funcionais (RF)

| ID | Requisito | 
|----|-----------|
| RF01 | A tela deve ter **três campos numéricos** para as notas (nota 1, nota 2 e nota 3). | 
| RF02 | Deve existir um botão **"Calcular média"** que dispara o cálculo. |
| RF03 | Ao calcular, o app deve exibir a **média** e a **situação** (Aprovado / Recuperação / Reprovado). |
| RF04 | A cor da situação deve **mudar conforme a faixa** (estilo condicional). |
| RF05 | O app deve **validar** a entrada: não calcular se algum campo estiver vazio, não numérico ou fora do intervalo 0–10. Mostrar aviso com `alert()`. |
| RF06 | Cada cálculo realizado deve ser **adicionado a um histórico**. |
| RF07 | O histórico deve ser exibido em uma **`FlatList`**, mostrando as três notas, a média e a situação de cada registro. |
| RF08 | A lista deve ter **cabeçalho** (título), **separador** entre itens e **rodapé** com o total de cálculos. |
| RF09 | Deve haver um botão **"Limpar histórico"** que esvazia a lista. |

## 5. Requisitos não funcionais (RNF)

| ID | Requisito | Aula(s) |
|----|-----------|---------|
| RNF01 | Implementar em **React Native + TypeScript** (arquivos `.tsx`). |
| RNF02 | A tela principal (`App.tsx`) deve ser um **componente de classe**, seguindo o padrão das aulas 07 e 08. |
| RNF03 | O `state` deve ser **tipado** com `type`/`interface` (nada de `any`). |
| RNF04 | O item do histórico deve ser um **componente próprio em arquivo separado**, recebendo dados por **props tipadas**. |
| RNF05 | Os estilos devem ficar em **grupos** com `StyleSheet.create()`. |
| RNF06 | O teclado dos campos de nota deve ser **numérico** (`keyboardType="numeric"`). |
| RNF07 | O layout deve usar **Flexbox** (linhas com `flexDirection: 'row'`, alinhamentos com `justifyContent`/`alignItems`) e `flex` no contêiner principal. |

---

## 7. Especificação das telas

O app pode funcionar em **uma única tela rolável**. Sugestão de organização (de cima para baixo):

**Bloco 1 — Entrada (formulário)**
- Título "Situação do Aluno"
- Três `TextInput`: *Nota 1*, *Nota 2*, *Nota 3*
- Botão **Calcular média**

**Bloco 2 — Resultado** (aparece só após calcular — renderização condicional)
- Componente `CardResultado` mostrando a **média** e a **situação** com a **cor da faixa**
- Linha no formato "rótulo / valor" usando `flexDirection: 'row'` + `justifyContent: 'space-between'`

**Bloco 3 — Histórico**
- `FlatList` com os registros já calculados (componente `ItemHistorico` por item)
- Cabeçalho ("Histórico de cálculos"), separador entre itens e rodapé ("Total: N cálculos")
- Botão **Limpar histórico**

> **Dica de arquitetura (importante):** para combinar o formulário + resultado + lista numa tela só **sem aninhar `FlatList` dentro de `ScrollView`** (o que gera aviso e bugs de rolagem), use a própria `FlatList` como rolagem principal e coloque os Blocos 1 e 2 dentro de `ListHeaderComponent`. Esse é o padrão recomendado e está alinhado ao que a aula 08 mostra sobre cabeçalho de lista.

---

## 8. Estrutura de arquivos sugerida

```
situacao-do-aluno/
├── App.tsx                         
├── src/
│   ├── components/
│   │   ├── ItemHistorico.tsx       
│   │   └── CardResultado.tsx       
│   ├── types/
│   │   └── registro.ts             
│   └── styles/
│       └── styles.ts              
```

---

