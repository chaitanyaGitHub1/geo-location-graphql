import { ApolloServer } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import express from "express";
import jwt from "jsonwebtoken";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const port = 4000;
const app = express();

const getUserFromToken = async (token) => {
  console.log(token, "...");
  try {
    if (token) {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, "SUPER_SECRET");
      return decoded["https://usil.com/graphql"];
    }
    return null;
  } catch (error) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization || "";
    const userInfo = await getUserFromToken(token);
    console.log(userInfo, "...+..");
    return { userInfo };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port }, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
});
