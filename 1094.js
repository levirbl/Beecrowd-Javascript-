let count = parseInt(prompt('nº de vezes'));
let totalCobaias = [], coelhos = 0, ratos = 0, sapos = 0;

for (let i = 0; i < count; i++) {
    totalCobaias.push(prompt("coelhos, ratos, sapos"));

    if (totalCobaias[i][2] == 'C' || totalCobaias[i][3] == "C") {
        coelhos += parseInt(totalCobaias[i][0] + totalCobaias[i][1]); 
    } else if (totalCobaias[i][2] == 'R' || totalCobaias[i][3] == "R") {
        ratos += parseInt(totalCobaias[i][0] + totalCobaias[i][1]);
    } else if (totalCobaias[i][2] == 'S' || totalCobaias[i][3] == "S") {
        sapos += parseInt(totalCobaias[i][0] + totalCobaias[i][1]); 
    }
}

let total = coelhos + ratos + sapos;
let peC = ((coelhos*100) / total).toFixed(2);
let peR = ((ratos*100) / total).toFixed(2);
let peS = ((sapos*100) / total).toFixed(2);

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${peC} %`);
console.log(`Percentual de ratos: ${peR} %`);
console.log(`Percentual de sapos: ${peS} %`);

/* (x.92)/100 = 40 ; 92x/100 = 40
    4000 = 92x; x = 4000 / 92 */