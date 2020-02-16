# MENN Auth API 🙌🎇🎆

MENN stands for **MongoDB, Express, Nuxt JS, Node JS**

This application was built by following the best practices and also written in **TypeScript**

# Description

  This was built using Express JS Framework, written in TypeScript following OOP concepts
> **Storing Configuration**: Stores into process.env using [DOTENV](https://github.com/motdotla/dotenv) 

> **Database**: Uses [MongoDB](https://www.mongodb.com/) object modeling with [Mongoose](https://mongoosejs.com/)

> **Routing**: Uses [express router](https://expressjs.com/en/api.html#express.router)

> **Form Validation**: Uses [express validator](https://express-validator.github.io/docs/)

> **Token**: Uses [JWT](https://jwt.io/)

# Contents

- [Global requisites](#global-requisites)
- [App Structure](#app-structure)
- [Install, Configure & Run](#install-configure--run)
- [Routes](#routes)

# Global requisites

- [Node JS](https://nodejs.org/en/)
- [TSC](https://www.typescriptlang.org/docs/handbook/compiler-options.html) (TypeScript Compiler)
- [TS Node](https://github.com/TypeStrong/ts-node)

# App Structure

```bash
│   index.ts
│
├───controllers
│   └───api
│       └───auth
│               Login.ts
│               Register.ts
│
├───interfaces
│   └───models
│           User.ts
│
├───middlewares
│   │   CORS.ts
│   │   Http.ts
│   │   Kernel.ts
│   │
│   └───validators
│           Login.ts
│           Register.ts
│
├───models
│       User.ts
│
├───providers
│       App.ts
│       Database.ts
│       Express.ts
│       Locals.ts
│       Routes.ts
│
└───routes
    │   default.ts
    │
    └───api
            index.ts
```

# Install, Configure & Run

```bash
# Clone Repo
$ git clone https://github.com/ChrisLegaxy/MENN-auth-api.git

# Go into the directory
$ cd MENN-auth-api

# Install dependencies
$ npm install

# Edit .env file based on yours
$ vim .env

# Run in development mode
$ npm run dev
```

# Routes

```sh
# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/auth/login
  POST   | /api/auth/register
+--------+-------------------------+
```

## Author

> **Vansen Hengmeanrith (Chris)** 😎

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
