

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// console.log("e. ", typeof resultado)

// //1. o programa retornou 'a' e 'b' false, e 'c' true. O 'e' retorna o tipo dele.

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// //2. 'a' retorna o valor de array (undefined), 'b' retorna o novo valor setado de array (null), 'c' retorna a quantidade
// // de itens presentes no novo valor de array (11), 'd' retorna o primeiro valor do array (3), 'e' retorna o segundo 
// // valor do array, que recebeu um novo valor (19), 'f' retorna valor, que é o sexto item do array (9)




// EXERCICIOS DO DIA 24/02/2021

//EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// O usuário entrará com um número inteiro. Se o número, dividido por 2 tiver resto 0, retornará a 
// mensagem "passou no teste", senão tiver resto 0, retorna a mensagem "não passou no teste"

//EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. O código serve para consultar o preço das frutas
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

//EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a. A primeira linha está pedindo para o usuário entrar com um número
// b. Se o usuário digitar 10: 'Esse número passou no teste'. Se digitar -10: 'Uncaught ReferenceError: mensagem is not defined' 
// c. Terá mensagem de erro porque a variável 'mensagem' está dentro do bloco "filho" e 'mensagem' não pode ser compartilhado, apenas dentro do bloco onde está presente.

//EXERCÍCIO 4

const idade = Number(prompt('Digite sua idade'))

if(idade >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir.')
}

//EXERCÍCIO 5

let turno = prompt('Qual turno você estuda? M = Matutino, V = Vespertino, N = Noturno')


if(turno === 'M'){
    console.log('Bom Dia!')
} else if(turno === 'V'){
    console.log('Boa Tarde!')
} else if(turno === 'N'){
    console.log('Boa Noite!')
} else {
    console.log('Digite um turno válido!')
}

//EXERCÍCIO 6

let turno = prompt('Qual turno você estuda? M =Matutino, V =Vespertino, N =Noturno')

switch (turno){
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        break;
    case 'N':
        console.log('Boa Noite!')
        break;
    default:
        console.log('Escolha um turno válido')
        break;
}

//EXERCÍCIO 7

let filme = prompt('Qual gênero do filme que quer assistir?')
// console.log(filme)

let preco = prompt('Qual o preço do ingresso?')
// console.log(preco)

if (filme === 'fantasia' && preco <= 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :')
}


