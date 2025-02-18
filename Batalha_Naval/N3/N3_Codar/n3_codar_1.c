#include <stdio.h>

int main() {
    
    int matriz[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    };

    int target = 9;
    int found = 0;

    // Busca condicional do elemento alvo
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matriz[i][j] == target)
            {
                printf("O valoro %d encontrado no índice (%d, %d)\n", target, i, j);
                found = 1;
                break;
            }
        }
        if (found) break;        
    }
    
    if (!found)
    {
        printf("Elemento %d não encontrado na matriz\n", target);
    }

    return 0;
}