
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

let pontuacao_nome1 = document.getElementById('pontuacao_nome1');
let jogador_inp = document.getElementById('jogador_inp');
let nome_jogador1 = document.getElementById('nome_jogador1');


function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }