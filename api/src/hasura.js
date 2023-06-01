async function callHasura(query) {
    const url = "http://localhost:8080/v1/graphql";
  
    try {
      const axios = await import("axios");
      const response = await axios.default.post(url, { query });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export default { callHasura };
  