export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.Id,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: 0,
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map