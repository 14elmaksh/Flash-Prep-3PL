import axios from "axios";

const baseUrl_Production = "http://localhost:5000";
const baseUrl_Develop = "http://localhost:5000";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? baseUrl_Develop
      : baseUrl_Production,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;