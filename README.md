<h1 align="center">
  <img alt="plann.er logo" title="#NLW-Journey-Logo" src=".github/logo.svg" width="250px" />
</h1>

This is the backend of the Planner application, developed with Node.js and Fastify, using Prisma for ORM and SQLite as the database.

## About 🎯

The planner-api is responsible for managing user data, tasks, and events, providing a RESTful API for the Planner application frontend.

## Features 📝

The application must be able to

- [✔] Register a new trip;
- [✔] View detailed trip data;
- [✔] Update the trip;
- [✔] Confirm the trip;
- [✔] Confirm the participant on the trip;
- [✔] Create links;
- [✔] Create activities;
- [✔] View activities;
- [✔] Create a participant invitation;
- [✔] View the participants;
- [✔] View a specific participant;

## Technologies 💻

- [Node](https://nodejs.org)
- [Fastify](https://fastify.dev)
- [Zod](https://zod.dev)
- [Prisma](https://www.prisma.io)
- [Nodemailer](https://nodemailer.com)
- [Typescript](https://www.typescriptlang.org)

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

## LICENSE ®️

This project is under the MIT license. Consult the [LICENSE](LICENSE) for details.
