let x = parseInt(prompt()), y = parseInt(prompt());
let soma = 0;
if (x > y)
{
    if (x-1 == y) {console.log(0);}
    else {
        x--; y++; //console.log(x); console.log(y);
        while (x >= y)
        {
            if (x%2 == 1 || x%2 == -1) {
                soma = soma + x;
            }
            x--;
        }
      console.log(soma);
    }
}
else if (x < y)
{
    if (x+1 == y) {console.log(0)}
    else {
        x++; y--; //console.log(x); console.log(y);
        while (x <= y)
        {
            if (x%2 == 1 || x%2 == -1) {
                soma = soma + x;
            }
            x++;
        }
      console.log(soma);
    }
}
else {console.log(0);}
