#include <stdio.h>

int main(){

    int idade = 20;
    float altura = 1.75;

    /*
    idade >= 18 => Verdadeiro
    idade é <= 30 => Verdadeiro
    Verdadeiro && Verdadeiro => Verdadeiro
    Verdadeiro && altura > 1.70 --> Verdadeiro
    Verdadeiro && Verdadeiro => Verdadeiro
    */

    idade = 17;

    /*
    idade >= 18 => Falso
    idade é <= 30 => Verdadeiro
    Falso && Verdadeiro => Falso
    Falso && altura > 1.70 --> Verdadeiro
    Falso && Verdadeiro => Falso
    */


    if (idade >= 18 && idade <= 30 && altura > 1.70)
    {
        printf("Você está na faixa etária e tem a altura adequada\n");
    }
    else
    {
        printf("Você não atende aos critérios\n");
    }
    
    return 0;
}