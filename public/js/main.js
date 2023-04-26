import pontuacaoclass from "./pontuacaoclass.js";

let pontuacao_jogador1 = 0;
let pontuacao_jogador2 = 0;
const ponto = document.querySelector("#ponto");
const view = new pontuacaoclass(ponto, "jogador1", "jogador2", (direcao, jogador) => {
    //atualizar o placar
    const diferenca = direcao === "menos" ? -1 : 1;

    if (jogador === "um"){
        pontuacao_jogador1 = Math.max(pontuacao_jogador1 + diferenca, 0);
    }else {
        pontuacao_jogador2 = Math.max(pontuacao_jogador2 + diferenca, 0);
    }

    view.update(pontuacao_jogador1, pontuacao_jogador2);
});