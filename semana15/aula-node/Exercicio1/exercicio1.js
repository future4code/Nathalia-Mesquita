//a. devemos escrever "node 'nome-do-arquivo' "

//b. 
const nome = process.argv[2];
const idade = process.argv[3];

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)