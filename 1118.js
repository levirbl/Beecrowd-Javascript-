var aux = 0, aux2 = 0; newc = 1; test = 0; k = 0

do {
    while (k < 2) {
        var a = Number(prompt());
        if (a < 0 || a > 10)
        {
            a = 0;
            k = a;
            console.log('nota invalida');
        }

        else {
            aux = a;
            a = 1;
            k = a;
        }
        
        while (k < 2)
        {
            var a = Number(prompt());
            if (a < 0 || a > 10) {
                a = 0;
                console.log('nota invalida');
            }

            else {
                if (aux == 0) {
                    aux = a;
                }

                else {
                    aux2 = a;
                }
              k += 1;
            }
        }
      console.log(`media = ${((aux+aux2)/2).toFixed(2)}`);
    }

    while (test !=1 && test !=2) {
        console.log(`novo calculo (1-sim 2-nao)`);    
        test = parseInt(prompt('novo calculo'));
        if (test == 2) {newc = 0};
        if (test == 1) {newc = 1, k = 0};
    } 

  test = 0;
} 

while (newc == 1);