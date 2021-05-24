import axios from "axios";

const api = axios.create({
  baseURL: "https://cep.awesomeapi.com.br/",
});

export default api;
