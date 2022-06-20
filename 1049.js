// var input ='invertebrado anelideo onivoro'
var lines = input.split(' ')

var a = lines.shift(); 
var b = lines.shift(); 
var c = lines.shift(); 

if (a == 'vertebrado') {
    if (b == 'mamifero') {
        if (c == 'onivoro') {
            console.log('homem');
        }
        if (c == 'herbivoro') {
            console.log('vaca');
        }
    }
    if (b == 'ave') {
        if (c == 'carnivoro') {
            console.log('aguia');
        }
        if (c == 'onivoro') {
            console.log('pomba');
        }
    }
} 
if (a == 'invertebrado') {
    if (b == 'anelideo') {
        if (c == 'hematofago') {
            console.log('sanguessuga');
        }
        if (c == 'onivoro') {
            console.log('minhoca');
        }
    }
    if (b == 'inseto') {
        if (c == 'hematofago') {
            console.log('pulga');
        }
        if (c == 'herbivoro') {
            console.log('lagarta');
        }
    }
} 