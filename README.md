# Projeto Final Reprograma - On18 Todas em Tech


<h1 align="center"><img src= "https://user-images.githubusercontent.com/109546269/208221818-1df27e8b-15c8-4d51-96fa-8192d055e95a.PNG" width=200px></h1>

<h2>Status do Projeto</h2>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
![GitHub Org's stars](https://img.shields.io/github/stars/camilafernanda?style=social)

# Índice
<!--ts-->
   * [Sobre](#sobre)
   * [Requisitos](#requisitos)
   * [Arquitetura da API](#arquitetura-da-api)
   * [Rotas HTTP](#rotas-http)
       * [Retorna rota default da aplicação](#retorna-rota-default-da-aplicação)
       * [Manipulação das Rotas Cabelos](#manipulação-das-rotas-cabelos)
       * [Manipulação das Rotas Usuários](#manipulação-das-rotas-usuários)
       * [Manipulação das Rotas Lojas](#manipulação-das-rotas-lojas)
       * [Manipulação das Rotas Salões](#manipulação-das-rotas-salões)
       * [Manipulação das Rotas Reserva](#manipulação-das-rotas-reserva)
   * [Ferramentas e Tecnologias](#ferramentas-e-tecnologias)
 
<!--te-->
 
 # 🧾Sobre


Desenvolvimento de API em JavaScript que visa ser uma plataforma de apoio e encontro para pessoas negras em transição capilar e cuidados dos fios. Obedencendo algumas regras de negócio mínimas como:
<p>

- [x] Não pode haver o mesmo tipo de fio cadastrado mais de uma vez;
- [x] Deve haver uma rota que traga todos os tipos de fio capilar e suas características (a fim de que o usuário se identifique e encontre o seu tipo de fio) e que a partir daí o usuário possa encontrar salões/lojas para o seu perfil capilar;
- [x] Deve ser possível atualizar os cuidados necessários para cada fio;
- [x] Não pode haver dois salões e/ou lojas com o mesmo CNPJ;
- [x] Deve haver uma rota que retorne salões ("/saloes"): Em geral; Por nome; Por id.
- [x] Deve haver uma rota que retorne lojas ("/lojas"): Em geral; Por nome; Por id.
- [x] Deve haver uma rota para cadastro de salão com autenticação;
- [x] Deve haver uma rota para cadastro de loja com autenticação;
- [x] Deve haver uma rota para cadastro/atualização de produto em loja;
- [x] Deve haver uma rota para cadastro de usuários;
- [x] Deve haver uma rota para login de usuários;
- [x] Deve ser possível agendar um horário (reserva) no salão de interesse;


</p>

# Requisitos 

<img src="https://user-images.githubusercontent.com/109546269/208222324-3f48abbd-dd24-4485-9d1e-45d8c91efc29.jpg" width="50" height="50"/> <img src="https://user-images.githubusercontent.com/109546269/208222418-fdbe18ba-e152-4dbd-af36-92b9e273ad56.png" width="50" height="50"/> <img src="https://user-images.githubusercontent.com/109546269/208222465-f6c47272-a637-4309-9af3-f544ac5cb840.png" width="50" height="50"/> <img src="https://user-images.githubusercontent.com/109546269/208222540-6d81cb23-91aa-412e-90c9-88066155343f.png" width="50" height="50"/>

* Ter instalado na sua máquina ou utilizar online: MongoDB, uma IDE (recomendamos o VSCODE).
* Como rodar a aplicação: Clone este repositório.
* Utilize o Insomnia para testes de rotas.
* Link do vercel:  https://sou-d-preto.vercel.app.
* Execute a aplicação: o servidor entra pela porta 8989.

# Arquitetura da API

<h1 align="center"> Arquitetura MVC </h1>
<h1 align="center"><img src="https://user-images.githubusercontent.com/109546269/208222928-f28cedd6-5dd1-4118-b8d1-215427748d7e.jpg"></h1>


# Rotas HTTP

## Retorna rota default da aplicação

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8989/`     |  Mensagem de apresentação (Index)    |             |

<br>

## Manipulação das Rotas Cabelos:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/cabelos/all`         | Retorna todos os cabelos cadastrados              |
| POST         | `/cabelos/create`      | Criar/cadastrar um tipo de fio novo               |
| Patch        | `/cabelos/update/:id`  | Atualizar/Substituir um fio já cadastrado         |


<br>

## Manipulação das Rotas Usuários:


| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/users/create`        | Criar/cadastrar um usuário                        |
| POST         | `/users/login`         | Rota de login de usuário                          |
| GET          | `/users/all`           | Retorna todos os usuários                         |
| GET          | `/users/+nome`         | Retorna todos os usuários por nome inserido       |
| PATCH        | `/users/update/:id`    | Atualizar/Substituir um usuário                   |
| DELETE       | `/users/delete/:id`    | Retorna a remoção de um usuário                   |

<br>

## Manipulação das Rotas Lojas:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/lojas/create`        | Criar/cadastrar um estabelecimento                |
| GET          | `/lojas/all`           | Retorna todos os estabelecimentos                 |
| GET          | `/lojas/+nome`         | Retorna todos os estabelecimentos por nome        |
| PATCH        | `/lojas/update/:id`    | Atualizar/Substituir um estabelecimento           |
| DELETE       | `/lojas/delete/:id`    | Retorna a remoção de um estabelecimento           |

<br>

## Manipulação das Rotas Salões:


| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/saloes/create`       | Criar/cadastrar um estabelecimento                |
| GET          | `/saloes/all`          | Retorna todos os estabelecimentos                 |
| GET          | `/saloes/+nome`        | Retorna todos os estabelecimentos por nome        |
| PATCH        | `/saloes/update/:id`   | Atualizar/Substituir um estabelecimento           |
| DELETE       | `/saloes/delete/:id`   | Retorna a remoção de um estabelecimento           |

<br>

## Manipulação das Rotas Reserva:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/reserve/create`      | Criar/cadastrar um estabelecimento                |
| GET          | `/reserve/all`         | Retorna todos os estabelecimentos                 |
| PATCH        | `/reserve/update/:id`  | Atualizar/Substituir um estabelecimento           |
| DELETE       | `/reserve/delete/:id`  | Retorna a remoção de um estabelecimento           |

<br>

# 🛠Ferramentas e Tecnologias

<table>
<tr>
	<th>Dependência</th>
   <th>Versão</th>
</tr>
<tr>
	<td>Bcrypt</td>
   <td>5.1.0</td>
	
</tr>
<tr>
	<td>Cors</td>
   <td>2.8.5</td>
</tr>
<tr>
	<td>Dotenv</td>
   <td>16.0.3</td>
</tr>
<tr>
	<td>Express</td>
   <td>4.18.2</td>
</tr>
<tr>
	<td>Jest</td>
   <td>29.3.1</td>
</tr>
<tr>
	<td>Jsonwebtoken</td>
   <td>8.5.1</td>
</tr>
<tr>
	<td>Mongoose</td>
   <td>6.8.0</td>
</tr>
<tr>
	<td>Nodemon</td>
   <td>2.0.20</td>
</tr>
<tr>
	<td>Supertest</td>
   <td>6.3.3</td>
</tr>
<tr>
	<td>Moment</td>
   <td>2.29.4</td>
</tr>
</table>

<h3>  Desenvolvido por:</h3>

<div>
	[![Linkedin Badge](https://img.shields.io/badge/-Kalliandra-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/kalliandra-carla-de-lima-b68678127/)](https://www.linkedin.com/in/kalliandra-carla-de-lima-b68678127/)

</div>







