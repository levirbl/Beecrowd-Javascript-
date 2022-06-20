const quantity = parseInt(prompt("quantidade"));
let myArray = [], i = 0;

while (i < 999) {
    for (let count = 0; count < quantity; count++) {
        if (i > 999) {break;}
        myArray.push(count);
        console.log(`N[${i}] = ${count}`);
        i++;
    }
}