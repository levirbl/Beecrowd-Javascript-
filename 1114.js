let senha = 0;
while (senha != 2002)
{
    senha = parseInt(prompt());
    if (senha == 2002) {
        console.log('Acesso Permitido')
    }
    else {
        console.log('Senha Invalida')
    }
}