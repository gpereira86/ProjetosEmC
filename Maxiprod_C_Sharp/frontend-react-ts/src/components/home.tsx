import React, { useEffect, useState } from "react";
import { getTotais } from "../services/HomeService";
import { Totais } from "../types";

const Home: React.FC = () => {
  const [totais, setTotais] = useState<Totais | null>(null);

  useEffect(() => {
    const fetchTotais = async () => {
      const data = await getTotais();
      if (data) {
        setTotais(data);
      }
    };

    fetchTotais();
  }, []);


  if (!totais) return <p className="text-center">Carregando totais...</p>;

  return (
    <div className="container mt-2">
      <h2 className="fw-bolder text-start mb-4 custom-color-blue">
        Totais
      </h2>

      <div className="container">
        <div className="row">
            <div className="col text-center">
                <h5>Transações Cadastradas</h5>
                <h1 className="custom-color-blue custom-extra-size">{totais.totalTransacoes}</h1>
            </div>
            <div className="col text-center">
                <h5>Pessoas Cadastradas</h5>
                <h1 className="custom-color-blue custom-extra-size">{totais.totalPessoas}</h1>
            </div>
            
            <div className="col-auto text-center">
                <h5>Saldo Geral</h5>
                <h1 className="custom-color-blue custom-extra-size">
                  {
                    totais.saldoGeral < 0 ? (
                      <span style={{ color: "#da4242" }}>
                        {`(R$ ${(totais.saldoGeral * -1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`}
                      </span>
                    ) : (                  
                      `R$ ${totais.saldoGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    )
                  }
                </h1>
            </div>
            
        </div>

      </div>

      <div className="container my-3 overflow-y-auto">

        <hr className="custom-gray-line"/>
        <h4 className="text-center my-2 fw-bolder">
            Balanço de Receitas e Despesas Por Usuário
        </h4>

        <div className="table-responsive">
            <table className="table align-middle mt-3">
                <thead className="text-center">
                <tr>
                    <th scope="col">Pessoa</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Nº Transações</th>
                    <th scope="col">Receitas</th>
                    <th scope="col">Despesas</th>
                    <th scope="col">Saldo</th>
                </tr>
                </thead>
                <tbody>

                {totais.pessoas.map((pessoa) => (

                <tr key={pessoa.id}>
                    <td className="col-sm text-start ps-4">{pessoa.nome}</td>
                    <td className="col-sm text-center">{pessoa.idade}</td>
                    <td className="col-sm text-center">{pessoa.totalTransacoes}</td>

                    <td className="col-sm text-center">
                      {`R$ ${pessoa.totalReceitas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </td>

                    <td className="col-sm text-center fw-semibold" style={{ color: "#da4242" }}>
                      {`(R$ ${pessoa.totalDespesas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`}
                    </td>

                    <td className="col-sm text-center">
                    {
                      pessoa.saldo < 0 ? (
                        <span className="fw-semibold" style={{ color: "#da4242" }}>
                          {`(R$ ${(pessoa.saldo * -1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`}
                        </span>
                      ) : (                  
                        `R$ ${pessoa.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      )
                    }
                    </td>

                </tr>
                ))}

                </tbody>
                <tfoot className="table-primary custom-tfoot">
                    <tr>
                      <td className="col-sm text-center" colSpan={2}>Total Geral</td>
                      <td className="col-sm text-center">{totais.totalTransacoes}</td>
                      <td className="col-sm text-center">
                        {`R$ ${totais.totalReceitas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      </td>

                      <td className="col-sm text-center" style={{ color: "#501919" }}>
                        {`(R$ ${totais.totalDespesas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`}
                      </td>

                      <td className="col-sm text-center">
                        {
                          totais.saldoGeral < 0 ? (
                            <span style={{ color:"#501919" }}>
                              {`(R$ ${(totais.saldoGeral * -1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`}
                            </span>
                          ) : (                  
                            `R$ ${totais.saldoGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          )
                        }
                      </td>

                    </tr>
                </tfoot>
            </table>
        </div>
        <div className="text-danger text-end fw-semibold">
            <p>* Despesas e saldos negativos são exibidos entre parênteses e coloração da letra em vermelho.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
