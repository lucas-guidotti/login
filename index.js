const emailVerdadeiro = 'mateus@email.com'
const senhaVerdadeira = '1234'

function acesso(){
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;

    if(email != '' && senha != ''){
        
        var resultado = this.login(email , senha);

        if(resultado == true){
            alert('Olá, bem vindo Mateus!');
        }else{
            alert('Email e/ou senha incorretos!');
        }
        
    }else{
        alert('Favor adicionar um email e senha!');
    }


}

function login(email , senha){
    if(email == emailVerdadeiro && senha == senhaVerdadeira){
        return true
    }else{
        return false
    }

}