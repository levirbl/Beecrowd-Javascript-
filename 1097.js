let i = 1, j = 7, count = 1;

while (i < 10) {
    console.log(`I=${i} J=${j}`);
    if (count == 3) {
        i +=2;
        j += 4;
        count = 0;
    } else {
        j--;
    }
    count ++;
}