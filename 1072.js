let n = parseInt(prompt()), p1, count1 = 0, count2 = 0;
while (n != 0)
{
    p1 = parseInt(prompt());
    if (p1 >= 10 && p1 <= 20) {count1++;} else {count2++;};
    n--;
}
console.log(`${count1} in`);
console.log(`${count2} out`);