let numbers = prompt("numeros").split(" ");
let X = parseInt(numbers.shift());
let Y = parseInt(numbers.shift()), consol = '', aux = 1, aux2 = X;

while (aux <= Y) {
	while (aux <= X) {
		if (X <= Y) {
			(aux == X) ? consol += aux : consol += aux+' ';
			aux++;
		}
	}
	console.log(consol);
	X += aux2, consol = '';
}