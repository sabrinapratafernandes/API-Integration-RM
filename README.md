# Rick and Morty Characters App

## Descrição do Projeto

Este projeto é uma aplicação em React que consome dados da API de Rick and Morty para exibir uma lista de personagens. Ele permite ao usuário pesquisar personagens por nome e visualizar detalhes específicos ao clicar em cada personagem. A aplicação também oferece navegação entre páginas para ver mais personagens e possui uma interface estilizada utilizando TailwindCSS e componentes reutilizáveis.

## Como rodar o projeto localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/sabrinapratafernandes/API-Integration-RM.git

2. **Navegue até o diretório do projeto**:
    ```bash
    cd API-Integration-RM

3. **Instale as dependências**:
    ```bash
    npm install

4. **Execute o projeto**:
    ```bash
    npm start

O projeto será iniciado em http://localhost:3000.

## Informações sobre a API

Este projeto utiliza a API de <a href="https://rickandmortyapi.com/">Rick and Morty</a>, que fornece dados dos personagens da série Rick and Morty.

- Endpoint base: https://rickandmortyapi.com/api
- Exemplos de uso:
1. Buscar personagens por página
2. Buscar personagem por nome

- Endpoint utilizado: https://rickandmortyapi.com/api/character

## Como executar os testes e realizar o build do projeto

### Executar os testes

O projeto utiliza o Jest para testes unitários.

1. **Para rodar os testes, execute**:
    ```bash
    npm test

### Realizar o build do projeto
Para gerar uma versão de produção otimizada do projeto, utilize:

1. **Execute**:
    ```bash
    npm run build

Isso criará a pasta build/, contendo os arquivos prontos para deployment.