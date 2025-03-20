using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Data;
using ControleDeGastosWeb.Models;
using System.Linq;
using System.Threading.Tasks;

namespace ControleDeGastosWeb.Controllers
{
    [ApiController]
    [Route("api/transacoes")]
    public class TransacaoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransacaoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTransacoes()
        {
            var transacoes = await _context.Transacoes.ToListAsync();
            return Ok(transacoes);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTransacao([FromBody] Transacao transacao)
        {
            Console.WriteLine(transacao);
            var pessoa = await _context.Pessoas.FindAsync(transacao.PessoaId);
            if (pessoa == null) return BadRequest("Pessoa não encontrada");
            if (pessoa.Idade < 18 && transacao.Tipo != "despesa") return BadRequest("Menores de idade só podem ter despesas");

            _context.Transacoes.Add(transacao);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTransacoes), new { id = transacao.Id }, transacao);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransacao(int id)
        {
            var transacao = await _context.Transacoes.FindAsync(id);
            
            if (transacao == null)
            {
                return NotFound("Transação não encontrada");
            }
            
            _context.Transacoes.Remove(transacao);
            await _context.SaveChangesAsync();

            return Ok("Transação excluída com sucesso");
        }

    
    }
}
