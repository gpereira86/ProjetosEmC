namespace ControleDeGastosWeb.Models
{
    /// <summary>
    /// Modelo de visualização de erro utilizado para exibir informações relacionadas a erros ocorridos na aplicação.
    /// </summary>
    public class ErrorViewModel
    {
        /// <summary>
        /// Identificador da solicitação associado ao erro, caso esteja disponível.
        /// </summary>
        public string? RequestId { get; set; }

        /// <summary>
        /// Propriedade que verifica se o identificador da solicitação está disponível.
        /// Retorna <c>true</c> se o <see cref="RequestId"/> não for nulo ou vazio, caso contrário retorna <c>false</c>.
        /// </summary>
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
