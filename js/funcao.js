var nome = []
var idade = []
var genero = []
var temperatura = []
var estado = []

var i = 0
var total = 1

var total_genero = 0
var masculino = 0
var feminino = 0

var febre_normal= 0 
var estado_febriu = 0
var febre = 0

var total_idade = 0
var menores = 0
var adulto = 0
var idosos = 0

const nome_rese = document.getElementById("nome")
const idade_rese = document.getElementById("idade")
const genero_rese = document.getElementById("genero")
const temperatura_rese = document.getElementById("temperatura")
const estado_rese = document.getElementById("estado")

var idosos_febre = 0
var adulto_febre = 0
var menor_febre = 0

var por_menor_febre = 0
var por_adulto_febre = 0
var por_idoso_febre = 0


function armazenar() {
    nome.push(document.querySelector("#nome"));
    
    idade.push(document.querySelector("#idade").value);
        
        if (idade[total-1] < 18) {
            menores = menores + 1
        }
        else if (idade[total-1] >= 18 && idade[total-1] < 50) {
            adulto++
        }
        else if (idade[total-1] >= 50) {
            idosos++
        }

    genero.push(document.querySelector("#genero").value);

        if (genero[total - 1] == "masculino") {
            masculino = masculino + 1
        }
        else if (genero[total - 1] == "feminino") {
            feminino = feminino + 1
        }
        
    temperatura.push(document.querySelector("#temperatura").value);
        
        if ((temperatura[total - 1] >= 36) && (temperatura[total-1] <= 37.2)) {
            febre_normal = febre_normal + 1

            if (idade[total - 1] < 18) {
                por_menor_febre = (menor_febre / menores) * 100
            }

            else if ((idade[total - 1] >= 18) && (idade[total - 1] < 50)) {
                por_adulto_febre = (adulto_febre / adulto) * 100
            }

            else if (idade[total - 1] >= 50) {
                por_idoso_febre = (idosos_febre / idosos) * 100
            }
        }
        else if ((temperatura[total - 1] >= 37.3) && (temperatura[total-1] <= 37.7)) {
            estado_febriu = estado_febriu + 1
            if (idade[total - 1] < 18) {
                por_menor_febre = (menor_febre / menores) * 100
            }

            else if ((idade[total - 1] >= 18) && (idade[total - 1] < 50)) {
                por_adulto_febre = (adulto_febre / adulto) * 100
            }

            else if (idade[total - 1] >= 50) {
                por_idoso_febre = (idosos_febre / idosos) * 100
            }
        }

        else if (temperatura[total - 1] >= 37.8) {
            if (idade[total - 1] < 18) {
                febre = febre + 1
                menor_febre++
                por_menor_febre = (menor_febre / menores) * 100
            }

            else if ((idade[total - 1] >= 18) && (idade[total - 1] < 50)) {
                febre = febre + 1
                adulto_febre++
                por_adulto_febre = (adulto_febre / adulto) * 100
            }

            else if (idade[total - 1] >= 50) {
                febre = febre + 1
                idosos_febre++
                por_idoso_febre = (idosos_febre / idosos) * 100
            }
        }

    estado.push(document.querySelector("#estado").value);

    total += 1
    //--------------------------------------------------------------
    console.log(" Total cadastrado:",total -1)
    console.log(" Masculino:",masculino)
    console.log(" feminino:",feminino)
    console.log(" Febre normal:",febre_normal)
    console.log(" estado febriu:",estado_febriu)
    console.log(" febre:",febre)
    console.log(" menores:",menores)
    console.log(" adulto:",adulto)
    console.log(" idosos:",idosos)

    document.getElementById('por_menor_febre').value = por_menor_febre.toFixed(2)+"%"
    document.getElementById('por_adulto_febre').value = por_adulto_febre.toFixed(2)+"%"
    document.getElementById('por_idoso_febre').value = por_idoso_febre.toFixed(2)+"%"
    document.getElementById('por_masculino').value = masculino
    document.getElementById('por_feminino').value = feminino


    // idosos -------------------------------
    if (por_idoso_febre <= 10) {
        document.getElementById('por_idoso_febre').style.backgroundColor = "green";
    }
    else if (por_idoso_febre > 10 && por_idoso_febre <= 30) {
        document.getElementById('por_idoso_febre').style.backgroundColor = "orange";
    }
    else if (por_idoso_febre > 30) {
        document.getElementById('por_idoso_febre').style.backgroundColor = "red";
    }

    // Adulto -------------------------------
    if (por_adulto_febre <= 10) {
        document.getElementById('por_adulto_febre').style.backgroundColor = "green";
    }
    else if (por_adulto_febre > 10 && por_adulto_febre <= 30) {
        document.getElementById('por_adulto_febre').style.backgroundColor = "orange";
    }
    else if (por_adulto_febre > 30) {
        document.getElementById('por_adulto_febre').style.backgroundColor = "red";
    }

    // menor -------------------------------
    if (por_menor_febre <= 10) {
        document.getElementById('por_menor_febre').style.backgroundColor = "green";
    }
    else if (por_menor_febre > 10 && por_menor_febre <= 30) {
        document.getElementById('por_menor_febre').style.backgroundColor = "orange";
    }
    else if (por_menor_febre > 30) {
        document.getElementById('por_menor_febre').style.backgroundColor = "red";
    }
}

function resetar() {

    nome_rese.value = "";

    idade_rese.value = "";

    genero_rese.value = "";

    temperatura_rese.value = "";

    estado_rese.value = "";
};