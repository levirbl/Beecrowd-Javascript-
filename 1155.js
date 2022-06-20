function Continuidade(S) {
    let total = 0;
    for (S; S <= 100; S++) {
        total += (1/S);
    }
    console.log(total.toFixed(2));
}
Continuidade(1);