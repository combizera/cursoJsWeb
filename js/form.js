var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    // qndo colocamos um .preventDefault() o programa faz
    //exatamente o proposto, previne um comportamento padrão
    // é necessário lembrar que também temos de colocar um
    //"(event)" dentro da function
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        //estou atribuindo ao paciente um ATRIBUTO de nome
        //q estou pegando do "form.nome"
        peso: form.peso.value,
        alt: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;      
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.alt, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = []
    
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if(!validaAltura(paciente.alt)) erros.push("Altura é inválida");
    
    if(paciente.gordura > 100 || paciente.gordura < 0){
        erros.push("É impossível ter essa gordura corporal")
    }

    if(paciente.nome.length == 0) erros.push("Você precisa cadastrar um nome")
    if(paciente.peso.length == 0) erros.push("Você precisa cadastrar um peso")
    if(paciente.alt.length == 0) erros.push("Você precisa cadastrar uma altura")
    if(paciente.gordura.length == 0) erros.push("Você precisa cadastrar uma gordura corporal")


    return erros;
}