let area = prompt("Seguir para a área front-end(1) ou back-end(2)?");

if (area == "1"){
    prompt("Aprender React(1) ou Vue(2)?")
    area =  "front-end"
} else if (area == "2"){
    prompt("Aprender C#(1) ou Java?(2)")
    area = "back-end"
} else {
    alert("Opção inválida")
    area = "back-end/front-end!"
    
}

let seguirAreaOuFullstack = prompt("Seguir se especializando na área escolhida(1) ou seguir se desenvolvendo para se tornar fullstack?(2)");
    if (seguirAreaOuFullstack == 1){
        alert(`Justo! Continue estudando você será fera em ${area}!`)
    }
    if (seguirAreaOuFullstack == 2){
        alert(`Justo! Continue estudando que você será um fullstack de sucesso!`)
    }
    

let tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 para SIM e 2 para NÃO");

    while (tecnologia == 1){
        let escolha = prompt("Digite a tecnologia que você gostaria de se especializar/conhecer")
        alert(`Então você quer aprender ${escolha}...`)
        let tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 para SIM e 2 para NÃO");

        if (tecnologia == 2){
            alert("Então são essas as tecnologias que você quer aprender. Legal, boa sorte!");
            break;
        }
    }
    
    
