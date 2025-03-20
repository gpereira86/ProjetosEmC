// Exportando o tipo Pessoa
export interface Pessoa {
    id: number;
    nome: string;
    idade: number;
  }
  
export interface Transacao {
  id?: number;
  descricao: string;
  valor: number;
  tipo: string;
  pessoaId: number;
}

export interface Totais {
  pessoas: {
    id: number;
    nome: string;
    idade: number,
    totalReceitas: number;
    totalDespesas: number;
    saldo: number;
    totalTransacoes: number;
  }[];
  totalReceitas: number;
  totalDespesas: number;
  saldoGeral: number;
  totalTransacoes: number;
  totalPessoas: number; 
}
