function Continuidade(denominador, divisor) {
    let S = 0;
    for (denominador, divisor; denominador <= 39; denominador+=2, divisor*=2) {
        S += (denominador/divisor);
    }
    console.log(S.toFixed(2));
}
Continuidade(1, 1);