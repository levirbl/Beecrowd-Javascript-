let pares = 0;
for (count = 5; count > 0; count--) {
    let numero = parseInt(prompt('numero'));
    if (numero%2 == 0) {pares++;}
}
console.log(`${pares} valores pares`);