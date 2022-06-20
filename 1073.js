let n = parseInt(prompt()); na = n, n=0;
while (n <= na) {
    let par = n%2;
    if (n!=0) {
        if (par == 0) {
            console.log(`${n}^2 = ${Math.pow(n, 2)}`);
        }
    }
    n++;
}