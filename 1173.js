let Vetor = new Array(10), numero = parseInt(prompt("Numero"));
for (let i = 0; i < Vetor.length; i++) {
   Vetor[i] = numero;
   console.log(`N[${i}] = ${Vetor[i]}`);
   numero = numero*2;
}