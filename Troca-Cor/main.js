'use strict'

// Ativa o modo estrito do JavaScript.
// e torna o código mais seguro e previsível

const btnTrocarCor = document.getElementById('trocar-cor')
const btnTrocarCorVerde = document.getElementById('VERDE')
const btnTrocarCorAzul = document.getElementById('AZUL')

// Seleciona o elemento HTML que possui o id "trocar-cor"

function trocarCor(){
     // Função responsável por alterar a cor do fundo

    let cor = document.getElementById('cor').value


    if (cor == "azul"){
        cor = 'blue'
    // Se o usuário digitar "amarelo", converte para o valor CSS "yellow"
    }else if (cor == 'vermelho'){
        cor = 'red'
    // Converte "vermelho" para "red"
    }else if (cor == 'roxo'){
        cor = 'purple'
    // Converte "preto" para "black"
    }else if (cor == 'verde'){
        cor = 'green'
    // Converte "verde" para "green"
    }
    
    document.documentElement.style.setProperty('--cor-bg', cor)
}
btnTrocarCor.addEventListener('click',trocarCor )
