let x = 1, y = 1;

while (x != 0 && y != 0)
{
    [x, y] = prompt().split(' ').map(Number);
    x = parseInt(x), y = parseInt(y);

    if (x > 0 && y > 0) {
        console.log('primeiro');
    }
    else if (x < 0 && y > 0) {
        console.log('segundo');
    }
    else if (x < 0 && y < 0) {
        console.log('terceiro');
    }
    else if (x > 0 && y < 0) {
        console.log('quarto');
    }
}