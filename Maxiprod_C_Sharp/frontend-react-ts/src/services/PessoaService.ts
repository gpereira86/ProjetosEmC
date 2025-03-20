import axios from 'axios';
import { Pessoa } from '../types';
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getPessoas = async (): Promise<Pessoa[]> => {
  try {
    const response = await api.get('pessoas');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    throw error;
  }
};

export const createPessoa = async (pessoa: { nome: string, idade: number }) => {
  try {
    const response = await api.post('pessoas', pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
};

export const deletePessoa = async (id: number): Promise<void> => {
  try {
    await api.delete(`pessoas/${id}`);
  } catch (error) {
    console.error('Erro ao deletar pessoa:', error);
    throw error;
  }
};
