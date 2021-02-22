//Exercícios de interpretação de código
//1. 
/* Foi atribuído o valor 10 para as variáveis 'a' e 'b'.
No primeiro console.log, será mostrado o valor de 'b', que é 10.
No segundo console.log, 'a' será mostrado com o valor 10 e 'b' mostrará 5, que foi o novo valor atribuído a ele. 
*/

//2. 
/* Foi atribuído o valor 10 para a variável 'a' e 20 para 'b'. Para 'c' foi atribuído 'a'. Nesse caso, 'c' retornará 10.
Posteriormente, 'b' foi novamente atribuído e recebeu valor 'c', e 'a' também foi novamente atribuído e seu novo valor é 'b'.
No console irá mostrar os seguintes valores: 10, 10, 10.
*/

//Exercícios de escrita de código

// let nome 
// console.log(typeof nome)

// let idade
// console.log(typeof idade)

//d) Essas duas variáveis receberam "undefined" porque não atribuí valor a elas. 

//const nome = prompt('Qual seu nome?')
//Uncaught SyntaxError: Identifier 'nome' has already been declared


// nome = 'Nathalia';
// idade = 29;

// console.log('Olá ',nome,'você tem', idade, 'anos.')

// --------------------------------------------------------------------------------------------------------
// const primeiroNome = 'Nathalia'
// const sobrenome = 'Cardoso'
// const idade = 29
// const corFavorita = 'azul'
// const pais = 'Brasil'

// console.log('Qual seu primeiro nome? \n Resposta: ' ,primeiroNome, 
// '\nQual seu sobrenome? \n Resposta: ' ,sobrenome, 
// '\nQuantos anos tem? \n Resposta: ' ,idade, 
// '\nQual sua cor favorita? \n Resposta: ' ,corFavorita, 
// '\nOnde nasceu? \n Resposta: ' ,pais)

// --------------------------------------------------------------------------------------------------------

// let comidas = ['hamburguer', 'pizza', 'churrasco', 'japa', 'doces']
// //console.log(comidas)

// console.log('Essas são minhas comidas preferidas:\n', comidas[0], ' \n ', comidas[1], ' \n ', comidas[2], ' \n ', comidas[3], ' \n ', comidas[4])

// prompt = ('Qual sua comida preferida?')

// --------------------------------------------------------------------------------------------------------

let perguntas = ['Você está usando uma roupa azul hoje?', 'Sua cor favorita é azul?', 'Você tem 20 anos?']
//console.log(perguntas)

let respostas = ['false', 'true', 'false']
//console.log(respostas)

console.log(perguntas[0], respostas[0], ' \n ', perguntas[1], respostas[1], ' \n ', perguntas[2], respostas[2])