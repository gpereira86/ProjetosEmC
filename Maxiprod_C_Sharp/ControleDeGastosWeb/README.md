
# Controle de Gastos - API de Controle de Gastos

Este projeto é uma API em ASP.NET Core para gerenciamento de pessoas e transações financeiras. A API oferece funcionalidades para adicionar, listar e excluir pessoas e transações, além de calcular totais de receitas e despesas.

## Requisitos

- **.NET SDK 6.0** ou superior
- **SQLite** ou outro banco de dados relacional (pode ser necessário adaptação no código)
- **Visual Studio** ou outra IDE compatível com .NET

## Passo a Passo para Instalação

### 1. Clonar o Repositório

Clone o repositório do projeto para sua máquina local usando o comando:

```bash
git clone https://seurepositorio.com/controle-de-gastos-web.git
```

### 2. Abrir o Projeto

Abra o projeto na sua IDE preferida (Visual Studio, Visual Studio Code, etc.) ou execute os comandos diretamente no terminal.

### 3. Restaurar Pacotes NuGet

Na raiz do projeto, execute o seguinte comando para restaurar as dependências do projeto:

```bash
dotnet restore
```

### 4. Configurar a String de Conexão

Edite o arquivo `appsettings.json` para configurar a string de conexão com seu banco de dados. Exemplo de configuração para SQL Server:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=controle_gastos.db"
  },
  "AllowedHosts": "*"
}
```

Certifique-se de incluir as credenciais de acesso do banco de dados se necessário.

Exemplo SQL Server:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;"
  },
  "AllowedHosts": "*"
}
```
> Nota: Constam campos _[Server, Database, User Id, Password]_ para configurar seu banco.


### 5. Criar o Banco de Dados e Rodar as Migrations

Execute os seguintes comandos para criar o banco de dados e aplicar as migrations:

```bash
dotnet ef database update
```

Este comando irá aplicar as migrations criadas no projeto e criar o banco de dados se ele não existir.
> Nota: Criará apenas a estrutura

### 6. Importar Dados Iniciais (Opcional)

Se você deseja importar dados iniciais para teste, basta utilizar o arquivo _**SeedData.sql**_ disponivel no diretório _**Data**_, se preferir você pode criar um arquivo SQL e rodá-lo diretamente no banco de dados após a criação do banco. Os dados iniciais devem incluir pessoas e transações para testar a API.
> Nota: na tabela _**Transacoes**_ no campo _**PessoaId**_ é necessário incluir um id válido de pessoa, pois esse campo é uma Foreign Key.


### 7. Rodar a Aplicação

Execute o seguinte comando para rodar a aplicação localmente:

```bash
dotnet run
```

Isso irá iniciar o servidor da API, geralmente acessível em `http://localhost:5000` ou `https://localhost:5001`.

>Você pode consultar esse url no arquivo _**launchSettings.json**_ que fica no diretório: _**Properties**_.

### 8. Testar a API

Você pode testar as funcionalidades da API usando uma ferramenta como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

- `GET /api/pessoas`: Retorna a lista de pessoas cadastradas.
- `POST /api/pessoas`: Cria uma nova pessoa.
- `DELETE /api/pessoas/{id}`: Deleta uma pessoa.
- `GET /api/transacoes`: Retorna a lista de transações.
- `POST /api/transacoes`: Cria uma nova transação.
- `DELETE /api/transacoes/{id}`: Deleta uma transação.
- `GET /api/totais`: Retorna os totais de receitas, despesas e saldo.



---

<br/>

> Nota !Importante!: Se for usar o projeto um front-end, note que no arquivo _**Program.cs**_ existe um _**Builder**_ adicionando Cors, então é necessário informar o url a ser usado no front, para que a API "Aceite" as requisições.

```c#
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowReactApp",
            builder => builder.WithOrigins("http://localhost:3000") // URL_Front
                .AllowAnyMethod()
                .AllowAnyHeader());
    });
```

### Enjoy!
