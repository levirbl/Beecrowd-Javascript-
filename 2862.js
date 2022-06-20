for (let casosTest = parseInt(prompt("casos de test")); casosTest > 0; casosTest--) {
    let nivelSeres = parseInt(prompt('nivel dos seres'));
    (nivelSeres > 8000) ? console.log("Mais de 8000!") : console.log("Inseto!");
}