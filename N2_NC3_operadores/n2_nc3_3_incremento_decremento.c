#include <stdio.h>

int main(){

    /*
    Incrmento (++)
    Pré-Incremento (++a)
    Pós-Incremento (a++)
    Decremento (--)
    Pré-Decremento (--a)
    Pós-Decremento (a--)
    */

    int numero1 =1;

    printf("Antes incremento: %d\n", numero1);

    // numero1 = numero1 + 1
    // numero1 += 1
    numero1 ++;
    printf("Após incremento: %d\n", numero1);

    // numero1 = numero1 - 1
    // numero1 -= 1
    numero1 --;
    printf("Após decremento: %d\n", numero1);

}