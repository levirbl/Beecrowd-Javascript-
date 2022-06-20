let numbers = [];

for (let count = 1; count <= 100; count++) {
    numbers .push(parseInt(prompt("numbers")));
}

let maior = Math.max.apply(null, numbers);
let pos = numbers.indexOf(maior);
console.log(maior);
console.log(pos+1);