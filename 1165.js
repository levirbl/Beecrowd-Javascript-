function Primo(quantidade) {
    while (quantidade > 0) {
        var aux = 0;
        let numero = parseInt(prompt('numero')), count = 1;
        while (count <= numero) {
            if (numero%count == 0) {
                aux++;
            }
            count++;
        }

        (aux == 2) ? console.log(`${numero} eh primo`) : console.log(`${numero} nao eh primo`);
        quantidade--;
        aux = 0;
    }
}
Primo(parseInt(prompt('quantidade')));