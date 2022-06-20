var n = parseInt(prompt());

while (n > 0)
{
    var [h, d, g] = prompt().split(' ').map(Number);

    if ((h < 200 || h > 300) || d < 50 || g < 150) {
        console.log('Nao')
    }
    else {
        console.log('Sim')
    }

    n -= 1
}