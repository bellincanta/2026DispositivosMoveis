# Atividade 01 e 02 — Módulos de Produtos e Movimentações na API

## Objetivo

Implementar, no **backend** (NestJS + Prisma) do sistema de controle de estoque (`projeto-appEstoque/backend`), os módulos de **Produtos** e **Movimentações**, expondo as rotas necessárias para listar, consultar, cadastrar e remover produtos e para registrar e listar movimentações de estoque.

## Regras gerais

- Os arquivos `prisma/schema.prisma`, `prisma/seed.ts`, `prisma.config.ts` e as migrations existentes **não devem ser alterados**. Use os modelos `Produto`, `Categoria`, `Movimentacao` e o enum `TipoMovimentacao` que já existem.
- Os arquivos da pasta `src/prisma` (`prisma.module.ts` e `prisma.service.ts`) **não devem ser alterados**. Todo acesso ao banco deve ser feito pelo `PrismaService` existente.
- Cada módulo deve ficar em sua própria pasta (`src/produtos` e `src/movimentacoes`), contendo, no mínimo:
  - `src/produtos`: `produtos.module.ts`, `produtos.controller.ts`, `produtos.service.ts` e `dto/create-produto.dto.ts`;
  - `src/movimentacoes`: `movimentacoes.module.ts`, `movimentacoes.controller.ts`, `movimentacoes.service.ts` e `dto/create-movimentacao.dto.ts`.
- Os novos módulos devem estar registrados na aplicação (`AppModule`).
- A API deve disponibilizar a documentação **Swagger** em `/api`, com as rotas agrupadas pelas tags `produtos` e `movimentacoes` e com os campos dos DTOs documentados.
- Os dados enviados nas requisições devem ser validados pelos DTOs; campos que não estão no DTO devem ser recusados.
- As respostas devem ser compatíveis com os tipos `Produto` e `Movimentacao` definidos em `frontend/src/types/index.ts`.
- Autenticação, módulo de categorias e módulo de usuários **não fazem parte desta atividade**.
- O frontend **não faz parte desta atividade**.
- O projeto deve compilar sem erros (`npm run build`) e iniciar normalmente (`npm run start:dev`) com o banco do `docker-compose.yml`, após `npx prisma migrate dev` e `npx prisma db seed`.

---

## Requisitos — Produtos

1. `GET /produtos` — listar todos os produtos ordenados por nome, cada um contendo os dados da sua **categoria** (id e nome).
2. `GET /produtos/:id` — retornar um produto com sua categoria. Responder **404** se o produto não existir e **400** se o id não for numérico.
3. `POST /produtos` — cadastrar um produto informando `nome`, `preco`, `quantidade` e `categoriaId`. Retornar **201** com o produto criado já com sua categoria.
4. Validações do cadastro (respostas **400** com mensagens em português):
   - `nome` obrigatório, com no mínimo 2 caracteres;
   - `preco` obrigatório, numérico e maior que zero;
   - `quantidade` obrigatória, inteira e maior ou igual a zero;
   - `categoriaId` obrigatório e inteiro.
5. Responder **404** ao cadastrar um produto com `categoriaId` de uma categoria inexistente.
6. `DELETE /produtos/:id` — remover um produto. Responder **404** se não existir, **400** se o id não for numérico e **409** se o produto já possuir movimentações registradas.

## Requisitos — Movimentações

1. `GET /movimentacoes` — listar o histórico de movimentações da **mais recente para a mais antiga**, cada uma contendo os dados do **produto** (incluindo a categoria do produto).
2. `POST /movimentacoes` — registrar uma movimentação informando `produtoId`, `tipo` (`ENTRADA` ou `SAIDA`) e `quantidade`. Retornar **201** com a movimentação criada já com o produto (incluindo a categoria do produto).
3. Validações do registro (respostas **400** com mensagens em português):
   - `produtoId` obrigatório e inteiro;
   - `tipo` obrigatório e aceitando apenas `ENTRADA` ou `SAIDA`;
   - `quantidade` obrigatória, inteira e maior que zero.
4. Responder **404** ao registrar uma movimentação para um produto inexistente.
5. Toda movimentação deve atualizar o estoque do produto: uma **entrada** soma a quantidade e uma **saída** subtrai.
6. Uma **saída** maior que o estoque atual deve ser recusada com **400** e a mensagem `Estoque insuficiente. Disponível: X, solicitado: Y`.
7. O registro da movimentação e a atualização do estoque devem acontecer juntos: se uma das operações falhar, nenhuma delas pode ficar gravada no banco.
8. O produto retornado na movimentação criada deve refletir o estoque **já atualizado**.

---

## Critérios de aceite

Com o banco recém-criado e populado pelo seed (Refrigerante 2L: 20 un., R$ 8,50, Bebidas; Detergente: 5 un., R$ 3,20, Limpeza), a API deve se comportar assim:

- `GET /produtos` retorna "Detergente" e "Refrigerante 2L", nessa ordem, cada um com o nome da sua categoria.
- `GET /produtos/999` retorna **404** e `GET /produtos/abc` retorna **400**.
- Cadastrar "Suco de Uva", preço 6.00, 10 un., categoria Bebidas, retorna **201** com a categoria no corpo da resposta, e o produto passa a aparecer em `GET /produtos`.
- Cadastrar um produto com `categoriaId` 999 retorna **404**; cadastrar sem `preco` retorna **400**; cadastrar com `nome` "A" ou `quantidade` -1 retorna **400**; enviar um campo extra (ex.: `"desconto": 1`) retorna **400**.
- Registrar uma entrada de 10 Detergentes deixa o Detergente com **15** unidades, e essa movimentação aparece em primeiro lugar em `GET /movimentacoes`.
- Registrar uma saída de 3 Refrigerantes deixa o Refrigerante 2L com **17** unidades, e essa movimentação passa a ser a primeira em `GET /movimentacoes`.
- Registrar uma saída de 50 Detergentes retorna **400** com a mensagem `Estoque insuficiente. Disponível: 15, solicitado: 50`; o estoque do Detergente não muda e nenhuma movimentação nova aparece no histórico.
- Registrar uma movimentação com `tipo` `"TROCA"`, `quantidade` 0 ou `produtoId` 999 retorna, respectivamente, **400**, **400** e **404**.
- Tentar remover o Detergente (que já possui movimentações) retorna **409**; remover o "Suco de Uva" (sem movimentações) funciona e ele deixa de aparecer em `GET /produtos`; tentar removê-lo novamente retorna **404**.
- A página `/api` exibe todas as rotas acima agrupadas nas tags `produtos` e `movimentacoes`.

---

## Entrega

- Link do repositório no GitHub **sem** as pastas `node_modules` e `dist` e **sem** o arquivo `.env`.
- No `README.md`, inclua um print da execução de cada rota implementada (Swagger, Insomnia, Postman ou similar), incluindo pelo menos um caso de erro de cada módulo.
