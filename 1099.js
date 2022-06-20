let count = parseInt(prompt("n vezes")); imparesX = 0; imparesY = 0;

for (count; count > 0; count--) {
    let numbers = prompt('numeros').split(" ");
    let X = parseInt(numbers.shift());
    let Y = parseInt(numbers.shift());

    if (X == Y) {
        console.log(0);
    }
    if (X-1 == Y) {
        console.log(0);
    }
    if (Y-1 == X) {
        console.log(0);
    }

    if (X - Y >= 2) {
        X--, Y++;
        while (X >= Y) {
            if (X%2 != 0) {
                imparesX += X;
            } else {
               imparesX += 0;
            }
          X--;
        }
        console.log(imparesX);
    }
    else if (Y - X >= 2) {
        X++, Y--;
        while (Y >= X) {
            if (Y%2 != 0) {
                imparesY += Y;
            } else {
                imparesY += 0;
            }
          Y--;  
        }
        console.log(imparesY);
    }
    imparesX = 0, imparesY = 0;
}