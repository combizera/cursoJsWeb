var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
 
    setTimeout(function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; //o pai do even
        paiDoAlvo.remove();
    }, 300);
//o comando timeout faz com que o js espere x tempo em milessegundos
    
});