const test = parseInt(prompt("casos de teste"));

for (let count = 0;count < test; count++) {
    let numbers = prompt("numbers").split(' ');
    var initialNumber = parseInt(numbers.shift());
    var quantityImpar = parseInt(numbers.shift());
    var soma = 0, aux = 0, aux1 = 0;

    (initialNumber%2 == 0) ? initialNumber += 1 : initialNumber += 0;

    soma = initialNumber, aux = soma;
    for (let i = 1; i < quantityImpar; i++) {
        aux1 += 2;
        soma += aux+aux1;
        //console.log(soma)
    }

    console.log(soma)
    soma = 0;
}