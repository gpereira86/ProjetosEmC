import React, { useState, useEffect } from 'react';
import { getPessoas, createPessoa, deletePessoa } from './services/PessoaService';
import { Pessoa } from './types';
import Header from './components/header';
import Footer from './components/footer';

const App: React.FC = () => {
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
    <div className="App">
      <Header />
      <h1>Pessoas</h1>

      <div className="row g-3">
        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            placeholder="Nome"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </div>
        <div className="col-auto">
        <input
          className="form-control"
          type="number"
          placeholder="Idade"
          value={novaIdade}
          onChange={(e) => {
            const value = e.target.value;
            // Verifica se o valor é um número inteiro
            if (/^\d+$/.test(value)) {
              setNovaIdade(Number(value)); // Atualiza o estado apenas se for um número inteiro
            }
          }}
        />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleCreatePessoa}>Criar Pessoa</button>
        </div>
      </div>

      <ul className="mt-4" style={{ listStyleType: 'none' }}>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            {pessoa.nome} ({pessoa.idade} anos)
            <button className="ms-2" onClick={() => handleDeletePessoa(pessoa.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>

  );
};

export default App;
