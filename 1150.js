let num1 = parseInt(prompt("numero 1")), num2, a, b ,c = 0;

do {
    num2 = parseInt(prompt("numero"));
} while (num1 >= num2)

for (a = num1, b = 0; b<num2; a++) {
    b+=a;
    c++;
}

console.log(c);