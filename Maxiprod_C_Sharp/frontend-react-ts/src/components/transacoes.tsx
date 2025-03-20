import React, { useState, useEffect } from "react";
import { getTransacoes, criarTransacao, deletarTransacao } from "../services/TransacaoService";
import { getPessoas } from '../services/PessoaService';
import { Transacao, Pessoa } from "../types";
import '../assets/css/style.css';
import RadioForm from "./radioTransaction";

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [novaTransacao, setNovaTransacao] = useState<Transacao>({
    descricao: "",
    valor: 0,
    tipo: "",
    pessoaId: 0
  });
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);


  useEffect(() => {
    carregarTransacoes();
    carregarPessoas();
  }, []);

  const carregarTransacoes = async () => {
    try {
      const data = await getTransacoes();
      setTransacoes(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const carregarPessoas = async () => {
   try {
       const data = await getPessoas();
       setPessoas(data);
   } catch (error) {
       console.error('Erro ao carregar pessoas:', error);
   }
  };
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
  
    setNovaTransacao((prevState) => ({
      ...prevState,
      [name]: name === 'pessoaId' ? Number(value) : type === 'number' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleOptionChange = (value: string) => {
    // Atualiza o tipo da transação
    setNovaTransacao((prevState) => ({
      ...prevState,
      tipo: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await criarTransacao(novaTransacao);
      setNovaTransacao({ descricao: "", valor: 0, tipo: "", pessoaId: 0 });
      carregarTransacoes();
      carregarPessoas();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletarTransacao(id);
      carregarTransacoes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
        <div className="container mt-2">
            <h2 className="fw-bolder text-start mb-4 custom-color-blue">
                Cadastro de Receitas e Despesas        
            </h2>


            <form onSubmit={handleSubmit} className="mb-3">

                <div className="row justify-content-center mb-3">
                    <div className="col-sm-3 col-12">
                        <div className="pb-1">
                            <span>Pessoa Responsável pela transação:</span>
                        </div>

                        <select
                        className="form-control mb-2"
                        name="pessoaId"
                        value={novaTransacao.pessoaId || ""}
                        onChange={handleChange}
                        required
                        >
                            <option value="" disabled>Selecione uma pessoa</option>
                            {pessoas.map((pessoa) => (
                                <option key={pessoa.id} value={pessoa.id}>
                                {pessoa.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <RadioForm selectedOption={novaTransacao.tipo} onOptionChange={handleOptionChange} />

                </div>
                
                <div className="row justify-content-center mb-3">
                    <div className="col-sm-6 col-12">
                        <input
                        className="form-control mb-2"
                        type="text"
                        name="descricao"
                        placeholder="Descrição"
                        value={novaTransacao.descricao || ''}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-sm-3 col-12">
                        <input
                        className="form-control mb-2"
                        type="number"
                        name="valor"
                        placeholder="Valor"
                        value={novaTransacao.valor || ''}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn custom-primary-button me-2" type="submit">
                        Cadastrar Transação
                    </button>

                    <button className="btn btn-secondary" type="reset" onClick={() => window.location.href = '/transacoes'}>
                        Limpar Formulário
                    </button>

                </div>

            </form>

        </div>

        <div className="container my-4">                   
            <hr className="custom-gray-line"/>
            <h4 className="text-center mt-2 fw-bolder">Pessoas Cadastrados</h4>

            <div className="table-responsive">
                <table className="table align-middle custom-table-header mt-3">
                    <thead className="table-light text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Descrição da Transação</th>
                            <th scope="col">Tipo de Custo</th>
                            <th scope="col">Custo</th>
                            <th scope="col">Pessoa</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transacoes.map((transacao) => {
                            const pessoa = pessoas.find(p => p.id === transacao.pessoaId);
                            const nomePessoa = pessoa ? pessoa.nome : 'Pessoa não encontrada';

                            return (
                            <tr key={transacao.id}>
                                
                                    <td className="col-sm text-center">{transacao.id}</td>
                                    <td className="col-sm ps-5">{transacao.descricao}</td>
                                    <td className="col-sm ps-5">{transacao.tipo}</td>
                                    <td className="col-sm ps-5">{transacao.valor}</td>
                                    <td className="col-sm ps-5">{nomePessoa}</td>

                                    <td className="col-sm text-center">
                                        <a
                                            href="#!"
                                            className="d-inline-block text-decoration-none custom-primary-button danger"
                                            onClick={(e) => {
                                            e.preventDefault(); // Impede o comportamento padrão de navegação
                                            try {
                                                console.log('Deletando pessoa com ID:', transacao.id); // Verifique o ID da pessoa
                                                handleDelete(transacao.id!); // Chama a função de exclusão
                                                window.location.href = '/transacoes'
                                            } catch (error) {
                                                console.error('Erro ao deletar transação:', error);
                                            }
                                            }}
                                            data-id={transacao.id}
                                            data-name={transacao.descricao}>
                                            <i className="fa-regular fa-trash-can"></i>
                                            <span className="d-none d-sm-inline">Deletar</span>
                                        </a>
                                    </td>
                                
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div> 

    </div>
  );
};

export default Transacoes;
