//cpatura do elemento principal que é a tela de login
const form = document.querySelector('#form-login');

// adicionando um escutador do evento do botão submit
form.addEventListener ('submit', function(e){
    e.preventDefault();
    
    const userInput = e.target.querySelector('#user');
    const passwordInput = e.target.querySelector('#password');

    validLogin(userInput.value, passwordInput.value);

});


// função para validar o login
function validLogin(user, password) {
    const correctUser = "rodrigo.asafh";
    const correctPassword = "123456";


    if (user === correctUser && password === correctPassword){
        sendMessage('Login realizado com sucesso', true)
        return true
    } else{
        sendMessage('Usuário ou senha inválido', false)
        return false
    };
};

// Função para enviar mensagem

function sendMessage(msg, flag){
    const resultado = document.querySelector('.resultado');
    console.log(msg);
    console.log(flag);
    resultado.innerHTML = '';

    if (!flag){
        resultado.classList.add('bad');
        resultado.innerHTML = msg;
    } else {
        resultado.classList.add('succsess');
        resultado.innerHTML = msg;
    };
    

    

}