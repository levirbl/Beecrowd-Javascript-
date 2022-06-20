let n = parseInt(prompt());
let i = 1;
while (i < 10000) {
    if (i%n == 2) {
        console.log(i);
    }
    i++;
}