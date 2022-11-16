import axios from "axios";

export const API_TOKEN = "MQ==|YXBwX21vYmlsZQ==|a06bc11e280e878eb0acb404867cc876d80ee9d519a7131f2d18bed6d3f72f42c608f99115a773eeb160b49c99ab627f630a8ceceb6f1620772810cc6058a64d";

const api = axios.create({
  baseURL: "https://www.codecheck.com.br/public/api/",
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
