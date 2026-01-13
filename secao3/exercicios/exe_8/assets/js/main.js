function executarIMC () {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    
    function calcularIMC (peso, altura){
        peso = Number(peso)
        altura = Number(altura)

        return peso / (altura * altura)
    }


    function processar_dados (dados){
        dados.preventDefault();
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');
        let imc = calcularIMC(peso.value, altura.value)
        imc = imc.toFixed(2)
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

        if (isNaN(peso) || isNaN(altura)){
            resultado.innerHTML = `Peso ou Altura inválidos`
        } else{
            resultado.innerHTML = `Seu IMC é: ${imc} - ${classificacao}`
        }
        
    

        
    };

    form.addEventListener('submit', processar_dados);



}

executarIMC();

//