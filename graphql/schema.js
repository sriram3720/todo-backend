// graphql/schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    dueDate: String!
    tomatoes: Int!
  }

  input CreateTaskInput {
    title: String!
    description: String!
    dueDate: String!
  }

  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: ID!, input: CreateTaskInput!): Task!
    deleteTask(id: ID!): Task!
  }
`;

module.exports = typeDefs;
