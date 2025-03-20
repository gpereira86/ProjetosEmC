using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleDeGastosWeb.Data;
using ControleDeGastosWeb.Models;

namespace ControleDeGastosWeb.Controllers
{
    /// <summary>
    /// Controlador responsável pelas operações relacionadas às pessoas e suas transações.
    /// </summary>
    [ApiController]
    [Route("api/pessoas")]
    public class PessoaController : ControllerBase
    {
        /// <summary>
        /// Construtor do controlador. Injeta o contexto do banco de dados.
        /// </summary>
        /// <param name="context">Contexto do banco de dados para interagir com as entidades.</param>
        private readonly AppDbContext _context;

        public PessoaController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retorna a lista de todas as pessoas, incluindo suas transações associadas.
        /// </summary>
        /// <returns>Uma lista de pessoas com suas transações associadas.</returns>
        [HttpGet]
        public async Task<IActionResult> GetPessoas()
        {
            var pessoas = await _context.Pessoas.Include(p => p.Transacoes)
                .OrderByDescending(p => p.Id)
                .ToListAsync();
            return Ok(pessoas);
        }

        /// <summary>
        /// Cria uma nova pessoa no banco de dados.
        /// </summary>
        /// <param name="pessoa">Objeto contendo as informações da nova pessoa.</param>
        /// <returns>O status da criação e o objeto da pessoa criada.</returns>
        [HttpPost]
        public async Task<IActionResult> CreatePessoa([FromBody] Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPessoas), new { id = pessoa.Id }, pessoa);
        }

        /// <summary>
        /// Exclui uma pessoa do banco de dados com base no ID fornecido.
        /// </summary>
        /// <param name="id">ID da pessoa a ser excluída.</param>
        /// <returns>O status da exclusão da pessoa.</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePessoa(int id)
        {
            var pessoa = await _context.Pessoas.Include(p => p.Transacoes).FirstOrDefaultAsync(p => p.Id == id);
            if (pessoa == null) return NotFound();

            // Remove as transações associadas antes de excluir a pessoa
            _context.Transacoes.RemoveRange(pessoa.Transacoes);
            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        
    }
}
