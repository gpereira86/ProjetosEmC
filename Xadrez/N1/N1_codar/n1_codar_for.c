#include <stdio.h>

int main() {
    
    int numero, i;

    printf("Digite um número para calcularmos a tabuada: ");
    scanf("%d", &numero);
    
    printf("=============\n");
    printf("TABUADA DE %d\n", numero);
    printf("=============\n");
    
    for (i = 0; i <= 10; i++) {
        printf("%d x %d = %d \n", i, numero, (numero * i));
    }
    
    printf("-------------");
        
    return 0;
}