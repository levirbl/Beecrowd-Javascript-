let grenal = prompt("resultado do grenal").split(" ");
let interResult = parseInt(grenal.shift());
let gremioResult = parseInt(grenal.shift()); condition = 1; inter = 0; gremio = 0; empate = 0;

while (condition == 1) {
    if (interResult > gremioResult) {
        inter++;
    }
    else if (interResult == gremioResult) {
        empate++;
    }
    else if (interResult < gremioResult) {
        gremio++;
    }

    console.log("Novo grenal (1-sim 2-nao)");
    condition = parseInt(prompt("novo grenal? 1-sim 2-nao"));
    if (condition == 1) {
        grenal = prompt("resultado do grenal").split(" ");
        interResult = parseInt(grenal.shift());
        gremioResult = parseInt(grenal.shift());
    }
}

grenal = inter + gremio + empate;
console.log(`${grenal} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empate}`);

if (inter == gremio) {
    console.log("Nao houve vencedor");
}
else if (inter > gremio) {
    console.log(`Inter venceu mais`);
}
else if(inter < gremio) {
    console.log("Gremio venceu mais");
}