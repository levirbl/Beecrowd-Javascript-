let numbers = prompt("numbers").split(" "); Console = ''; Sum = 0;
let x = parseInt(numbers.shift());
let y = parseInt(numbers.shift()); aux = 0;

while (x > 0 && y > 0) {

    if (y > x) {
        aux = x;
        x = y;
        y = aux;
    }

    for (y; y <= x; y++) {
        Console += `${y} `;
        Sum += y;
    }

    console.log(`${Console}Sum=${Sum}`);
    numbers = prompt("numbers").split(" ");
    x = parseInt(numbers.shift());
    y = parseInt(numbers.shift());
    Console = ''; Sum = 0;
}
