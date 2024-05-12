function horario(){

    let contador = document.getElementById('display');
    let agora = new Date();
    let data = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());

    contador.textContent = data;

}

function corrigirHorario(numero){

    if (numero < 10){
        numero = '0' + (numero);
    }

    return numero;
}

horario();

setInterval (horario, 1000);

