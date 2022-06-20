let Fatorial = numero => {
    var fat = 1;
    for (numero; numero>0; numero--) {
        fat = fat*numero;
    }
    return fat;
}

console.log(Fatorial(parseInt(prompt('fatorial'))));