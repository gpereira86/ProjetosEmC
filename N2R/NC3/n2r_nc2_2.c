#include <stdio.h>

int main(){
    int idade;
    int dependentes;
    float renda;  

    // A primeira condição idade do usuário está entre 18 e 65.
    // A segunda condição se a renda do usuário é menor que 3000.
    // A terceira condição verifica se o número de dependentes é maior que 2.

    printf("Digite sua idade: ");
    scanf("%d", &idade);
    printf("Digite sua renda mensal: ");
    scanf("%f", &renda);  
    printf("Digite o número de dependentes: ");
    scanf("%d", &dependentes);  

    if (idade >= 18 && idade <= 65) {
        if (renda < 3000) {
            if (dependentes > 2) {
                printf("Você atende todos os critérios\n");
            } else {
                printf("Você não atende ao critério dependentes\n");
            }            
        } else {
            printf("Você não atende ao critério renda\n");
        }

    } else {
        printf("Você não atende ao critério idade\n");    
    }
        
    return 0;
}