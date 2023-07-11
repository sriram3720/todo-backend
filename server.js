const { ApolloServer, gql } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');
const {resolvers} = require('./graphql/resolvers');
const express = require('express');
const typeDefs = require('./graphql/schema');



// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs, // Your GraphQL schema
  resolvers, // Your GraphQL resolvers
  context: () => ({ prisma }) // Provide the PrismaClient instance to the context
});


async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen({ port: PORT }, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
});