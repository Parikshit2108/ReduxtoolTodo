import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  method: "get",
  headers: {
    "Content-Type": "application/json/parikshit",
    timeout: 1000,
  },
  request: {
    statusText: "fetching sucessful",
  },
  // .. other options
  //  Authorization: `<Your Auth Token>`,
});

export default instance;
