// Crie 3 variaveis mútaveis contendo os valores: A B C
/*
Saída: 
    O valor de A deve ter o valor de B
    O Valor de B deve ter o valor de C
    O valor de C deve ter o valor de A



let a = 'A'
let b = 'B'
let c = 'C'

const temp = a
a = b
b = c
c = temp

console.log(a, b, c)
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varB, varC, varA)