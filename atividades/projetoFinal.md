# Projeto Final (TADS – Último Ano) — Mobile + API (2026)

**Stack obrigatória:** React Native + Expo (mobile) • NestJS + Postgres + Prisma (API)  
**Tema:** livre (definido pelo(a) aluno(a)), **seguindo o padrão único obrigatório** descrito neste documento.  
**Modalidade:** **individual**  
**Acompanhamento:** Dispositivos Móveis + Gerenciamento de Projetos  
**Entregas avaliativas:** **20/04/2026** • **02/07/2026** • **21/09/2026**

---

## 1. Objetivo
Desenvolver um aplicativo mobile completo (offline-first) integrado a uma API, aplicando:
- Programação Orientada a Objetos (POO) e arquitetura em camadas
- Persistência local (SQLite) + persistência remota (Postgres)
- Sincronização bidirecional (push/pull) com tratamento de conflitos
- Segurança (JWT) e controle de acesso (RBAC)
- Qualidade (testes automatizados + CI)
- Gestão do projeto (backlog, kanban, riscos e checkpoints)

---

## 2. Tema livre com padrão único obrigatório
O(a) aluno(a) define o domínio do aplicativo (saúde, educação, finanças, logística etc.).  
**Porém, todos os projetos devem obedecer aos requisitos mínimos e ao padrão técnico abaixo.**

---

## 3. Demonstração obrigatória em cada entrega
Em **todas as entregas**, o(a) aluno(a) deverá:
- **demonstrar o aplicativo funcionando** (fluxo principal e requisitos daquela etapa);
- **explicar o funcionamento técnico**, incluindo:
  - estrutura/arquitetura do código (camadas, pastas, padrão adotado);
  - persistência local (SQLite) e modelo de dados;
  - conexões com a API (rotas consumidas, autenticação, headers/tokens);
  - execução via Docker (API + Postgres), quando aplicável;
  - logs/erros principais e como foram tratados.

> A entrega só será considerada completa se houver **demonstração prática + explicação técnica**.

---

## 4. Requisitos funcionais obrigatórios

### 4.1 Autenticação e Segurança
- Login real via API (JWT)
- Refresh token (ou estratégia equivalente)
- **RBAC (mínimo 2 papéis)**: ex.: `ADMIN` e `USER`  
  - Ações e telas devem respeitar permissões

### 4.2 Offline-first + Sincronização bidirecional
- O app deve funcionar sem internet com **SQLite**
- Operações offline devem ir para uma **fila de sincronização (outbox)**
- Deve existir sincronização **push + pull**
- Deve existir estratégia mínima de conflitos **documentada**, por exemplo:
  - LWW (Last Write Wins) com `updatedAt`, ou
  - `version` incremental (com detecção de conflito)

### 4.3 Dados e produtividade
- Busca textual + **2 filtros** + ordenação
- Pelo menos **2 indicadores/relatórios** (cards ou gráfico)
- Upload de mídia/anexo associado à entidade principal (armazenado no servidor)

---

## 5. Modelagem obrigatória (complexidade mínima)
O domínio escolhido deve conter:
- **mínimo 4 entidades**
- pelo menos:
  - **1 relacionamento 1:N**
  - **1 relacionamento N:N** (tabela associativa)
- cada entidade deve ter:
  - `id` (UUID), `createdAt`, `updatedAt`, `deletedAt` (soft delete), `version`

---

## 6. Arquitetura obrigatória

### 6.1 Mobile (React Native + Expo)
Padrão em camadas (obrigatório):
- `src/domain` (entidades + validações)
- `src/application` (casos de uso)
- `src/data` (repositories + datasources local/remoto + outbox)
- `src/presentation` (telas + componentes + navegação + estado)

Obrigatório:
- TypeScript
- Redux Toolkit (state management)
- Repository Pattern (interface + implementações local/remota)

### 6.2 API (NestJS + Prisma + Postgres)
Obrigatório:
- módulos por domínio
- Prisma migrations
- JWT + Guards + Roles
- Swagger em `/docs`
- Docker Compose (API + Postgres)

