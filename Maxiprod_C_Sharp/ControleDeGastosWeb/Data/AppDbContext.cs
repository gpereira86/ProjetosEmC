using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Models; 

namespace ControleDeGastosWeb.Data
{
    /// <summary>
    /// Contexto do banco de dados para a aplicação Controle de Gastos Web.
    /// Define as tabelas e suas interações com o banco de dados.
    /// </summary>
    public class AppDbContext : DbContext
    {
        /// <summary>
        /// Construtor do contexto. Inicializa o contexto com as opções fornecidas.
        /// </summary>
        /// <param name="options">As opções de configuração para o contexto do banco de dados.</param>
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        /// <summary>
        /// Propriedade para acessar a tabela de pessoas no banco de dados.
        /// </summary>
        public DbSet<Pessoa> Pessoas { get; set; }

        /// <summary>
        /// Propriedade para acessar a tabela de transações no banco de dados.
        /// </summary>
        public DbSet<Transacao> Transacoes { get; set; }
    }
}
