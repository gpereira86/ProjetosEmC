#include <stdio.h>

int main()
{
    int numero = 11;
    int resultado;

    resultado = numero % 2;

    if (resultado == 0)
    {
        printf("O numero é par\n");
    } else {
        printf("O numero é impar\n");
    }
    
    return 0;
}
