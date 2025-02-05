#include <stdio.h>

int main(){
    int numero;

    printf("Digite um número: ");
    scanf("%d", &numero);

    if (numero > 0){

        if(numero %2 == 0){
            printf("Número par");
        } else {
            printf("numero ímpar");
        }
    } else if ( numero == 0) {
        printf("Número é zero\n");
    } else {
        printf("Número é negativo\n");
    }
        
    return 0;
}