#include <stdio.h>

int main (){
    /*
    Soma (+)
    Subtração (-)
    Multiplicação (*)
    Divisão (/)
    */

    int numero1, numero2;
    int soma, subtracao, multiplicacao, divisao;
    
    printf("Entre com o numero 1: \n");
    scanf("%d", &numero1);

    printf("Entre com o numero 2: \n");
    scanf("%d", &numero2);

    // operação soma
    soma = numero1 + numero2;
    printf("A soma entre %d e %d e: %d\n", numero1, numero2, soma);
    
    // operação subtraçao
    subtracao = numero1 - numero2;
    printf("A subtracaoo entre %d e %d e: %d\n", numero1, numero2, subtracao);
    
    // operação multiplicação
    multiplicacao = numero1 * numero2;
    printf("A multiplicacao entre %d e %d e: %d\n", numero1, numero2, multiplicacao);
    
    // operação divisão
    divisao = numero1 / numero2;
    printf("A divisao entre %d e %d e: %d\n", numero1, numero2, divisao);

    return 0;
}