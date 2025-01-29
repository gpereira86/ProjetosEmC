#include <stdio.h>


int main()
{
    int numeroSinal = 3000000000; //esse número excede o limite de um int normal
    unsigned int numeroSemSinal = 3000000000;

    printf("Numero com sinal: %d\n", numeroSinal);
    printf("Numero sem sinal: %u\n", numeroSemSinal);

    return 0;
}
