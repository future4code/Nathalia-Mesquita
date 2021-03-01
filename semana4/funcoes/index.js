

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

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// O usuário entrará com um número inteiro. Se o número, dividido por 2 tiver resto 0, retornará a 
// mensagem "passou no teste", senão tiver resto 0, retorna a mensagem "não passou no teste"

//EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. O código serve para consultar o preço das frutas
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

//EXERCÍCIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. A primeira linha está pedindo para o usuário entrar com um número
// b. Se o usuário digitar 10: 'Esse número passou no teste'. Se digitar -10: 'Uncaught ReferenceError: mensagem is not defined' 
// c. Terá mensagem de erro porque a variável 'mensagem' está dentro do bloco "filho" e 'mensagem' não pode ser compartilhado, apenas dentro do bloco onde está presente.

//EXERCÍCIO 4

// const idade = Number(prompt('Digite sua idade'))

// if(idade >= 18) {
//     console.log('Você pode dirigir')
// } else {
//     console.log('Você não pode dirigir.')
// }

//EXERCÍCIO 5

// let turno = prompt('Qual turno você estuda? M = Matutino, V = Vespertino, N = Noturno')


// if(turno === 'M'){
//     console.log('Bom Dia!')
// } else if(turno === 'V'){
//     console.log('Boa Tarde!')
// } else if(turno === 'N'){
//     console.log('Boa Noite!')
// } else {
//     console.log('Digite um turno válido!')
// }

//EXERCÍCIO 6

// let turno = prompt('Qual turno você estuda? M =Matutino, V =Vespertino, N =Noturno')

// switch (turno){
//     case 'M':
//         console.log('Bom Dia!')
//         break;
//     case 'V':
//         console.log('Boa Tarde!')
//         break;
//     case 'N':
//         console.log('Boa Noite!')
//         break;
//     default:
//         console.log('Escolha um turno válido')
//         break;
// }

//EXERCÍCIO 7

// let filme = prompt('Qual gênero do filme que quer assistir?')
// // console.log(filme)

// let preco = prompt('Qual o preço do ingresso?')
// // console.log(preco)

// if (filme === 'fantasia' && preco <= 15){
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :')
// }

//////// EXERCICIOS DO DIA 25/02/2021

//EXERCÍCIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O código soma à variável 'valor' o valor de 'i' sempre que esse for menor que 5. O resultado impresso é 10.

//EXERCÍCIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a. 19
// 21
// 23
// 25
// 27
// 30

// b. Acho que não porque faltaria um contador.

//EXERCÍCIO 3

// a. 
// const array = [6, 13, 14, 29, 31, 58]

// for (let arrayOriginal of array) {
//   console.log(arrayOriginal)
// }

// // b. 
// const array = [6, 13, 14, 29, 31, 58]

// for (let arrayOriginal of array) {
//   console.log(arrayOriginal / 10)
// }

// // c. 
// const array = [6, 13, 14, 29, 31, 58]

// for (let arrayOriginal of array) {
//   if (arrayOriginal %2 === 0)
//   console.log(arrayOriginal)
// }

// // d. 
// const array = [6, 13, 14, 29, 31, 58]

// for (let arrayOriginal of array) {
//   console.log('O elemento index é ', arrayOriginal)
// }


//////////////////// EXERCICIOS DO DIA 01/03/2021

//EXERCÍCIO 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a. 10
//    50 

// b. 

//EXERCÍCIO 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];
// let arrayDeNomes = ["Amanda", "Caio"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a. Darvas
//    Caio

// b. Amanda
//    Caio

//EXERCÍCIO 3

// const metodo = (array) => {
//   let arrayFinal = [];

//   for (let x of array) {
// 		if (x % 2 === 0) {
// 	    arrayFinal.push(x * x)
// 		}
//   }

//   return arrayFinal;
// }


//EXERCÍCIO 4

// a. 
// const nome = prompt('Qual seu nome?')
// const idade = prompt('Qual a sua idade?')
// const cidade = prompt ('Cidade atual?')
// const estudante = prompt('É estudante? Sim ou Não')

// switch (estudante){
//     case 'Sim':
//         // console.log('sou estudante')
//         break;
//     default:
//         // console.log('não sou estudante')
//         break;
// }

// console.log('Eu sou ', nome, 'tenho ', idade, 'anos, moro em ', cidade, 'e ', estudante, 'estudante.')

// b. 
