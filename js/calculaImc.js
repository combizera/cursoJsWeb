var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var pesoEhValido = validaPeso(peso);

    var tdAlt = paciente.querySelector(".info-altura");
    var alt = tdAlt.textContent;
    var altEhValida = validaAltura(alt);
    
    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!altEhValida) {
        altEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && altEhValida){
        var imc = calculaImc(peso,alt);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){
    if (peso >= 0 && peso <= 600){
        return true;
    } else {
        return false;
    }
}

function validaAltura(alt){
    if (alt >= 0 && alt <= 3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, alt){
    var resultadoImc = 0;
    var resultadoImc = peso / (alt*2);
    return resultadoImc.toFixed(2);
}