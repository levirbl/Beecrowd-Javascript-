const test = parseInt(prompt("casos de teste"));
let services = prompt("bandejas e copos").split(" ");
let bandejas = parseInt(services.shift()), copos = parseInt(services.shift()), total = 0;

for (let count = 0; count < test; count++) {
    if (bandejas > copos) {
        total += copos;
    }

    if (count != test - 1) {
        services = prompt("bandejas e copos").split(" ");
        bandejas = parseInt(services.shift()), copos = parseInt(services.shift());
    }
}

console.log(total);