import axios from "axios";
import { Totais } from "../types";
import { API_BASE_URL } from "../utils/constants";

// Configuração do axios para a URL base da API
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTotais = async (): Promise<Totais> => {
  try {
    const response = await api.get("totais");
    
    // A resposta já será um objeto, então podemos retorná-la diretamente
    return response.data; // Retorna o objeto Totais
  } catch (error) {
    console.error("Erro ao buscar os totais:", error);
    throw error;
  }
};
