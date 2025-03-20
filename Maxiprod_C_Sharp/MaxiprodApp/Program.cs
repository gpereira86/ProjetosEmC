using System;
using System.Collections.Generic;
using System.Linq;

namespace ControleDeGastosResidenciais
{
    /// <summary>
    /// Representa uma pessoa cadastrada no sistema
    /// 
    /// - Id (int): Identificador único da pessoa
    /// - Nome (string): Nome da pessoa
    /// - Idade (int): Idade da pessoa
    /// - Transacoes (List<Transacao>): Lista de transações associadas à pessoa
    /// 
    /// </summary>
    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public List<Transacao> Transacoes { get; set; } = new List<Transacao>();
    }

    /// <summary>
    /// Representa uma transação financeira associada a uma pessoa
    /// 
    /// - Id (int): Identificador único da transação
    /// - Descricao (string): Descrição da transação
    /// - Valor (decimal): Valor da transação
    /// - Tipo (string): Tipo da transação: 'despesa' ou 'receita'
    /// - PessoaId (int): Identificador da pessoa associada à transação
    /// 
    /// </summary>
    public class Transacao
    {
        public int Id { get; set; }
        public string Descricao { get; set; } 
        public decimal Valor { get; set; } 
        public string Tipo { get; set; } 
        public int PessoaId { get; set; }
    }

   /// <summary>
   /// Classe principal do programa (Início)
   /// 
   /// - pessoas ( List<Pessoa>): Lista de pessoas cadastradas.
   /// - transacoes (List<Transacao>): Lista de transações registradas.
   /// 
   /// </summary>
    class Program
    {
        static List<Pessoa> pessoas = new List<Pessoa>();
        static List<Transacao> transacoes = new List<Transacao>();

        static void Main(string[] args)
        {
            int opcao = 0;

            
            while (opcao != 7)
            {
                
                Console.Clear();
                Console.WriteLine("Controle de Gastos Residenciais");
                Console.WriteLine("1. Cadastro de Pessoas");
                Console.WriteLine("2. Cadastro de Transações");
                Console.WriteLine("3. Consultar Totais");
                Console.WriteLine("4. Consultar Pessoas e suas Transações");
                Console.WriteLine("5. Pessoas Cadastradas");
                Console.WriteLine("6. Excluir Pessoa");
                Console.WriteLine("7. Sair");
                Console.Write("Escolha uma opção: ");

                
                try
                {
                    opcao = int.Parse(Console.ReadLine());
                }
                catch (FormatException)
                {
                    Console.WriteLine("Opção inválida!\nPressione qualquer tecla para tentar novamente.");
                    Console.ReadKey();
                    continue;
                }

                
                switch (opcao)
                {
                    case 1:
                        CadastrarPessoa();
                        break;
                    case 2:
                        CadastrarTransacao();
                        break;
                    case 3:
                        ConsultarTotais();
                        break;
                    case 4:
                        ConsultarPessoasTransacoes();
                        break;
                    case 5:
                        ListarPessoas();
                        break;
                    case 6:
                        ExcluirPessoa();
                        break;
                    case 7:
                        Console.WriteLine("Saindo...");
                        break;
                    default:
                        Console.WriteLine("Opção inválida!\nPressione qualquer tecla para tentar novamente.");
                        Console.ReadKey();
                        break;
                }
            }
        }

        /// <summary>
        /// Exibe a lista de pessoas cadastradas em formato amigavel
        /// </summary>
        static void ExibirPessoas(List<Pessoa> pessoas)
        {
            
            Console.WriteLine("+----+-----------------+-------+");
            Console.WriteLine("| ID | Nome            | Idade |");
            Console.WriteLine("+----+-----------------+-------+");

            foreach (var pessoa in pessoas)
            {
                Console.WriteLine($"| {pessoa.Id,-2} | {pessoa.Nome,-15} | {pessoa.Idade,5} |");
            }

            Console.WriteLine("+----+-----------------+-------+");
        }

        /// <summary>
        /// Lista as pessoa em formato amigavel
        /// </summary>
        static void ListarPessoas()
        {
            Console.Clear();
            ExibirPessoas(pessoas);
            Console.WriteLine("\nPressione qualquer tecla para voltar.");
            Console.ReadKey();
        }

        /// <summary>
        /// Cadastra uma nova pessoa no sistema
        /// </summary>
        static void CadastrarPessoa()
        {
            Console.Clear();
            Console.WriteLine("Cadastro de Pessoa");

            string nome;
            do
            {
                Console.Write("Nome: ");
                nome = Console.ReadLine().Trim();

                if (string.IsNullOrEmpty(nome))
                {
                    Console.WriteLine("O nome não pode estar vazio. Por favor, informe um nome válido.");
                }

            } while (string.IsNullOrEmpty(nome)); 

            int idade;
            while (true)
            {
                Console.Write("Idade: ");
                string entrada = Console.ReadLine();

                if (int.TryParse(entrada, out idade))
                {
                    break;
                }
                
                Console.WriteLine("Por favor, informe um número inteiro válido.");
            }

            int id = pessoas.Count > 0 ? pessoas.Max(p => p.Id) + 1 : 1;

            pessoas.Add(new Pessoa { Id = id, Nome = nome, Idade = idade });

            Console.WriteLine("\n>>> Pessoa cadastrada com sucesso! <<<\nPressione qualquer tecla para voltar.");
            Console.ReadKey();

        }

        /// <summary>
        /// Cadastra uma nova transação no sistema
        /// </summary>
        static void CadastrarTransacao()
        {
            Console.Clear();
            Console.WriteLine("Cadastro de Transação");

            ExibirPessoas(pessoas);

            int pessoaId;
            while (true)
            {
                Console.Write("\nEscolha o ID da pessoa: ");
                string input = Console.ReadLine();

                if (int.TryParse(input, out pessoaId))
                {
                    break; // Sai do loop se a conversão for bem-sucedida
                }
                
                Console.WriteLine("Entrada inválida! Digite um número inteiro válido.");
}

            var pessoaEscolhida = pessoas.FirstOrDefault(p => p.Id == pessoaId);
            
            if (pessoaEscolhida == null)
            {
                Console.WriteLine("Pessoa não encontrada.\nPressione qualquer tecla para tentar novamente.");
                Console.ReadKey();
                return;
            }

            string tipoPermitido = pessoaEscolhida.Idade < 18 ? "despesa" : "despesa ou receita";

            Console.WriteLine($">>> Pessoa escolhida: {pessoaEscolhida.Nome}, Idade: {pessoaEscolhida.Idade} <<<\n");
            
            string tipo = string.Empty;
            
            if (tipoPermitido == "despesa")
            {
                tipo = "despesa";
                Console.WriteLine($"Tipo (Despesa/Receita): Despesa (Com base na idade, você pode cadastrar apenas despesas)");
            } else
            {
                do
                {
                    Console.Write("Tipo (Despesa/Receita): ");
                    tipo = Console.ReadLine().ToLower();

                    if (tipo != "despesa" && tipo != "receita")
                    {
                        Console.WriteLine("Tipo inválido! Escolha entre 'Despesa' ou 'Receita'.");
                    }
                } while (tipo != "despesa" && tipo != "receita");
            }

            Console.Write("Descrição: ");
            string descricao = Console.ReadLine();

            decimal valor;
            while (true)
            {
                Console.Write("Valor (ex.: 1,99): ");
                string input = Console.ReadLine();

                if (decimal.TryParse(input, out valor) && valor > 0)
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Entrada inválida! Digite um valor decimal positivo.");
                }
            }

            int transacaoId = transacoes.Count > 0 ? transacoes.Max(t => t.Id) + 1 : 1;

            transacoes.Add(new Transacao { Id = transacaoId, Descricao = descricao, Valor = valor, Tipo = tipo, PessoaId = pessoaId });

            Console.WriteLine("\n>>> Transação cadastrada com sucesso! <<<\nPressione qualquer tecla para voltar.");
            Console.ReadKey();
        }

        /// <summary>
        /// Exclui uma pessoa e todas as suas transações do sistema
        /// </summary>
        static void ExcluirPessoa()
        {
            Console.Clear();
            Console.WriteLine("Excluir Pessoa");

            ExibirPessoas(pessoas);

            Console.Write("\nDigite o ID da pessoa a ser excluída: ");
            int pessoaId = int.Parse(Console.ReadLine());

            var pessoaExcluir = pessoas.FirstOrDefault(p => p.Id == pessoaId);

            if (pessoaExcluir != null)
            {
                string nomePessoa = pessoaExcluir.Nome;

                transacoes.RemoveAll(t => t.PessoaId == pessoaId);

                pessoas.Remove(pessoaExcluir);

                Console.WriteLine($"{nomePessoa} e suas transações excluídas com sucesso!\nPressione qualquer tecla para voltar.");
            }
            else
            {
                Console.WriteLine($"Pessoa de ID: {pessoaId} não encontrada.\nPressione qualquer tecla para tentar novamente.");
            }

            Console.ReadKey();
        }

    	/// <summary>
        /// Lista os totais de despesas e receitas por pessoa e acumulado
        /// </summary>
        static void ConsultarTotais()
        {
            Console.Clear();
            Console.WriteLine("Consultando Totais");

            string[] headers = { "Pessoa", "Total de Receitas", "Total de Despesas", "Saldo" };

            int maxPessoaLength = Math.Max(pessoas.Max(p => p.Nome.Length), headers[0].Length);
            int maxReceitasLength = Math.Max(transacoes.Where(t => t.Tipo.ToLower() == "receita").Any() ? 
                transacoes.Where(t => t.Tipo.ToLower() == "receita").Max(t => t.Valor.ToString("C").Length) : 1, headers[1].Length);
            int maxDespesasLength = Math.Max(transacoes.Where(t => t.Tipo.ToLower() == "despesa").Any() ? 
                transacoes.Where(t => t.Tipo.ToLower() == "despesa").Max(t => t.Valor.ToString("C").Length) : 1, headers[2].Length);
            int maxSaldoLength = Math.Max(transacoes.Any() ? 
                transacoes.Max(t => t.Valor.ToString("C").Length) : 1, headers[3].Length);

            string linha = $"+-{new string('-', maxPessoaLength)}-+-{new string('-', maxReceitasLength)}-+-{new string('-', maxDespesasLength)}-+-{new string('-', maxSaldoLength)}-+";

            Console.WriteLine(linha);
            Console.WriteLine($"| {headers[0].PadRight(maxPessoaLength)} | {headers[1].PadLeft(maxReceitasLength)} | {headers[2].PadLeft(maxDespesasLength)} | {headers[3].PadLeft(maxSaldoLength)} |");
            Console.WriteLine(linha);

            foreach (var pessoa in pessoas)
            {
                var totalReceitas = transacoes.Where(t => t.PessoaId == pessoa.Id && t.Tipo.ToLower() == "receita").Sum(t => t.Valor);
                var totalDespesas = transacoes.Where(t => t.PessoaId == pessoa.Id && t.Tipo.ToLower() == "despesa").Sum(t => t.Valor);
                var saldo = totalReceitas - totalDespesas;

                Console.WriteLine($"| {pessoa.Nome.PadRight(maxPessoaLength)} | {totalReceitas.ToString("C").PadLeft(maxReceitasLength)} | {totalDespesas.ToString("C").PadLeft(maxDespesasLength)} | {saldo.ToString("C").PadLeft(maxSaldoLength)} |");
            }

            Console.WriteLine(linha);

            var totalGeralReceitas = transacoes.Where(t => t.Tipo.ToLower() == "receita").Sum(t => t.Valor);
            var totalGeralDespesas = transacoes.Where(t => t.Tipo.ToLower() == "despesa").Sum(t => t.Valor);
            var saldoGeral = totalGeralReceitas - totalGeralDespesas;

            Console.WriteLine($"| {"Total".PadRight(maxPessoaLength)} | {totalGeralReceitas.ToString("C").PadLeft(maxReceitasLength)} | {totalGeralDespesas.ToString("C").PadLeft(maxDespesasLength)} | {saldoGeral.ToString("C").PadLeft(maxSaldoLength)} |");

            Console.WriteLine(linha);

            Console.WriteLine("\nPressione qualquer tecla para voltar.");
            Console.ReadKey();
        }

        /// <summary>
        /// Consultar todas as transações separadas por pessoa
        /// </summary>
        static void ConsultarPessoasTransacoes()
        {
            Console.Clear();
            Console.WriteLine("Consultando Pessoas e suas Transações");

            foreach (var pessoa in pessoas)
            {
                Console.WriteLine($"Pessoa: {pessoa.Nome}");
                Console.WriteLine("Transações:");

                var transacoesPessoa = transacoes.Where(t => t.PessoaId == pessoa.Id).ToList();

                if (transacoesPessoa.Count == 0)
                {
                    Console.WriteLine("Nenhuma transação cadastrada.");
                }
                else
                {
                    
                    Console.WriteLine("+----+-------------------------------------+------------------+------------+");
                    Console.WriteLine("| ID |              Descrição              |     Valor        |    Tipo    |");
                    Console.WriteLine("+----+-------------------------------------+------------------+------------+");

                    foreach (var transacao in transacoesPessoa)
                    {
                        Console.WriteLine($"| {transacao.Id,-2} | {transacao.Descricao, -35} | R$ {transacao.Valor, 13} | {transacao.Tipo, -11}|");
                    }
                    Console.WriteLine("+----+-------------------------------------+---------------+------------+");
                }
                Console.WriteLine();
            }

            Console.WriteLine("\nPressione qualquer tecla para voltar.");
            Console.ReadKey();
        }
    }
}
