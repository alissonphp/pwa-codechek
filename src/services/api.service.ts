import axios from "axios";

export const API_TOKEN = process.env.REACT_APP_API_TOKEN || "token1!2#4teste"

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

api.interceptors.request.use(
  async config => {
    config.headers = {
      'Authorization': `Bearer ${API_TOKEN}`
    }
    return config
  }, error => {
    Promise.reject(error);
  }
)

export default api;
