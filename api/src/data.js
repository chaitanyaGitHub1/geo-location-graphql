export const users = [
  {
    id: "1",
    name: "admin",
    email: "admin@usil.in",
    password: "admin",
    roles: ["admin"],
    permissions: ["read:any_user", "read:own_user"]
  },
  {
    id: "2",
    name: "chaitanya",
    email: "ychaitu@gmail.in",
    password: "chaitu",
    roles: ["employee"],
    permissions: ["read:own_user"]
  }
];
