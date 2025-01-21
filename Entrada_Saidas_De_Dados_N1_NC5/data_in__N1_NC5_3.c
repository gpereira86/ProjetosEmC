#include <stdio.h>

int main(){
    int idade;
    float altura;
    char opcao;
    char nome[20];

    // Sintaxe scanf
    // scanf("formato1" "formato2", &variavel1, variavel2)

    // printf("Idade antes: %d\n", idade);
    // printf("Entre com sua idade:\n");
    printf("Entre com sua idade e altura:\n");
    // scanf("%d", &idade);
    scanf("%d %f", &idade, &altura);
    printf("Idade: %d\n", idade);
    printf("Altura: %f\n", altura);

    // printf("Entre com a altura:\n");
    // scanf("%f", &altura);
    // printf("Altura: %d", idade);


    printf("Entre com a opcao:\n");
    scanf(" %c", &opcao);
    
    printf("A opção é: %c", opcao);

}