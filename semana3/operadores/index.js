const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

//1. o programa retornou 'a' e 'b' false, e 'c' true. O 'e' retorna o tipo dele.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

//2. 'a' retorna o valor de array (undefined), 'b' retorna o novo valor setado de array (null), 'c' retorna a quantidade
// de itens presentes no novo valor de array (11), 'd' retorna o primeiro valor do array (3), 'e' retorna o segundo 
// valor do array, que recebeu um novo valor (19), 'f' retorna valor, que é o sexto item do array (9)

