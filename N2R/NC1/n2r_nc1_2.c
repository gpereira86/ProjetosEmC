#include <stdio.h>

int main(){

    int a = 10;

    // if (!a) { 
    if (!(a > 0)) { 
        // printf("\n>>> A variável 'a' é zero.\n\n");
        printf("\n>>> A variável é um número negativo.\n\n");
    } else {
        printf("\n>>> A variável é positiva.\n\n");
    }
    

    return 0;
}