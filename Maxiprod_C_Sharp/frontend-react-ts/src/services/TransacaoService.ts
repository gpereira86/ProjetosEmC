import axios from 'axios';
import { API_BASE_URL } from "../utils/constants";
import { Pessoa, Transacao } from "../types";

const api = axios.create({
    baseURL: API_BASE_URL,
  });

export const getTransacoes = async (): Promise<Transacao[]> => {
  try {
    const response = await api.get('transacoes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    throw error;
  }
};


export const criarTransacao = async (transacao: { descricao: string, valor: number, tipo: string, pessoaId: number}) => {
  try {
    console.log(transacao)
    const response = await api.post('transacoes', transacao);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    throw error;
  }
};

export const deletarTransacao = async (id: number): Promise<void> => {
  try {
    await api.delete(`transacoes/${id}`);
  } catch (error) {
    console.error('Erro ao deletar transação:', error);
    throw error;
  }
};
