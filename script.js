
function NumEmpadas(){
    var frango = 0.02; //KG
    var farinha = 0.02; //KG
    var manteiga = 5.5; //g
    var ovos = 0.11; //g
    var ervilha = 4.4; //g
    var milho = 4.4; //g
    var knorr = 1.3; //g
    var tomate = 11.11 //g
    var azeitona = 4.4 //g

    var empadas = document.getElementById("visor").value;
    var frango = document.getElementById("frango").value = "Frango = " + (empadas*frango) + "KG"; 
    var farinha = document.getElementById("farinha").value = "Farinha = " + (empadas*farinha) + "KG";
    var manteiga = document.getElementById("manteiga").value = "Manteiga = " + (empadas*manteiga) + "g";
    var ovos = document.getElementById("ovos").value = "Ovos = " + Math.round(empadas*ovos) + " un";
    var ervilha = document.getElementById("ervilha").value = "Ervilha = " + Math.round(empadas*ervilha) + "g";
    var milho = document.getElementById("milho").value = "Milho = " + Math.round(empadas*milho) + "g";
    var knorr = document.getElementById("knorr").value = "Knorr = " + (empadas*knorr) + "g";
    var tomate = document.getElementById("tomate").value = "Tomate = " + Math.round(empadas*tomate) + "g";
    var azeitona = document.getElementById("azeitona").value = "Azeitona = " + Math.round(empadas*azeitona) + "g";
}
