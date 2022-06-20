let valores = prompt("valores").split(" ");
let a = parseInt(valores[0]);
let n = parseInt(valores[valores.length - 1]);

let soma = 0
for (let i = 0; i != n; i++) {
   soma += a + i
}

console.log(soma);