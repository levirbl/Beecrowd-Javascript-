let n = parseInt(prompt());
while (n > 0) {
    let [n1, n2, n3] = prompt().split(' ').map(Number);
    let media = (((n1*2) + (n2*3) + (n3*5)) / 10).toFixed(1);
    console.log(media); n--;
}