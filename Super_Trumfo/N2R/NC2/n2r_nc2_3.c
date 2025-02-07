#include <stdio.h>

int main(){
    
    int nota;

    printf("Digite a sua nota: ");
    scanf("%d", &nota);

    // A >= 90
    // B >= 80
    // C >= 70
    // D >= 60
    // E >= 50
    // F

    if (nota >= 90) {
        printf("Conceito A!\n");
    } else if (nota >= 80) {
        printf("Conceito B!\n");
    } else if (nota >= 70) {
        printf("Conceito C!\n");
    } else if (nota >= 60) {
        printf("Conceito D!\n");
    } else if (nota >= 50) {
        printf("Conceito E!\n");
    } else {
        printf("Conceito F!\n"); 
    }
    
    return 0;
}