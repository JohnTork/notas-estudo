//13. Peça um número inteiro e diga se ele é par ou ímpar.    
// (Dica: se o número dividido por 2 tiver resto 0, é par)

//Entrada
// sempre colocaremos variavel (const, let ou var)
//const - algo fixo
// let - não fixo
// var - erro
// explicar do que se trata ao usuario

// pedir informação para o usuario usando o (prompt) explicar dentro do prompt do que se trata a solicitação

const numero = Number(prompt('Digite um número, vou validar se é par ou impar'))

//Processamento
//Normalmente será feito um calculo
// Pode conter varialvel
// fazer uma divisão e pegar o resto
// % vai pegar o primeiro resto da divisão

const resto = numero % 2

//Saída
// mostar o resultado com alert()
if (resto == 0) {
    alert("O número informado é par")
} else {
    alert('O número informado é impar')
}