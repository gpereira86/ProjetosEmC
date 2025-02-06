#include <stdio.h>

int main(){
    int idade = 16;
    int resultado;

    // condição ? verdadeiro : falso;
    //
    // Seria o mesmo que:
    // if (condição) {
    //     verdadeiro;
    // } else {
    //     falso;
    // }
    
    resultado = idade >= 18 ? 1 : 0;

    if (resultado == 1) {
        printf("Você é maior de idade.");
    } else {
        printf("Você é menor de idade.");
    }

    return 0;
}