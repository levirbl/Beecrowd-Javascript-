const chosenLine = parseInt(prompt("Linha escolida"));
const chosenOperation = prompt("S - Soma\nM -Media");
let myArray = new Array(12);

for (let i = 0; i < 12; i++) {
    myArray[i] = [];
}

for (let i = 1, count = 0; count < 12; i++) {
    myArray[count].push(Number(prompt("numeros")));

    if (i == 12) {
        count++;
        i = 0;
    }
    //console.log(myArray);
}

if (chosenOperation == "S") {
    var soma = 0;
    for (let i = 0; i < 12; i++) {
        soma += myArray[chosenLine][i];
    }
    console.log(soma.toFixed(1));
}
else if (chosenOperation == "M") {
    var media = 0;
    for (let i = 0; i < 12; i++) {
        media += myArray[chosenLine][i];
    }
    media = media/12;
    console.log(media.toFixed(1));
}