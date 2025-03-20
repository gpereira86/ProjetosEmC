using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ControleDeGastosWeb.Controllers
{
    [ApiController]
    [Route("api/totais")]
    public class TotaisController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TotaisController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTotais()
        {
            var pessoas = await _context.Pessoas.Include(p => p.Transacoes).ToListAsync();
            var resultado = pessoas.Select(p => new
            {
                p.Nome,
                TotalReceitas = p.Transacoes.Where(t => t.Tipo == "receita").Sum(t => t.Valor),
                TotalDespesas = p.Transacoes.Where(t => t.Tipo == "despesa").Sum(t => t.Valor),
                Saldo = p.Transacoes.Sum(t => t.Tipo == "receita" ? t.Valor : -t.Valor),
                TotalTransacoes = p.Transacoes.Count() // Total de transações por pessoa
            });

            var totalReceitas = resultado.Sum(r => r.TotalReceitas);
            var totalDespesas = resultado.Sum(r => r.TotalDespesas);
            var saldoGeral = totalReceitas - totalDespesas;
            var totalTransacoes = resultado.Sum(r => r.TotalTransacoes); // Total acumulado de transações

            return Ok(new 
            { 
                Pessoas = resultado, 
                TotalReceitas = totalReceitas, 
                TotalDespesas = totalDespesas, 
                SaldoGeral = saldoGeral,
                TotalTransacoes = totalTransacoes // Inclui o total acumulado de transações
            });
        }
    }
}
