// hasura.js module
import fetch from "node-fetch";

async function callHasura(query) {
  const url = "http://localhost:8080/v1/graphql";

  try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return console.error(error);
    }
}

export default { callHasura };
