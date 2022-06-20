const test = parseInt(prompt("casos de test"));

for (let i = 0; i < test; i++) {
   let tomadas = prompt("linhas").split(" ").map(Number);
   let lines = tomadas.shift(), soma = 0;

   for (let i = 0; i < tomadas.length; i++) {
      soma += tomadas[i];
   }
   soma = soma - (lines - 1)

   console.log(soma);
}