function Fibonacci(vezes) {
    var a = 0, b = 1, p = 1,c = a;
    while (p<vezes) {
        p++;
        c=c+' '+b;
        s=b+a;
        a=b;
        b=s
    }
    console.log(c);
}

Fibonacci(parseInt(prompt('numnero de vezes')));