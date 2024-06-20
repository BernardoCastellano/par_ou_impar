let numeroGerado = 0;

function gerarNumero() {
    numeroGerado =  parseInt(Math.random() * numeroLimite + 1);
    document.getElementById("resultado").innerHTML = numeroGerado;
    console.log(numeroGerado);
} 

function zerar() {
    document.getElementById("resultado").innerHTML = '0';
    document.querySelector(".container").style.backgroundColor = '';
    numeroGerado = 0;
}

function indentificarNumero() {
    if(numeroGerado === 0){
        alert("Gere um número primeiro!")
    }else{
        if (numeroGerado % 2 === 0) {
            document.querySelector(".container").style.backgroundColor = '#07064b';
            } else {
                document.querySelector(".container").style.backgroundColor = '#961919';
            }
    }
   
}

const numeroLimite = 10000;