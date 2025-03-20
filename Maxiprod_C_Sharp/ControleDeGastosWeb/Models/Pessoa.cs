using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ControleDeGastosWeb.Models
{
    /// <summary>
    /// Representa uma pessoa no sistema, com informações relacionadas à sua identidade e transações financeiras.
    /// </summary>
    public class Pessoa
    {
        /// <summary>
        /// Identificador único da pessoa.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Nome da pessoa. Este campo é obrigatório.
        /// </summary>
        [Required]
        public string Nome { get; set; }

        /// <summary>
        /// Idade da pessoa.
        /// </summary>
        public int Idade { get; set; }

        /// <summary>
        /// Lista de transações associadas à pessoa. Representa a relação de uma pessoa com várias transações financeiras.
        /// </summary>
        public List<Transacao> Transacoes { get; set; } = new();
    }
}
