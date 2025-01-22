# Tech Challenge - módulo backend

## Descrição do Projeto

Este projeto é uma API RESTful desenvolvida em **Node.js** com o framework **Express** e escrita em **TypeScript**. O principal objetivo da aplicação é gerenciar postagens, permitindo criar, listar, buscar, atualizar e deletar posts. 

O banco de dados utilizado é o **PostgreSQL**, e o ORM escolhido foi o **Prisma**, garantindo um acesso simples e eficiente aos dados. O projeto está estruturado para ser modular, de fácil manutenção e expansível, além de ser totalmente **dockerizado** para facilitar o setup e a execução em qualquer ambiente.

---

## Funcionalidades

- **Criar post:** Adicionar uma nova postagem ao banco de dados.
- **Listar posts:** Recuperar todas as postagens.
- **Buscar post por palavra-chave:** Procurar posts pelo título ou conteúdo.
- **Recuperar post por ID:** Obter os detalhes de uma postagem específica.
- **Atualizar post:** Modificar as informações de uma postagem existente.
- **Deletar post:** Remover uma postagem do banco de dados.

---

## Setup Inicial

### Requisitos

- **Docker** e **Docker Compose** instalados.
- **Node.js** (v16 ou superior) e **npm** instalados (caso não utilize Docker).
- Banco de dados **PostgreSQL** (embutido no Docker Compose).

### Variáveis de Ambiente

O projeto utiliza um arquivo `.env` para gerenciar as configurações sensíveis, como as credenciais do banco de dados. Exemplo:

### Instalação e Execução com Docker

1. Clone este repositório:
   ```bash
   git clone <link_do_repositorio>
   cd <nome_do_repositorio>
2. Inicie os cntêineres.
    ```bash
   docker-compose up --build
3. Acesse a aplicação na URL:
   http://localhost:3000/posts

## Arquitetura do projeto
### O projeto é estruturado de forma modular, seguindo o padrão MVC (Model-View-Controller):
  ```bash
  prisma/         # Arquivo schema.prisma e migrações
  src/
  ├── controllers/    # Contém os controladores para cada operação (CRUD)
  ├── routes/         # Define as rotas da aplicação
  ├── services/       # Contém a lógica de negócios e integração com o banco de dados
  ├── app.ts          # Configuração principal do Express e middlewares
  └── server.ts       # Inicialização do servidor
```

## Model Prisma
### A aplicação possui apenas uma model definida no arquivo schema.prisma:
```bash
  model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  author    String
  createdAt DateTime @default(now())
}
```

## Rotas da API
### Base URL: /posts
```bash
  Método Rota	Descrição
  Método POST Rota->	/ Descrição -> Cria um novo post.
  Método GET Rota-> / Descrição ->Lista todos os posts.
  Método GET Rota-> /search	Descrição -> Busca posts por palavras-chave.
  Método GET Rota-> /:id Descrição -> Retorna um post pelo ID.
  Método PUT Rota-> /:id Descrição -> Atualiza um post pelo ID.
  Método DELETE Rota-> /:id Descrição -> Remove um post pelo ID.
```

## Exemplo de Requisição
### POST /posts
```json
{
  "title": "Primeiro Post",
  "content": "Este é o conteúdo do primeiro post.",
  "author": "Kelvyn Telles"
}
