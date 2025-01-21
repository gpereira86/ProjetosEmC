#include <stdio.h>

int main(){

    int idade = 25;
    float altura = 1.75;
    char opcao = 'S';
    char nome[20] = "Glauco";

    // printf("Idade:  %d\n", idade);
    // printf("Altura: %f\n", altura);
    printf("Altura: %e\n", altura);
    printf("Opção:  %c\n", opcao);
    printf("Nome: %s - Idade: %d", nome, idade);

    /*
    printf("%formato1 %formato2 %formato3", variável1, variável2, variável3)

    %d: imprime um inteiro no formato decimal
    %i: equivalente a %d
    %f: imprime um número de ponto flutuante bi fomato padrão
    %e: imprime um número de ponto flutuante no notação científica
    %c: imprime um único caractere
    %s: imprime uma cadeia (string) de caracteres
    */

}