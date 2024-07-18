<h1 align="center">
  <img alt="plann.er logo" title="#NLW-Journey-Logo" src=".github/logo.svg" width="250px" />
</h1>

This is the backend of the Planner application, developed with Node.js and Fastify, using Prisma for ORM and SQLite as the database.

## About 🎯

The planner-api provides a RESTful API that serves as the backend for the Planner application's frontend.

## Technologies 💻

- [Node](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org)
- [Fastify](https://fastify.dev)
- [Zod](https://zod.dev)
- [Prisma](https://www.prisma.io)
- [Nodemailer](https://nodemailer.com)

## Installation 🛠

Follow the steps below to set up and run the project locally.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MateusFS99/planner-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd planner-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a .env file at the root of the project and configure the environment variables as specified in the .env.example file.
5. Run the Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the server:
   ```bash
   npm run dev
   ```

## License ®️

This project is under the MIT license. Consult the [LICENSE](LICENSE) for details.
