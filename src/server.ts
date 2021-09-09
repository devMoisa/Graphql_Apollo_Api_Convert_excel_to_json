import express from "express";
import dotenv from "dotenv";

import { contexts, resolvers, typeDefs } from "./graphql/squema";
const { ApolloServer, gql } = require("apollo-server-express");
const { graphqlUploadExpress } = require("graphql-upload");

async function startServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    contexts: contexts,
  });

  dotenv.config();

  await server.start();

  const app = express();

  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  await new Promise(r => app.listen({ port: process.env.APP_PORT }, r));

  console.log(
    ` Server ready at http://localhost:${process.env.APP_PORT}${server.graphqlPath} 🚀`,
  );
}

startServer();
