let num1 = parseInt(prompt("num 1"));
let num2 = parseInt(prompt("num 2")), aux, soma = 0;

if (num2 < num1) {
    aux = num1;
    num1 = num2;
    num2 = aux;
}

for (let count = num1; count <= num2; count ++) {
    if (count % 13 != 0) {
        soma += count;
    }
}

console.log(soma);