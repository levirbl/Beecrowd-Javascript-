let x = parseInt(prompt()), y = parseInt(prompt());
let soma = 0;
if (x > y)
{
    if (x-1 == y) {console.log(0);}
    else {
        x--; y++; //console.log(x); console.log(y);
        while (x >= y)
        {
            if (x%5 == 2 || x%5 == -2 || x%5 == 3 || x%5 == -3) {
                console.log(x);
            }
            x--;
        }
    }
}
else if (x < y)
{
    if (x+1 == y) {console.log(0)}
    else {
        x++; y--; //console.log(x); console.log(y);
        while (x <= y)
        {
            if (x%5 == 2 || x%5 == -2 || x%5 == 3 || x%5 == -3) {
                console.log(x);
            }
            x++;
        }
    }
}
else {console.log(0);}