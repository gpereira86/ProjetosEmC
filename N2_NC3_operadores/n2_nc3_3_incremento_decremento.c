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

    int numero1 = 1, resultado;

    printf("Antes incremento: %d\n", numero1);

    // numero1 = numero1 + 1
    // numero1 += 1
//    numero1 ++;
//    printf("Após incremento: %d\n", numero1);
    
    // Pós-Incremento:
    //  >> ressultado = numero1;
    //  >> numero1++;
    resultado = numero1++;
    printf("Apos Pos-Incremento - Numero 1: %d - Resultado: %d\n", numero1, resultado);

    resultado = ++numero1;
    printf("Apos Pre-Incremento - Numero 1: %d - Resultado: %d\n", numero1, resultado);

    // numero1 = numero1 - 1
    // numero1 -= 1
//    numero1 --;
//    printf("Após decremento: %d\n", numero1);

    resultado = numero1--;
    printf("Apos Pos-Decremento - Numero 1: %d - Resultado: %d\n", numero1, resultado);

    resultado = --numero1;
    printf("Apos Pre-Decremento - Numero 1: %d - Resultado: %d\n", numero1, resultado);



}