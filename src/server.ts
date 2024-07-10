import fastify from "fastify";

const app = fastify();

app.get("/teste", () => {
  return "aoba";
});

app.listen({ port: 8000 }).then(() => {
  console.log("Server Running");
});
