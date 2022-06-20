var N = parseInt(prompt("valor do dinheiro"));
var N100, N50, N20, N10, N5, N2 ,N1;

N100 = parseInt(N/100); R100 = N%100
N50 = parseInt(R100/50); R50 = R100%50
N20 = parseInt(R50/20); R20 = R50%20
N10 = parseInt(R20/10); R10 = R20%10
N5 = parseInt(R10/5); R5 = R10%5
N2 = parseInt(R5/2); R2 = R5%2
N1 = parseInt(R2/1); R1 = R2%1

 console.log(N)
 console.log(N100+' nota(s) de R$ 100,00')
 console.log(N50+' nota(s) de R$ 50,00')
 console.log(N20+' nota(s) de R$ 20,00')
 console.log(N10+' nota(s) de R$ 10,00')
 console.log(N5+' nota(s) de R$ 5,00')
 console.log(N2+' nota(s) de R$ 2,00')
 console.log(N1+' nota(s) de R$ 1,00')

 // % == resto da divisão