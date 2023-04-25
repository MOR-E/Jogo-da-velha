export default class pontuacaoclass {
    constructor(ponto, jogador1_nome, jogador2_nome, muda_ponto) {
        this.ponto = ponto;
        this.ponto.innerHTML = `
        <div class="pontuacao">
        <div class="pontuacao_nome"><h2>${jogador1_nome}</h2></div>
        <div class="pontuacao_nome"><h2>${jogador2_nome}</h2></div>
        <div class="pontuacao_ponto" pontua_jogador="um">0</div>
        <div class="pontuacao_ponto" pontua_jogador="dois">0</div>
        <div class="pontuacao_controle" pontua_jogador="um">
            <button class="pontuacao_controle_botao">-</button>
            <button class="pontuacao_controle_botao">+</button>
        </div>
        <div class="pontuacao_controle" pontua_jogador="dois">
            <button class="pontuacao_controle_botao">-</button>
            <button class="pontuacao_controle_botao">+</button>
        </div>
        </div>
    `

    this.ponto.querySelectorAll('.pontuacao_controle_botao').forEach(controlButton => {
        controlButton.addEventListener("click", () => {
            const direcao = controlButton.textContent === "-" ? "menos" : "mais";
            const jogador = controlButton.closest(".pontuacao_controle").dataset.pontua_jogador;

            console.log(direcao);
            console.log(jogador);

        });
    })
    }
};