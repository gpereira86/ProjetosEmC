using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ControleDeGastosWeb.Models
{
    public class Pessoa
    {
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        public int Idade { get; set; }
        public List<Transacao> Transacoes { get; set; } = new();
    }
}
