let number = parseInt(prompt("numero")), aux = 1, consol = '';

while (number != 0) {
	while (aux <= number) {
		(aux == number) ? consol += aux : consol += aux+' ';
		aux ++
	}
	console.log(consol);
	number = parseInt (prompt("numero")), aux = 1, consol = '';
}