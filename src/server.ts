import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

app.get("/cadastrar", async () => {
  await prisma.trip.create({
    data: {
      destination: "Florianópolis",
      starts_at: new Date(),
      ends_at: new Date(),
    },
  });

  return "Registro Cadastrado";
});

app.get("/listar", async () => {
  return await prisma.trip.findMany();
});

app.listen({ port: 8000 }).then(() => {
  console.log("Server Running");
});
