import axios from "axios";

export const api = axios.create({
  // baseURL: "https://projetorpgbackend-production.up.railway.app/"
  baseURL: "http://localhost:8080"
});