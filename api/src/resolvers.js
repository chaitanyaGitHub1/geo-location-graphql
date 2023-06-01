import jwt from "jsonwebtoken";
import { users } from "./data";
import * as geolib from "geolib";
import http from 'http';

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

function calculateDistance(lat1, lng1, lat2, lng2) {
  // Use your distance calculation logic here
  // For simplicity, let's assume a basic distance calculation
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

export default {
  Query: {
    user(parent, { id }) {
      return users.find((user) => user.id === id);
    },
    viewer(parent, args, { user }) {
      return users.find(({ id }) => id === user.sub);
    },
    nearbyUsers: async (parent, { lat, lng, distance }, { userInfo }) => {
      console.log(userInfo, "jjß");
      if (!userInfo.roles.includes("admin")) {
        throw new Error("You don't have permission to access nearByUsers.");
      }

      const url = "http://localhost:8080/v1/graphql";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const req = http.request(url, options);
        req.write(JSON.stringify({ query }));

        const response = await new Promise((resolve, reject) => {
          req.on("response", (res) => {
            let data = "";
            res.on("data", (chunk) => {
              data += chunk;
            });
            res.on("end", () => {
              resolve(JSON.parse(data));
            });
          });

          req.on("error", (error) => {
            reject(error);
          });

          req.end();
        });

        console.log(response);
        const users = response.data.user;
        const nearbyUsers = users.filter((user) => {
          const userLat = user.user_tracking.lat;
          const userLng = user.user_tracking.lng;
          const userDistance = calculateDistance(lat, lng, userLat, userLng);
          return userDistance <= distance;
        });
        return nearbyUsers;
      } catch (error) {
        console.error(error);
        return [];
      }
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
