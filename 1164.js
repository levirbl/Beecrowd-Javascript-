let test = parseInt(prompt("casos de teste")), sum=0;

for (let count = 0; count < test; count++) {
  var number = parseInt(prompt("numero"));
  for (let i = 1; i<number; i++) {
    if (number%i == 0) {
      sum += i;
    }
  }
  
  (sum == number) ? console.log(`${number} eh perfeito`) : console.log(`${number} nao eh perfeito`);
  sum = 0;
}