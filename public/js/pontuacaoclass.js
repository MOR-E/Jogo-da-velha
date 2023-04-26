export default class pontuacaoclass {
    constructor(ponto, jogador1_nome, jogador2_nome, onControlButtonClick) {
        this.ponto = ponto;
        this.ponto.innerHTML = `
        <div class="pontuacao">
        <div class="pontuacao_nome"><h2>${jogador1_nome}</h2></div>
        <div class="pontuacao_nome"><h2>${jogador2_nome}</h2></div>
        <div class="pontuacao_ponto" data-jogador="um">0</div>
        <div class="pontuacao_ponto" data-jogador="dois">0</div>
        <div class="pontuacao_controle" data-jogador="um">
            <button class="pontuacao_controle_botao">-</button>
            <button class="pontuacao_controle_botao">+</button>
        </div>
        <div class="pontuacao_controle" data-jogador="dois">
            <button class="pontuacao_controle_botao">-</button>
            <button class="pontuacao_controle_botao">+</button>
        </div>
        </div>
    `

    this.ponto.querySelectorAll('.pontuacao_controle_botao').forEach(controlButton => {
        controlButton.addEventListener("click", () => {
            const direcao = controlButton.textContent === "-" ? "menos" : "mais";
            const jogador = controlButton.closest(".pontuacao_controle").dataset.jogador;

            onControlButtonClick(jogador, direcao);
        });
    })
    }

    update(pontuacao_jogador1, pontuacao_jogador2) {
        this.ponto.querySelector(".pontuacao_ponto[data-jogador='um']").textContent = pontuacao_jogador1;
        this.ponto.querySelector(".pontuacao_ponto[data-jogador='dois']").textContent = pontuacao_jogador2;
    }
};