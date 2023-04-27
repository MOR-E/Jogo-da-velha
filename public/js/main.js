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


function teste1() {
    var salva_matriz = document.getElementById('salva_matriz');
    var grid_jogo = document.getElementById('jogo');

    var tamanho_matriz = new Array (document.getElementById('informa_matriz').value);
    salva_matriz.addEventListener('click', function() {
    console.log(tamanho_matriz);

    grid_jogo.innerHTML = "";

    for (var i = 0; i < tamanho_matriz; i++) {
        var botao_do_item = document.createElement('button');
        botao_do_item.classList.add('estilo_grid');
        grid_jogo.appendChild(botao_do_item);

    }
})
}

/*function teste1() {

    salva_matriz.addEventListener('click', function() {
        for (var i = 0; i < tamanho_matriz; i++) {
            var botao_do_item = document.createElement('button');
            botao_do_item.classList.add('estilo_grid');
            grid_jogo.appendChild(botao_do_item);
        }
})
} */



