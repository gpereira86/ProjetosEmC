import axios from "axios";
import { Totais } from "../types";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTotais = async (): Promise<Totais> => {
  try {
    const response = await api.get("totais");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os totais:", error);
    throw error;
  }
};
