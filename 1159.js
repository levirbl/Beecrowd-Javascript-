let number = parseInt(prompt("numero"));

while (number != 0) {
    (number%2 != 0) ? number++ : number += 0;

    var soma = number, aux = soma, aux1 = 0
    for (let count = 0; count < 4; count++) {
        aux1 += 2;
        soma += aux + aux1;
    }

    console.log(soma);
    number = parseInt(prompt("numero"));
}