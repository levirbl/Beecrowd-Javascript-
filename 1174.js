let myVetor = new Array(10), i =0;
for (i; i < myVetor.length; i++) {
    myVetor[i] = Number(prompt("numero"));
}
i = 0;

for (i; i < myVetor.length; i++) {
    if (myVetor[i] <= 10) {
        console.log(`A[${i}] = ${myVetor[i].toFixed(1)}`);
    }
}