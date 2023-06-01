import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    user_tracking: UserTracking!
    first_name: String!
    last_name: String!
  }

  type UserTracking {
    lat: Float!
    lng: Float!
  }

  type Query {
    user(id: ID!): User
    viewer: User!
    nearbyUsers(lat: Float!, lng: Float!, distance: Float!): [User]!
  }
  type Mutation {
    login(name: String!, password: String!): String
  }
`;
