//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
let invArray = [0, 8, 23, 16, 10, 15, 41, 12, 13]
invArray.reverse()
return invArray
}

//Exercício 2


function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui

   let arrayDois = [1, 2, 3, 4, 5, 6]
   const novoArrayDois = []
   for (let i = 0; i <= array.length -1; i++) {
      if (array[i] % 2 === 0) {
      novoArrayDois.push(array[i] ** 2)
   }
   }
   return novoArrayDois
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let arrayNumsPares = [1, 2, 3, 4, 5, 6]
   const arrayVazio = []
   for (let i = 0; i <= array.length -1; i++) {
      if (arrayNumsPares[i] % 2 === 0) {
         arrayVazio.push(arrayNumsPares[i])
      }
      //
} return arrayVazio
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let arrayMaiNum = [10, 18, 7, 56, 39]
   const maiNum = Math.max(...arrayMaiNum)
   return maiNum
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui

   const arrayCinco = [1, 2, 3, 4, 5, 6]
   return arrayCinco.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

   // const booleano1 = true
   // const booleano2 = false
   // const booleano3 = !booleano2 
   // const booleano4 = !booleano3 
   
   // if (booleano1 && booleano2 && !booleano4) {

   // }
   
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui

   // const arraySete = []
   // for (letnumber = 0; arraySete.length < n; number++) {
   //    if (number % 2 === 0) {
   //       arraySete.push(number)
   //    }
   // } 
   // return arraySete
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui

  if (a !== b && b !== c) {
   return 'Escaleno'
  } else if (a === b && b === c) {
    return 'Equilátero'
   } else {
     return 'Isósceles'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui

   let maiorNumero;
   let menorNumero;
   let maiorDivisivelporMenor;

   if(num1 < num2) {
      maiorNumero = num2;
      menorNumero = num1;
   } else {
      maiorNumero = num1;
      menorNumero = num2;
   }
   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

   const difMaiorMenor = maiorNumero - menorNumero
   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: difMaiorMenor
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

// const arrayOnze = array.length
// for (leti = 0; i < len; i++) {
//    for (letj = 0; j < len; j++) {
//       if (array[j] > array[j + 1]) {
//          let tmp = array[j];
//          array[j] = array[j + 1];
//          array[j + 1] = tmp;
//       }
//    }
// }
// return array
   
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui

const filmeAstrodev = {
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
}
   return filmeAstrodev
}


// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui

//    const filmeAstrodev = {
//       nome: 'O Diabo Veste Prada',
//       ano: 2006,
//       diretor: 'David Frankel',
//       atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
//    }

//    letfilmeAstro = ''
//    for (leti = 0; i < filmeAstrodev.atores.length; i++) {
//    if(i === filmeAstrodev.atores.length - 1) {
//       filmeAstro += filmeAstrodev.atores[i]
//     } else {
//        filmeAstro += filmeAstrodev.atores[i] + ', '
//       }
//    }   
// return `Venha assistir ao filme ${filmeAstrodev.nome}, de 
//                                 ${filmeAstrodev.ano}, dirigido por 
//                                 ${filmeAstrodev.diretor} e estrelado por 
//                                 ${filmeAstro}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui

   const objeto = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
return objeto
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   // const pessoa = {
   //    nome: "Astrodev",
   //    idade: 25,
   //    email: "astrodev@future4.com.br",
   //    endereco: "Rua do Futuro, 4"
   // }

return {
   ...pessoa,
   nome: 'ANÔNIMO'
}   
   
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const arrayDezesseisA = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return arrayDezesseisA
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

const arrayDezesseisB = arrayDePessoas.filter((pessoa) => {
   return pessoa.idade < 18
})
   return arrayDezesseisB
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui

const arrayDezesseteA = array.map((num) => {
   return num * 2
})
return arrayDezesseteA
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui

   const arrayDezesseteB = array.map((num) => {
      return (num * 2).toString()
   })
   return arrayDezesseteB
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   const arrayDezesseteC = array.map((num) => {
      if (num % 2 !== 0) {
         return `${num} é ímpar`
      } else {
        return `${num} é par`
      }
    })
return arrayDezesseteC

}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui

}


// Exercício 18, letra B

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

 function retornaEmailConsulta() {
   // implemente sua lógica aqui
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}