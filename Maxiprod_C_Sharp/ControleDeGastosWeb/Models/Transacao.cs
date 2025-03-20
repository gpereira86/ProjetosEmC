using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ControleDeGastosWeb.Models
{
    /// <summary>
    /// Representa uma transação financeira associada a uma pessoa, com informações sobre o valor, descrição e tipo da transação.
    /// </summary>
    public class Transacao
    {
        /// <summary>
        /// Identificador único da transação.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Descrição da transação. Este campo é obrigatório.
        /// </summary>
        [Required]
        public string Descricao { get; set; }

        /// <summary>
        /// Valor da transação. O valor deve ser maior que zero.
        /// </summary>
        [Range(0.01, double.MaxValue)]
        public decimal Valor { get; set; }

        /// <summary>
        /// Tipo da transação, que pode ser "despesa" ou "receita". Este campo é obrigatório.
        /// </summary>
        [Required]
        public string Tipo { get; set; } // "despesa" ou "receita"

        /// <summary>
        /// Identificador da pessoa associada à transação.
        /// </summary>
        public int PessoaId { get; set; }

    }
}
