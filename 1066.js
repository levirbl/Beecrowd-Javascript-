let pares = 0, impares = 0, positivos = 0, negativos = 0;
for (count = 5; count > 0; count--) {
    let numero = parseInt(prompt('numero'));
    if (numero%2 == 0) {pares++;}
    if (numero%2 != 0) {impares++;}
    if (numero > 0) {positivos++;}
    if (numero < 0) {negativos++;}
}
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativos(s)`);