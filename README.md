<h1 align="center">
   Backend Delivery
</h1>

## ⚗️ O que é o Backend Delivery?

Esta aplicação é um backend feito em Node.JS, Prisma, jsonwebtoken, bcrypt, express and Postgres. Para exemplificar, vou dividir as API's destes projetos em 4 grupos, Client, Deliveryman, Deliveries e Authenticate. A ideia do projeto é que clientes autenticados possam solicitar um serviço de frete e o deliveryman aceitar e finalizar estas tarefas.
<br>
<br>
O Grupo do Client tem 3 API's:
- 🔹 Create Client
- 🔹 Delete Client
- 🔹 Deliveries (esta api retorna todas as deliveries criadas por ele)

O grupo Deliveryman tem as seguintes API's:
- 🔹 Deliveries (esta API lista todas as entregas que ele atribuiu para si)
- 🔹 Create deliveryman
- 🔹 End date (esta api finaliza a deliverie, preenchendo o campo end_at)
- 🔹 Accept Delivery (esta api permite o deliveryman atribuir a tarefa para ele)

Authenticate
- 🔹 Auth client
- 🔹 Auth Deliveryman
- Ambas estas API's de auth geram um token bearer

Deliveries
- 🔹 Deliveries (lista todas as entregas disponíveis, ou seja, que nenhum deliveryman atribuiu para si)
- 🔹 Create delivery

## 🚀 Tecnologias
- 🔹 [Prisma](https://www.prisma.io)
- 🔹 [BCrypt](https://www.npmjs.com/package/bcrypt)
- 🔹 [express](https://expressjs.com)
- 🔹 [jsonWebToken](https://jwt.io)
- 🔹 [Typescript](https://www.typescriptlang.org)
- 🔹 [Cors](https://www.npmjs.com/package/cors)
- 🔹 [Postgress](https://www.postgresql.org)

## :closed_book: Como usar?

Antes de iniciar, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

```bash
# Clone this project
$ git clone https://github.com/PedroHenriqueFernandes/coffee-delivery.git
# Access
$ cd back-delivery
# Install dependencies
$ yarn or npm
# Create a database in postgress 
# Create an .env file in the root of the project and write
$ DATABASE_URL="postgres://postgres:yourpasswordhere@localhost:5432/yourdatabasenamehere?schemas=public"
# Run the project
$ yarn run dev or npm run dev
# The server will initialize in the <http://localhost:3000>
```

## Imagens do projeto

![image](https://user-images.githubusercontent.com/82915233/215141544-e52793aa-71d9-460d-9d2f-76f14c0eb8c8.png)

