document.addEventListener("DOMContentLoaded", function(){
    var contador = 0;
    var botao = document.getElementById("contador");
    var resultado = document.getElementById("resultado");

    botao.addEventListener("click", function(){
        contador++;
        resultado.innerHTML = contador;
    });
});