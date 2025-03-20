using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ControleDeGastosWeb.Models
{
    public class Transacao
    {
        public int Id { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Range(0.01, double.MaxValue)]
        public decimal Valor { get; set; }
        [Required]
        public string Tipo { get; set; } // "despesa" ou "receita"
        public int PessoaId { get; set; }
        // public Pessoa Pessoa { get; set; }
    }
}
