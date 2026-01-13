// Funções gerais



// Fx Principal
const form = document.querySelector('#form');
form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento previnido')

    // pega os valores 
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    // Converte em outra váriavel, 
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Valida se o o peso e altura são validos como numero
    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }


    // Calcula o IMC cahamando a função
    const imc = getImc(peso, altura);
    console.log(imc.toFixed(2))

    // Recebe a classificação
    const classificacao = getClassificacaoIMC(imc);
    console.log(classificacao)


    // Mesagem
    const msg = `Seu IMC é ${imc.toFixed(2)} - (${classificacao})`
    setResultado(msg, true);




});


function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else { 
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);


};

function getImc (peso, altura) {
    return peso / (altura * altura)
};

function getClassificacaoIMC (imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    if (imc >= 39.9){
        return nivel[5]
    } 
    
    if (imc >= 34.9){
        return nivel[4]
    }
    
    if (imc >= 29.9){
        return nivel[3]
    }
    
    if (imc >= 24.9){
        return nivel[2]
    }
    
    if (imc >= 18.5){
        return nivel[1]
    }
    
    if (imc < 18.5) {
        return nivel[0]
    }

}