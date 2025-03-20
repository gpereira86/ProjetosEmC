import axios from 'axios';
import { Pessoa } from '../types';
import { API_BASE_URL } from "../utils/constants";

// Configuração do axios para a URL base da API
const api = axios.create({
  baseURL: API_BASE_URL, // Substitua pela URL da sua API
});

// Função para pegar todas as pessoas
export const getPessoas = async (): Promise<Pessoa[]> => {
  try {
    const response = await api.get('pessoas');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    throw error;
  }
};

// Função para criar uma nova pessoa
export const createPessoa = async (pessoa: { nome: string, idade: number }) => {
  try {
    const response = await api.post('pessoas', pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
};

// Função para deletar uma pessoa
export const deletePessoa = async (id: number): Promise<void> => {
  try {
    await api.delete(`pessoas/${id}`);
  } catch (error) {
    console.error('Erro ao deletar pessoa:', error);
    throw error;
  }
};
