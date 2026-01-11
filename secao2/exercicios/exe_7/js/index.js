// Crie um formulário em HTML para calcular o IMC em JavaScript
/*
Entrada:
    Nome
    Sobrenome
    Peso
    Altura

Saída:
    Deverá mostrar na página o nome do aluno, IMC do aluno, e faixa do IMC.
*/


function calcularImc () {
    const form = document.querySelector('#form');
    const saida = document.querySelector('#saida');
    const pessoas = [];

    /*
        Ao trabalhar com formulários devemos prevenir o comportamento
        padrão do sistema, que é atualizar o navegador, fazendo com que percamos o que está sendo realizado.

        Existem 2 formas:
        1) Criando um função anonima com onsubmit (on... alguma coisa),
        2) Escutando o evento com o nome do objeto e o tipo, ou a função.

    */
    

    /* Modo 1)
    form.onsubmit = function (event) {
        event.preventDefault();
        alert('Evento não enviado')
        console.log('Formulário não enviado, methodo 1 com prevent default')
    };

    
    // Modo 2, mas morderno
    function recebeEvento (evento){
        evento.preventDefault();
        alert('Evento não enviado');
        console.log('Preveni o evento!!');
    }
    
    form.addEventListener('submit', recebeEvento);

    // Modo 3
    //form.addEventListener('submit', console.log('Formulário não enviado!!'))
    */

    // ####### RESOLUÇÃO AQUI ##########

    function resultado_imc (peso, altura){
        peso = Number(peso)
        altura = Number(altura)

        
        return peso / (altura * altura)
    }

    function getUserData (data) {
        data.preventDefault();

        // Captura dos campos
        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#sobrenome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')
        const imc = resultado_imc(peso.value, altura.value)
        let classificacao = ''


        if (imc >= 40) {
            classificacao = 'Obesidade Mórbida'    
            
        } else if (imc >= 35 ){
            classificacao = 'Obesidade Grau 2'
        
        } else if (imc >= 30) {
            classificacao = 'Obesidade Grau 1'
        
        } else if (imc >= 25){
            classificacao = 'Sobrepeso'
       
        } else if (imc >= 18.5){
            classificacao = 'Peso Normal'    

        } else {
            classificacao = 'Abaixo do Peso'
        };

        const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
        imc: imc.toFixed(2),
        classificacao: classificacao
        };
    
        pessoas.push(pessoa)
        console.log(pessoas)

        saida.innerHTML += `Nome: ${pessoa.nome}<br />`
        saida.innerHTML += `Sobrenome: ${pessoa.sobrenome}<br />`
        saida.innerHTML += `IMC: ${pessoa.imc}<br />`
        saida.innerHTML += `Classificação ${pessoa.classificacao}<br />`
        saida.innerHTML += `<hr>`

    };

    

    form.addEventListener('submit', getUserData)
};
calcularImc();