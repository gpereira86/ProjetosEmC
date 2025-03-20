import React, { useState, useEffect } from 'react';
import { getPessoas, createPessoa, deletePessoa } from '../services/PessoaService';
import { Pessoa } from '../types';

const Pessoas: React.FC = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [novoNome, setNovoNome] = useState<string>('');
  const [novaIdade, setNovaIdade] = useState<number>(0);

  // Carregar as pessoas quando o componente for montado
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

  // Função para criar uma nova pessoa
  const handleCreatePessoa = async () => {
    const pessoa: Pessoa = { id: 0, nome: novoNome, idade: novaIdade };
    try {
      await createPessoa(pessoa);
      setNovoNome('');
      setNovaIdade(0);
      // Recarregar a lista de pessoas
      const data = await getPessoas();
      setPessoas(data);
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
    }
  };

  // Função para deletar uma pessoa
  const handleDeletePessoa = async (id: number) => {
    try {
      await deletePessoa(id);
      // Recarregar a lista de pessoas
      const data = await getPessoas();
      setPessoas(data);
    } catch (error) {
      console.error('Erro ao deletar pessoa:', error);
    }
  };

  return (
    <div className="container mt-2">

      <h2 className="fw-bolder text-start mb-4 custom-color-blue">
        Cadastro de Pessoa
        {/* {formData.id ? `Edição da Pessoa: ${formData.nome}` : 'Cadastro de Pessoa'} */}
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
              // Verifica se o valor é um número inteiro
              if (/^\d+$/.test(value)) {
                setNovaIdade(Number(value)); // Atualiza o estado apenas se for um número inteiro
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
                                {/* <a href="{{ url('editar-pessoa/' ~ person.id) }}"
                                   className="d-inline-block text-decoration-none custom-primary-button warning mb-1">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                    <span className="d-none d-sm-inline">Editar</span>
                                </a> */}
                                <a
                                  href="#!" // Impede a navegação ao clicar
                                  className="d-inline-block text-decoration-none custom-primary-button danger"
                                  onClick={(e) => {
                                    e.preventDefault(); // Impede o comportamento padrão de navegação
                                    try {
                                      console.log('Deletando pessoa com ID:', pessoa.id); // Verifique o ID da pessoa
                                      handleDeletePessoa(pessoa.id); // Chama a função de exclusão
                                      window.location.href = '/pessoas'
                                    } catch (error) {
                                      console.error('Erro ao deletar pessoa:', error);
                                    }
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