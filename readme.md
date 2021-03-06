# Social feeds
## _Rede social de posts_

Social feed é uma aplicação inspirada em rede sociais que se baseiam principalmente em postagens de imagens.

Muitas ideias e conceitos de infraestrutura deste projeto são baseadas em conceitos do repositório [clean-ts-api](https://github.com/rmanguinho/clean-ts-api) de Rodrigo manguinho.

## Features

- Usuario pode se cadastrar
- Usuário pode Logar na aplicação
- O usuário pode ver todos os posts de todos os usuários cadastrados
- O usuário pode criar um post
- O usuário pode ver todos os posts que ele criou
- O usuário pode deletar um post que ele criou

## Techs

Social feed tem como principais tecnologias utilizadas:

- [Express](https://expressjs.com) - Microframework que otimiza a construção de aplicações web e API
- [Typeorm](https://typeorm.io/#/) - ORM com grande afinidade com códigos typescript
- [Mysql](https://www.mysql.com) - Banco sql
- [Typescript](https://www.typescriptlang.org) - superconjunto que adiciona tipagem e alguns outros recursos ao javascript.
- [Docker](https://www.docker.com) - Serviço de virtualização de nível de sistema operacional

## Installation

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/edersonrdg/socialfeed.git
cd socialfeed
cd backend
npm install
```

## Development
- Primeiro configure os dados relacionados a seu banco de dados no ormconfig.json

- Segundo Crie um arquivo .env na pasta raiz e nele adicione os dados relacionados a porta e jwt secrete como no exemplo abaixo
```sh
PORT=3333
JWT_SECRETE=OKQWDQW09K1209DK2109KD1209Q
```

- Terceiro rode o servidor
```sh
npm run dev
```

## Autor

<a href="https://github.com/edersonrdg">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60035985?s=460&u=3f67302dcc7cc3e33a51c71ad77fba31d6d2f6e1&v=4" width="100px;" alt=""/>
 <br />
 </a>


Feito por Ederson rodrigo, Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-edersonsl-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/edersonsl/)](https://www.linkedin.com/in/edersonsl/)
[![Gmail Badge](https://img.shields.io/badge/-edersonrodrigo31@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:edersonrodrigo31@gmail.com)](mailto:edersonrodrigo31@gmail.com)

## License

MIT

Obrigado pela visita!
