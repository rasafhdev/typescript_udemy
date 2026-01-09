// Solicite o usuário para inserir o nome dele com o prompt
/*
Saídas:
Escrever o nome do usuário no documento html
1) Nome do usuário
2) Quantidade de letras
3) A segunda letra do nome do usuário
4) Qual é o primeiro indice da letra a do nome.
5) Qual é o ultimo indice da letra a do nome
6) As 3 ultimas letras do nome:
7) As palavras do seu nome são:
8) Nome com letras maiusculas:
9) Nome com letas maiusculas:
*/ 


//model document.body.innerHTML += `_ ${} <br />`
//let nome_usuario = prompt('Digite seu nome: ');



let nome_usuario = 'Rodrigo Asafh a';
document.body.innerHTML += `Nome: ${nome_usuario} <br />`;
document.body.innerHTML += `Quantidade de letras: ${nome_usuario.length} <br />`;
document.body.innerHTML += `Segunda letra: ${nome_usuario[1]} <br />`
document.body.innerHTML += `A letra aparece a prmieira vez na ${nome_usuario.indexOf('a')}ª posição <br />`
document.body.innerHTML += `A letra aparece a ultima vez na ${nome_usuario.lastIndexOf('a')}ª <br />`
document.body.innerHTML += `A letra ultimas letras: ${nome_usuario.slice(-3)}`
document.body.innerHTML += `_ ${nome_usuario.split(' ')} <br />`
document.body.innerHTML += `_ ${nome_usuario.toUpperCase()} <br />`
document.body.innerHTML += `_ ${nome_usuario.toLowerCase()} <br />`