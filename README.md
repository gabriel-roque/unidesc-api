<p align="center">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/unidesc-api.png" width="450"/>
</p>

<hr>

## Summary

* [Resource Alunos](#-resource-alunos)
* [Resource Professores](#-resource-professores)
* [Resource Turmas](#-resource-turmas)

## :bulb: Introduction

A simple API UNIDESC for using in mobile app Ionic 4 starter with (MongoDB, Node.JS and ExpressJS)

## :memo: Minimal Requirements

- NodeJs 12.x
- MongoDB 4.2.2

## 🚀 Install

```sh
$ git clone https://github.com/gabriel-roque/unidesc-api
$ cd unidesc-api
$ npm i
```

## 📈 Run app

```sh
$ mongod
$ npm run dev
```

> Check **api-dev** in http://localhost:3000/v1/api/ for _**DEVELOPMENT**_

> Check **api-production** in https://unidesc-api.herokuapp.com/v1/api/ for _**PRODUCTION**_

## :triangular_ruler: How to use

### 🎓 Resource Alunos

✅ **GET** `/v1/api/alunos`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "alunos": [
    {
      "_id": "5ebc156acb1b21316156f520",
      "nome": "Maverik Douglas",
      "matricula": 235646,
      "semestre": 4,
      "__v": 0
    }
  ]
}
```

<br>

✅ **POST** `/v1/api/alunos`

➡ **Request**

```json
{
  "nome": "Maverik Douglas",
  "matricula": 235646,
  "semestre": 4
}
```

| Attribute | Type     |
| --------- | -------- |
| nome      | `String` |
| matricula | `Number` |
| semestre  | `Number` |

<br>

✅ **PUT** `/v1/api/alunos/:id`

➡ **Request**

```json
{
  "nome": "Maverik Douglas",
  "matricula": 235646,
  "semestre": 4
}
```

| Attribute | Type     |
| --------- | -------- |
| nome      | `String` |
| matricula | `Number` |
| semestre  | `Number` |

<br>

✅ **DELETE** `/v1/api/alunos/:id`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "msg": "Aluno excluído."
}
```

<hr>

### 👩‍🏫 Resource Professores

✅ **GET** `/v1/api/professores`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "professores": [
    {
      "_id": "5ebc156acb1b21316156f521",
      "nome": "Matheus Ramon",
      "matricula": 235646,
      "telefone": "+55912344567",
      "email": "matheus@gmail.com",
      "__v": 0
    }
  ]
}
```

<br>

✅ **POST** `/v1/api/professores`

➡ **Request**

```json
{
  "nome": "Matheus Ramon",
  "matricula": 235646,
  "telefone": "+55912344567",
  "email": "matheus@gmail.com"
}
```

| Attribute | Type     |
| --------- | -------- |
| nome      | `String` |
| matricula | `Number` |
| telefone  | `String` |
| email     | `String` |

<br>

✅ **PUT** `/v1/api/professores/:id`

➡ **Request**

```json
{
  "nome": "Matheus Ramon EDIT",
  "matricula": 235646,
  "telefone": "+55912344567",
  "email": "matheus@gmail.com"
}
```

| Attribute | Type     |
| --------- | -------- |
| nome      | `String` |
| matricula | `Number` |
| telefone  | `String` |
| email     | `String` |

<br>

✅ **DELETE** `/v1/api/professores/:id`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "msg": "Professor excluído."
}
```

<hr>

### 📙 Resource Turmas

✅ **GET** `/v1/api/turmas`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "turmas": [
    {
      "_id": "5ebc156acb1b21316156f522",
      "codigo": 54564,
      "lider": "Gabriel Roque",
      "email": "gabriel@gmail.com",
      "__v": 0
    }
  ]
}
```

<br>

✅ **POST** `/v1/api/turmas`

➡ **Request**

```json
{
  "codigo": 54564,
  "lider": "Gabriel Roque",
  "email": "gabriel@gmail.com"
}
```

| Attribute | Type     |
| --------- | -------- |
| codigo    | `Number` |
| lider     | `String` |
| eamil     | `String` |

<br>

✅ **PUT** `/v1/api/turmas/:id`

➡ **Request**

```json
{
  "codigo": 54564,
  "lider": "Gabriel Roque EDIT",
  "email": "gabriel@gmail.com"
}
```

| Attribute | Type     |
| --------- | -------- |
| codigo    | `Number` |
| lider     | `String` |
| eamil     | `String` |

<br>

✅ **DELETE** `/v1/api/turmas/:id`

↩ **Response**

```json
{
  "version": "v1",
  "origin": "unidesc-api",
  "msg": "Turma excluída."
}
```

## 👤 Authors

| Gabriel Roque                                                                       |
| ----------------------------------------------------------------------------------- |
| <img src="https://avatars2.githubusercontent.com/u/32438220?s=460&v=4" width="110"> |
| <a href="https://github.com/gabriel-roque">Github</a>                               |
| <a href="https://www.linkedin.com/in/gabriel-roque/">Linkedin</a>                   |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/gabriel-roque/unidesc-api/issues).

## Show your support

Give a ⭐️ if this project helped you!

<p align="center">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/logo-gabriel-roque.png" width="200"/>
</p>
