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