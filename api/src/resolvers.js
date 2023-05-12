import jwt from "jsonwebtoken";

import { users } from "./data";
import { getDistance } from "geolib";
import * as geolib from "geolib";
const query = `
query MyQuery {
  user(limit: 10) {
    id
    user_tracking {
      lat
      lng
    }
    first_name
    last_name
  }
}

`;

export default {
  Query: {
    user(parent, { id }) {
      return users.find((user) => user.id === id);
    },
    viewer(parent, args, { user }) {
      return users.find(({ id }) => id === user.sub);
    },
    async nearByUsers(parent, args, { lat, lng, distance }) {
      let nearbyLocations = [];
      const { callHasura } = await import("./hasura");
      await callHasura(query)
        .then((data) => {
          let geo = {
            latitude: data.lat,
            longitude: data.lan,
          };

          nearbyLocations.push(geo);

          const nearby = geolib.findNearest(
            currentLocation,
            nearbyLocations,
            0,
            distance
          );
        })
        .catch((error) => console.error(error));
      return nearby;
    },
  },
  Mutation: {
    login(parent, { name, password }) {
      const { id, permissions, roles } = users.find(
        (user) => user.name === name && user.password === password
      );
      return jwt.sign(
        { "https://usil.com/graphql": { roles, permissions } },
        "SUPER_SECRET",
        { algorithm: "HS256", subject: id, expiresIn: "1d" }
      );
    },
  },
};
