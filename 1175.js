let myArray = new Array(20);
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = parseInt(prompt("numeros"));
}
myArray.reverse();

for (let i = 0; i < myArray.length; i++) {
    console.log(`N[${i}] = ${myArray[i]}`)
} 