# teste-software-leilao-node

Aplicação para a aula prática de construção de testes de unidade e de integração usando o Jest para o Node.js

## Pastas e Arquivos

Dentro da pasta **src** você encontrará os arquivos **user.js** e **auction.js**, estes arquivos são os arquivos da aplicação. Além deles, você encontrará o arquivo **app.js**, este arquivo demonstra a utilização dos outros dois.

Na pasta **tests* você terá duas subpastas, uma é onde você irá criar os arquivos de teste de unidade e na outra você criará os testes de integração

## Rodando a aplicação

Clone o repositório

```npm install```

```node src/app.js```

## Rodando testes

O arquivo **package.json** já está configurado para rodar o jest com a opção de coverage, para tal, use o comando:

```npm test``` 

Caso queira rodar apenas testes de unidade ou apenas teste de integração, você precisará passar isso como parametro para o npm test, por exemplo:

```npm test -- tests/unit```