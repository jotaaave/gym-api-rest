# 🏋️‍♂️ GymPass Style API

![GitHub repo size](https://img.shields.io/github/repo-size/jotaaave/gym-api-rest?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/jotaaave/gym-api-rest?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/jotaaave/gym-api-rest?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/jotaaave/gym-api-rest?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/jotaaave/gym-api-rest?style=for-the-badge)

> Uma API RESTful para gerenciamento de check-ins em academias, inspirada no modelo do Gympass.

### 💻 Sobre o projeto

Esta API foi desenvolvida como parte do meu portfólio pessoal. O objetivo é criar um sistema back-end sólido para gerenciar academias, usuários e o fluxo de check-ins, garantindo regras de negócio complexas como validação de distância (geolocalização) e limites de tempo.

O projeto foi construído utilizando **Fastify**, **TypeScript** e **Prisma ORM (Postgresql)**, seguindo os princípios de **SOLID** e **Clean Architecture**.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

### ⚙️ Funcionalidades e Regras de Negócio

Para garantir a integridade do sistema, foram mapeados os seguintes requisitos:

#### Requisitos Funcionais (RFs)
- [ ] O usuário deve poder se cadastrar;
- [ ] O usuário deve poder se autenticar;
- [ ] O usuário deve poder obter o perfil de um usuário logado;
- [ ] O usuário deve poder obter o número de check-ins realizados;
- [ ] O usuário deve poder obter seu histórico de check-ins;
- [ ] O usuário deve poder buscar academias próximas (até 10km);
- [ ] O usuário deve poder buscar academias pelo nome;
- [ ] O usuário deve poder realizar check-in em uma academia;
- [ ] O usuário deve poder validar o check-in de um usuário (Admin);
- [ ] A academia deve poder cadastrar uma nova academia;

#### Regras de Negócio (RNs)
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

#### Requisitos Não-Funcionais (RNFs)
- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

---

### 🚀 Como executar o projeto

Pré-requisitos: npm / yarn e Docker (para o banco de dados).

```bash
# Clone este repositório
$ git clone https://github.com/jotaaave/gym-api-rest.git

# Acesse a pasta do projeto no terminal/cmd
$ cd gym-api-rest

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente
$ cp .env.example .env

# Suba o banco de dados via Docker
$ docker-compose up -d

# Execute as migrações do Prisma
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev