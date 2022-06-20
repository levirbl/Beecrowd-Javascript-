let a = Number(prompt());
let k,aux = 0, aux2;

if (a < 0 || a > 10)
{
    a = 0;
    k = a;
    console.log('nota invalida');
}
else {
    aux = a;
    a = 1;
    k = a;
}
while (k < 2)
{
    let a = Number(prompt());
    if (a < 0 || a > 10) {
        a = 0;
        console.log('nota invalida');
    }
    else {
        if (aux == 0) {
            aux = a;
        }
        else {
            aux2 = a;
        }
        k += 1;
    }
}
console.log(`media = ${((aux+aux2)/2).toFixed(2)}`);