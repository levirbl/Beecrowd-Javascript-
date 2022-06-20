let i = 0, j = 10, count = 10, auxJ = 0;

while (i <= 20) {
    console.log(`I=${i/10} J=${j/10}`);
    if (count == 30) {
        i += 2;
        auxJ += 2;
        j = 10+auxJ;
        count = 0;
    } else {
        j += 10;
    }
    count += 10;
}