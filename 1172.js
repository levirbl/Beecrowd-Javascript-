let array = [], i = 0;
for (i; i < 10; i++) {
    array.push(parseInt(prompt("numero")));
}
i = 0;
console.log(array)
for (i; i < 10; i++) {
    if (array[i] <= 0) {
        array[i] = 1;
    }
    console.log(`X[${i}] = ${array[i]}`);
}