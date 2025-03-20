using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Data;

namespace ControleDeGastosWeb.Controllers
{
    /// <summary>
    /// Controlador responsável por fornecer os totais de receitas, despesas, saldo e transações de todas as pessoas.
    /// </summary>
    [ApiController]
    [Route("api/totais")]
    public class TotaisController : ControllerBase
    {
        private readonly AppDbContext _context;

        /// <summary>
        /// Construtor do controlador. Injeta o contexto do banco de dados.
        /// </summary>
        /// <param name="context">Contexto do banco de dados para interagir com as entidades.</param>
        public TotaisController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retorna os totais de receitas, despesas, saldo e transações de todas as pessoas, bem como o total acumulado de transações.
        /// </summary>
        /// <returns>Um objeto com o total de receitas, despesas, saldo geral, total de transações e total de pessoas.</returns>
        [HttpGet]
        public async Task<IActionResult> GetTotais()
        {
            var pessoas = await _context.Pessoas.Include(p => p.Transacoes)
                .OrderBy(p => p.Nome)
                .ToListAsync();
            var resultado = pessoas.Select(p => new
            {
                p.Id,
                p.Nome,
                p.Idade,
                TotalReceitas = p.Transacoes.Where(t => t.Tipo == "receita").Sum(t => t.Valor),
                TotalDespesas = p.Transacoes.Where(t => t.Tipo == "despesa").Sum(t => t.Valor),
                Saldo = p.Transacoes.Sum(t => t.Tipo == "receita" ? t.Valor : -t.Valor),
                TotalTransacoes = p.Transacoes.Count()
            });

            var totalReceitas = resultado.Sum(r => r.TotalReceitas);
            var totalDespesas = resultado.Sum(r => r.TotalDespesas);
            var saldoGeral = totalReceitas - totalDespesas;
            var totalTransacoes = resultado.Sum(r => r.TotalTransacoes);
            var totalPessoas = resultado.Count();

            return Ok(new 
            { 
                Pessoas = resultado, 
                TotalReceitas = totalReceitas, 
                TotalDespesas = totalDespesas, 
                SaldoGeral = saldoGeral,
                TotalTransacoes = totalTransacoes,
                TotalPessoas = totalPessoas 
            });
        }
    }
}
