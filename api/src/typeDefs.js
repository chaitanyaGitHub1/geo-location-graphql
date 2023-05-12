import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    user(id: ID!): User
    viewer: User!
    nearByUsers: String
  }
  type Mutation {
    login(name: String!, password: String!): String
  }
`;
