import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BRQUEIROZ_API_URL || "http://localhost:3001",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Erro na resposta da API:", error.response);

      const message =
        error.response.data?.message ||
        `Erro ${error.response.status}: ${error.response.statusText}`;

      return Promise.reject(new Error(message));
    } else if (error.request) {
      return Promise.reject(new Error("Sem resposta do servidor"));
    } else {
      return Promise.reject(new Error("Erro desconhecido na requisição"));
    }
  }
);

export default api;
