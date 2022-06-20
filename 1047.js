// var input ='7 10 8 9';
var lines = input.split(' ');

var h1 = parseInt(lines.shift());
var m1 = parseInt(lines.shift());
var h2 = parseInt(lines.shift());
var m2 = parseInt(lines.shift());

var horas = 24 - h1 + h2;
var minutos = 60 - m1 + m2;

if (minutos >= 60) {
    
    minutos = minutos - 60

    if (horas > 24){
        horas = horas - 24

        if (m1 > m2 || m2 + m1 < 60) {
            horas += 0
        } else if (m1 == m2 || m2 + m1 >= 60) {
            horas += 1
        }
    }

    if (horas < 23) {
        horas = horas
    }

    if (horas == 25) {
        
        if (m1 > m2 || m2 + m1 < 60) {
            horas = 0
        } else if (m1 == m2 || m2 + m1 >= 60) {
            horas += 1
        }

    }

    if (horas == 24) {

        if (m1 > m2 || m2 + m1 < 60) {
            horas += 0
        } else if (m1 == m2 || m2 + m1 >= 60) {
            horas += 1
        }
    }

} else {

    if (horas > 24) {

        if (horas == 25) {
        
            if (m1 > m2 || m2 + m1 < 60) {
                horas = 0
            } else if (m1 == m2 || m2 + m1 >= 60) {
                horas += 1
            }
        } else {
            horas = horas - 24

            if (m1 > m2 || m2 + m1 < 60) {
                horas = 0
            } else if (m1 == m2 || m2 + m1 >= 60) {
                horas += 1
            }
        }

    if (horas < 23) {
        horas = horas
    }

}}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)

