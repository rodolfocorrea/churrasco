let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");
let resultado = document.getElementById("result");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdults.value;
    let criancas = inputChildren.value;
    let duration = inputDuration.value;
    
    let qtcarne = carnePP(duration) * adultos + (carnePP(duration) / 2 * criancas);
    let qtcerveja = cervejaPP(duration) * adultos;
    let qtbebida = bebidaPP(duration) * adultos + (bebidaPP(duration) / 2 * criancas);

    result.innerHTML = `<p>${Math.ceil(qtcarne / 1000)} Kg de carne (linguiça, frango, carne, etc.)</p>`
    result.innerHTML += `<p>${Math.ceil(qtcerveja / 350)} Latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(qtbebida / 1000)} Litros de bebidas (água, suco, refrig., etc.)</p>`
}
function carnePP(duration) {
    if (duration >= 6) {
        return 650;
    }else {
        return 400;
    }
}
function cervejaPP(duration) {
    if (duration >= 6) {
        return 2000;
    }else {
        return 1200;
    }
}
function bebidaPP(duration) {
    if (duration >= 6) {
        return 1000;
    }else {
        return 500;
    }
}