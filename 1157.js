let number = parseInt(prompt("numero"));

for (let dividendo = 1; dividendo <= number; dividendo++) {
    if (number%dividendo == 0) {
        console.log(dividendo);
    }
}