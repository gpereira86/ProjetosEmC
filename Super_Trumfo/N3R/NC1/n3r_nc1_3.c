#include <stdio.h>

int main(){
    int num1 = 40, num2 = 20;
    int maior;

    maior = num1 > num2 ? num1 : num2;

    printf("Fazendo pelo ternário:\nO número maior é: %d\n\n", maior);

    if (num1 > num2){
        maior = num1;
    } else {
        maior = num2;
    }

    printf("Fazendo pelo if:\nO número maior é: %d\n", maior);

    return 0;
}