
# Sistema de Controle de Gastos - Frontend

Este repositório contém o frontend do **Sistema de Controle de Gastos**, desenvolvido para interagir com a API backend que gerencia dados de despesas. O sistema foi projetado para ser simples, intuitivo e responsivo, permitindo que os usuários registrem, visualizem e excluam se necessário seus gastos de forma eficiente.

## Funcionalidades

- **Cadastro, Visualização e Remoção de Gastos**: Usuários podem adicionar novos gastos, visualizar gastos anteriores e excluir registro de gasto se necessário.
- **CRUD (incompleto - sem update) de Gastos**: Realize operações de criação, leitur e exclusão de despesas.
- **Interface Responsiva**: O design é adaptável a diferentes dispositivos, como desktop e dispositivos móveis.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário dinâmicas e interativas.

- **Axios**: Biblioteca para realizar requisições HTTP à API backend, facilitando a comunicação entre o frontend e o backend.
- **Bootstrap**: Framework CSS para design responsivo, oferecendo componentes prontos para uso e um layout adaptável a diferentes dispositivos.
- **React Router**: Biblioteca para gerenciar a navegação entre páginas e rotas no frontend, permitindo uma navegação de página única (SPA).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código e a manutenção do projeto.
  
## Pré-requisitos

Antes de começar, você precisa ter o Node.js e o npm instalados no seu sistema.

- **Node.js**: [Baixe e instale o Node.js](https://nodejs.org/)
- **npm**: O npm é instalado automaticamente com o Node.js.

## Instalação

Siga os passos abaixo para rodar o frontend localmente:

### 1. Clone o repositório

Primeiro, clone o repositório para o seu computador:

```bash
git clone <URL do repositório>
```

### 2. Navegue até o diretório do projeto

Entre na pasta do projeto clonado:

```bash
cd nome-do-repositorio
```

### 3. Instale as dependências

Execute o comando `npm install` para instalar todas as dependências listadas no arquivo `package.json`:

```bash
npm install
```

Este comando irá instalar todas as bibliotecas necessárias, como **React**, **Axios**, entre outras.

### 4. Inicie o servidor de desenvolvimento

Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento para rodar o frontend localmente:

```bash
npm start
```

O frontend normalmente estará disponível em [http://localhost:3000](http://localhost:3000).

## Conexão com a API

Este frontend se comunica com a API hospedada em [C# de Gastos](http://localhost:5000) para realizar todas as operações de CRUD (incompleto - sem update) (Criar, Ler, Deletar). 

Ao rodar a api em C# (manual de instalação e uso no projeto), a depender do url desta API, é possível altera-la no arquivo _**constants.ts**_ que se encontra no diretório: _**utils**_.

A comunicação com a API é feita por meio de requisições HTTP utilizando o método **Axios**.

### Enjoy!
