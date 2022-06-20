let test = parseInt(prompt("casos de teste"));
const numbers = prompt("numeros").split(" ").map(Number);
//console.log(numbers);

Array.min = array => {
   return Math.min.apply(null, array);
}

let position = numbers.indexOf(Array.min(numbers));

console.log(`Menor valor: ${Array.min(numbers)}`);
console.log(`Posicao: ${position}`);