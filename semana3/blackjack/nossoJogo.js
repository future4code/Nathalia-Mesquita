/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const msgInicial = 'Bem vindo ao jogo de Blackjack!'
console.log(msgInicial)

if(confirm("Quer iniciar uma nova rodada?")) {
	confirm = true;
} else {
	console.log('O jogo acabou')
}

// let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// console.log(numeros)

const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)