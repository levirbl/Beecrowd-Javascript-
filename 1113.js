let n1 = 1, n2 = 2;
while (n1 != n2) {
    test = prompt().split(' ').map(Number);
    n1 = test[0], n2 = test[1];
    if (n1 > n2) {
        console.log('Decrescente')
    }
    else if (n1 < n2) {
        console.log('Crescente')
    }
}