Endpoints mínimos:
- `POST /auth/login`
- `POST /auth/refresh`
- CRUD de pelo menos 2 entidades principais
- `POST /files/upload` (ou equivalente)
- `POST /sync/push`
- `GET /sync/pull?since=...`

---

## 7. Qualidade obrigatória
- mínimo **20 testes automatizados**
- mínimo **5 testes** focados em casos de uso (application layer)
- **CI GitHub Actions** executando:
  - lint
  - testes
  - build (quando aplicável)

---

## 8. Gerenciamento de Projetos (artefatos obrigatórios)
- Termo de Abertura
- Backlog com histórias e critérios de aceitação
- EAP/WBS + cronograma macro
- Kanban com evidências (histórico real)
- Riscos (mín. 10 riscos com mitigação)
- Relatório de sprint (quinzenal): realizado / próximo / impedimentos

---

# 9. Cronograma de entregas (avaliativas)

## ✅ Entrega 1 — 20 de Abril de 2026 *(nota do 1º bimestre)*
**Objetivo:** concepção + base técnica inicial.

**Obrigatório:**
1. Definição do tema e escopo (1–2 páginas)
2. Termo de Abertura
3. Backlog inicial priorizado (mín. 20 histórias, com critérios de aceitação)
4. Protótipo navegável (Figma ou similar) com as telas mínimas
5. DER/modelo de dados com:
   - 4 entidades, 1:N e N:N
6. Repositórios criados (mobile e API) com README inicial
7. Mobile Expo com:
   - navegação (Tab + Stack)
   - telas placeholder do fluxo principal
8. Kanban ativo + plano de riscos (mín. 10)
9. **Demonstração em aula**: navegação básica + explicação da arquitetura planejada e do modelo de dados.

---

## ✅ Entrega 2 — 02 de Julho de 2026 *(nota do 2º bimestre)*
**Objetivo:** MVP offline + API funcional com autenticação.

**Obrigatório:**
1. Mobile com:
   - SQLite funcionando
   - CRUD completo local de pelo menos 2 entidades
   - validação de formulários
   - busca + filtros básicos
2. API com:
   - NestJS + Prisma + Postgres
   - JWT (login + refresh)
   - RBAC aplicado em pelo menos 2 rotas
   - CRUD remoto das entidades principais
   - Swagger em `/docs`
   - Docker compose (API + Postgres)
3. Relatório de progresso (1–2 páginas):
   - entregue vs backlog
   - riscos e ajustes
4. CI básico (lint + testes ou lint + build)
5. **Demonstração em aula**: CRUD offline no mobile + API rodando no Docker + explicação de autenticação, rotas e conexões.

---

## ✅ Entrega Final — 21 de Setembro de 2026 *(nota do 3º bimestre)*
**Objetivo:** produto completo (offline-first + sync + qualidade).

**Obrigatório:**
1. Offline-first completo:
   - outbox (fila)
   - sync push/pull
   - conflitos implementados e documentados
2. Upload de mídia/anexo (API + mobile)
3. Busca avançada + 2 filtros + ordenação
4. Relatórios/indicadores (mín. 2)
5. Testes:
   - mínimo 20 (com 5 em casos de uso)
6. CI completo (lint + testes + build quando aplicável)
7. README final completo:
   - arquitetura, DER, como rodar, prints, endpoints, evidências de sync
8. Vídeo de demonstração (3–5 min) mostrando:
   - login/RBAC
   - CRUD
   - offline
   - sincronização e conflitos
   - relatórios
9. **Demonstração em aula**: app completo + explicação detalhada do código, sincronização, conflitos, upload, e pipeline de CI.

---

## 10. Regras gerais
- Não serão aceitos projetos sem: **SQLite + Postgres + Prisma + JWT + RBAC + Sync push/pull**
- Tema livre, porém o padrão é obrigatório
- Todo o trabalho deve estar versionado no Git com commits frequentes

---
