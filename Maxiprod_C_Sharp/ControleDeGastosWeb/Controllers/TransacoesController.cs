using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Data;
using ControleDeGastosWeb.Models;


namespace ControleDeGastosWeb.Controllers
{
    /// <summary>
    /// Controlador responsável pelas operações relacionadas às transações financeiras das pessoas.
    /// </summary>
    [ApiController]
    [Route("api/transacoes")]
    public class TransacaoController : ControllerBase
    {
        private readonly AppDbContext _context;

        /// <summary>
        /// Construtor do controlador. Injeta o contexto do banco de dados.
        /// </summary>
        /// <param name="context">Contexto do banco de dados para interagir com as entidades.</param>
        public TransacaoController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retorna a lista de todas as transações, ordenadas de forma decrescente pelo ID.
        /// </summary>
        /// <returns>Uma lista de transações.</returns>
        [HttpGet]
        public async Task<IActionResult> GetTransacoes()
        {
            var transacoes = await _context.Transacoes
                .OrderByDescending(t => t.Id)
                .ToListAsync();
            return Ok(transacoes);
        }

        /// <summary>
        /// Cria uma nova transação no banco de dados.
        /// </summary>
        /// <param name="transacao">Objeto contendo as informações da nova transação.</param>
        /// <returns>O status da criação e o objeto da transação criada.</returns>
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
        
        /// <summary>
        /// Exclui uma transação com base no ID fornecido.
        /// </summary>
        /// <param name="id">ID da transação a ser excluída.</param>
        /// <returns>O status da exclusão da transação.</returns>
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
