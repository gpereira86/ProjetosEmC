#include <stdio.h>

int main()
{
    /*
    // Obs.:  sem as chaves, executa somente a primeira linha após a condição ser atendida.
    if(condição) { // => Abre a chave
        // Bloco de código a ser executado
    } // => Fecha a chave
    */

    int numero1, numero2;

    numero1 = 5;
    numero2 = 5;

    if (numero1 > numero2)
    {
        printf("Número 1 é maior que número 2\n");
    }

    printf("Fora IF");
  
    return 0;
}
