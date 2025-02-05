#include <stdio.h>

int main(){
    int idade;
    float renda;

    // if (condicao1) {
    //     if (condicao2) {
    //         // Código a ser executado se condicao1 e condicao2 forem verdadeiras
    //     } else {
    //     
    //     }       
    // }

    /*
    programa que verifica se uma pessoa está qualificada para um
    desconto especial com base na idade e renda mensal.
    A pessoa deve ter mais de 60 anos ou menos de 18 anos e ter 
    uma renda mensal abaixo de 2000
    */

    printf("Digite sua idade: ");
    scanf("%d", &idade);
    printf("Digite sua renda mensal: ");
    scanf("%f", &renda);

    if (idade <= 18 || idade >= 60) {
        printf("Aceito com relação a idade\n");

        if (renda < 2000) {
            printf("Você tem direito ao desconto\n");
        } else {
            printf("Você não tem direito ao desconto devido à renda\n");
        }

    } else {
        printf("Você não atende aos critérios devido à idade\n");    
    }
    

    return 0;
}