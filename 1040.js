// var input ='5.0 0.0 10 0.0\n9'
var lines = input.replace("\n"," ").split(" ");

var N1 = parseFloat(lines.shift());
var N2 = parseFloat(lines.shift());
var N3 = parseFloat(lines.shift());
var N4 = parseFloat(lines.shift());

var mediap = ((N1*2 + N2*3 + N3*4 + N4*1) / 10);
console.log(`Media: ${mediap.toFixed(1)}`);

if (mediap >= 7) {
    console.log('Aluno aprovado.')
} else if (mediap < 5) {
    console.log('Aluno reprovado.')
}
if ((mediap >= 5)&&(mediap <= 6.9)) {
    var N5 = parseFloat(lines.shift());
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${N5.toFixed(1)}`);
    
    var media = ((mediap + N5) / 2);
    if (media >= 5) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado');
    }

    console.log(`Media final: ${media.toFixed(1)}`);

}