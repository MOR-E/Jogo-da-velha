/*----------PLACAR---------*/ 
let adicionar1 = document.getElementById('somar_jogador1');
let adicionar2 = document.getElementById('somar_jogador2');

let int1 = document.getElementById('pontuacao_ponto1');
let integer1 = 0;

let int2 = document.getElementById('pontuacao_ponto2');
let integer2 = 0;

adicionar1.addEventListener('click', function() {
    integer1 += 1;
    int1.innerHTML = integer1;
})


adicionar2.addEventListener('click', function() {
    integer2 += 1;
    int2.innerHTML = integer2;
})

/*-------------MUDAR O NOME DO JOGADOR-----------*/

function mostrarTexto() {
    var jogador_inp = document.getElementById('jogador_inp').value;
    var pontuacao_nome1 = document.getElementById('pontuacao_nome1');
    pontuacao_nome1.innerHTML = jogador_inp;
}

function mostrarTexto2() {
    var jogador_inp2 = document.getElementById('jogador_inp2').value;
    var pontuacao_nome2 = document.getElementById('pontuacao_nome2');
    pontuacao_nome2.innerHTML = jogador_inp2;
}

/*-------------CRIANDO O GRID DO JOGO-----------*/

function matriz() {
    var tamanho_matriz = document.getElementById('informa_matriz').value;
    var salva_matriz = document.getElementById('salva_matriz');
    var grid_jogo = document.getElementById('jogo');
    grid_jogo.style.display = 'grid';
    grid_jogo.style.gridTemplateColumns = 'repeat(' + tamanho_matriz + ',1fr)';
    grid_jogo.style.gridTemplateRows = 'repeat(' + tamanho_matriz + ',1fr)';
    salva_matriz.addEventListener('click', function() {
    grid_jogo.innerHTML = "";

    for (var i = 0; i < tamanho_matriz * tamanho_matriz ; i++) {
        var botao_do_item = document.createElement('button');
        botao_do_item.setAttribute("data-posicao", i + 1);
        botao_do_item.classList.add('estilo_grid');
        grid_jogo.appendChild(botao_do_item);
    }
})
}


/*const jogador_atual = document.querySelector(".jogador_atual");
let selected;
let player = "X";


function inicio() {
    selecionado = [];

    jogador_atual.innerHTML = `Jogador da vez: ${player}`;
    document.querySelectorAll(".jogo button").forEach(() => {
        
    })
}*/
