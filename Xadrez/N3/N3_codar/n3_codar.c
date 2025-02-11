#include <stdio.h>

void recursivo(int numero){
    if (numero > 0)
    {
        recursivo(numero -1); // chama a si mesma
        printf("%d... ", numero);
    }
}

int main() {

    int quantidade = 10;

    printf("Contagem regressiva: ");
    recursivo(quantidade);
    
    return 0;
}