import React, { useState, useEffect } from 'react';
import { getPessoas, createPessoa, deletePessoa } from '../services/PessoaService';
import { Pessoa } from '../types';

const Pessoas: React.FC = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [novoNome, setNovoNome] = useState<string>('');
  const [novaIdade, setNovaIdade] = useState<number>(0);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const data = await getPessoas();
        setPessoas(data);
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
      }
    };

    fetchPessoas();
  }, []);

  const handleCreatePessoa = async () => {
    const pessoa: Pessoa = { id: 0, nome: novoNome, idade: novaIdade };
    try {
      await createPessoa(pessoa);
      setNovoNome('');
      setNovaIdade(0);
      const data = await getPessoas();
      setPessoas(data);
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
    }
  };

  const handleDeletePessoa = async (id: number, nome: string) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir ${nome}?\nEssa ação irá excluir todas as transações de ${nome}`);
    
    if (confirmDelete) {
      try {
        await deletePessoa(id);
        const data = await getPessoas();
        setPessoas(data);
      } catch (error) {
        console.error('Erro ao deletar pessoa:', error);
      }
    }
  };  

  return (
    <div className="container mt-2">

      <h2 className="fw-bolder text-start mb-4 custom-color-blue">
        Cadastro de Pessoa
      </h2>

      <form className="row justify-content-center">
        <div className="col-sm-6 col-12">
          <input
            className="form-control mb-2" 
            type="text"
            placeholder="Nome"
            value={novoNome || ''}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </div>
        <div className="col-sm-3 col-12">
          <input
            className="form-control mb-2"
            type="number"
            placeholder="Idade"
            value={novaIdade || ''}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d+$/.test(value)) {
                setNovaIdade(Number(value));
              }
            }}
          />
        </div>
        <div className="text-center">
          <button className="btn custom-primary-button mt-3 me-2" onClick={handleCreatePessoa}>
            Cadastrar Pessoa
          </button>

          <button className="btn btn-secondary mt-3" type="reset" onClick={() => window.location.href = '/pessoas'}>
            Limpar Formulário
          </button>

        </div>
      </form>


      <div className="container my-5 ">

        <hr className="custom-gray-line"/>
        <h4 className="text-center mt-2 fw-bolder">Pessoas Cadastrados</h4>

        <div className="table-responsive overflow-auto">

          <table className="table align-middle mt-4 custom-table-header">
            <thead className="table-light text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pessoas.map((pessoa) => (

                <tr key={pessoa.id}>

                  <td className="col-sm-1 text-center">{pessoa.id}</td>
                  <td className="col-sm-7 ps-5">{pessoa.nome}</td>
                  <td className="col-sm-2 text-center">{pessoa.idade}</td>

                  <td className="col-sm text-center">
                    <a
                      href="#!"
                      className="d-inline-block text-decoration-none custom-primary-button danger"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeletePessoa(pessoa.id, pessoa.nome);
                      }}
                      data-id={pessoa.id}
                      data-name={pessoa.nome}>
                      <i className="fa-regular fa-trash-can"></i>
                      <span className="d-none d-sm-inline">Deletar</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};


export default Pessoas;