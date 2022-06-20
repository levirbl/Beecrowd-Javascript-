const alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let letter = prompt("letter of the alfabet");

for (let pos = 0; pos <= alfabet.length; pos++) {
    if (letter == alfabet[pos]) {
        console.log(pos+1);
    }
}