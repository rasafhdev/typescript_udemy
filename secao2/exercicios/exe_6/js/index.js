// Solicite ao usuário para digitar um numero
/*
Saída:
    Raiz quadrada
    Verificar se inteiro
    É NAN
    Arredondar para baixo
    Arredondar para cima
    2 Casas decimais

*/


let x = prompt('Digite um numero: ');
let y = Number(x)

document.body.innerHTML += `${typeof(y)}`;

document.body.innerHTML += `Numero digitado: ${x} <br />`;
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(y)}<br />`;
document.body.innerHTML += `É inteiro ${Number.isInteger(y)} <br />`;
document.body.innerHTML += `Arredondado pra cima ${Math.ceil(y)} <br />`;
document.body.innerHTML += `Arredondado pra baixo ${Math.floor(y)} <br />`;
document.body.innerHTML += `Com duas casas decimais ${y.toFixed(2)}<br />`;