function QuadradoCubo(numero) {
    var aux = numero, numero = 1;
    for (numero; numero <= aux; numero++) {
        let quadrado = Math.pow(numero, 2);
        let cubo = Math.pow(numero, 3)

        console.log(`${numero} ${quadrado} ${cubo}`);
    }
}

QuadradoCubo(parseInt(prompt()));

