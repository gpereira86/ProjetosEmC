#include <stdio.h>

// Desafio Batalha Naval - MateCheck
// Este código inicial serve como base para o desenvolvimento do sistema de Batalha Naval.
// Siga os comentários para implementar cada parte do desafio.

#define LINHAS 10
#define COlUNAS 10

#define LINHASHABILIDADES 7
#define COLUNASHABILIDADES 7


void exibirTabuleiro(int tabuleiro[LINHAS][COlUNAS]){

    printf("----------------TABULEIRO----------------\n");

    for (int i = 0; i < LINHAS; i++)
    {
        printf("| ");
        for (int j = 0; j < COlUNAS; j++)
        {
            printf("%d | ",tabuleiro[i][j]);
        }

        printf("\n");        
    }
    
     printf("-----------------------------------------\n");

}

int main() {
    // Nível Novato - Posicionamento dos Navios
    // Sugestão: Declare uma matriz bidimensional para representar o tabuleiro (Ex: int tabuleiro[5][5];).
    // Sugestão: Posicione dois navios no tabuleiro, um verticalmente e outro horizontalmente.
    // Sugestão: Utilize `printf` para exibir as coordenadas de cada parte dos navios.

    int tabuleiro[LINHAS][COlUNAS] = {0};

    int navio1Inicial[2] = {0, 1}, navio2Inicial[2] = {2, 3}; 
    int tamanhoNavio1 = 3, tamanhoNavio2 = 4;
     
    printf(">>> Navio 1 (Horizontal) <<<\n");
    
    if ( navio1Inicial[0] >= LINHAS || (navio1Inicial[1] + tamanhoNavio1) >= COlUNAS)
    {
        printf("Navio ultrapassa o tabuleiro, não posicionado.\n");

    } else {
        printf("--- Posicionado nas coordenadas: ---\n");
        for (int i = 0; i < tamanhoNavio1; i++)
        {
            tabuleiro[navio1Inicial[0]][navio1Inicial[1]+i] = 3;
            printf("Parte do navio posicionado na casa [%d][%d]\n", navio1Inicial[0], navio1Inicial[1] + i);
        }
    }
    
    
    printf("\n");


    printf(">>> Navio 2 (Vertical) <<<\n");
    if ( (navio2Inicial[0] + tamanhoNavio2) >= LINHAS || navio2Inicial[1] + tamanhoNavio2 >= COlUNAS)
    {
        printf("Navio ultrapassa o tabuleiro, não posicionado.\n");

    } else {
        printf("--- Posicionado nas coordenadas: ---\n");
        for (int i = 0; i < tamanhoNavio2; i++)
        {
            tabuleiro[navio2Inicial[0]+i][navio2Inicial[1]] = 3;
            printf("Parte do navio posicionado na casa [%d][%d]\n", navio2Inicial[0], navio2Inicial[1] + i);
        }
    }
    printf("\n");

    
    exibirTabuleiro(tabuleiro);


    // Nível Aventureiro - Expansão do Tabuleiro e Posicionamento Diagonal
    // Sugestão: Expanda o tabuleiro para uma matriz 10x10.
    // Sugestão: Posicione quatro navios no tabuleiro, incluindo dois na diagonal.
    // Sugestão: Exiba o tabuleiro completo no console, mostrando 0 para posições vazias e 3 para posições ocupadas.

    int inicialNavioDiagonalFrente[2] = {2, 6}, inicialNavioDiagonalTras[2] = {5, 6}; 
    int tamanhoNavio3 = 3, tamanhoNavio4 = 4;
    
    printf("\n>>> Navio 3 (Diagonal para Baixo) <<<\n");
    if ((inicialNavioDiagonalFrente[0] + tamanhoNavio3)>= LINHAS || (inicialNavioDiagonalFrente[1] + tamanhoNavio3) >= COlUNAS)
    {
        printf("Navio ultrapassa o tabuleiro, não posicionado.\n");
    }
    else
    {
        printf("--- Posicionado nas coordenadas: ---\n");
        for (int i = 0; i < tamanhoNavio3; i++)
        {
            tabuleiro[inicialNavioDiagonalFrente[0]+i][inicialNavioDiagonalFrente[1]+i] = 3;
            printf("Parte do navio posicionado na casa [%d][%d]\n", inicialNavioDiagonalFrente[0]+i, inicialNavioDiagonalFrente[1]+i);
        }
    }
    printf("\n");


    
    printf(">>> Navio 4 (Diagonal para Cima) <<<\n");
    if ((inicialNavioDiagonalTras[0] - tamanhoNavio4) < 0 || (inicialNavioDiagonalTras[1] - tamanhoNavio4) < 0)
    {
        printf("Navio ultrapassa o tabuleiro, não posicionado.\n");
    }
    else
    {
        printf("--- Posicionado nas coordenadas: ---\n");
        for (int i = 0; i < tamanhoNavio4; i++)
        {
            
            tabuleiro[inicialNavioDiagonalTras[0]+i][inicialNavioDiagonalTras[1]-i] = 3;
            printf("Parte do navio posicionado na casa [%d][%d]\n", inicialNavioDiagonalTras[0]-i, inicialNavioDiagonalTras[1]-i);
        }
    }
    printf("\n");
        
    exibirTabuleiro(tabuleiro);


    // Nível Mestre - Habilidades Especiais com Matrizes
    // Sugestão: Crie matrizes para representar habilidades especiais como cone, cruz, e octaedro.
    // Sugestão: Utilize estruturas de repetição aninhadas para preencher as áreas afetadas por essas habilidades no tabuleiro.
    // Sugestão: Exiba o tabuleiro com as áreas afetadas, utilizando 0 para áreas não afetadas e 1 para áreas atingidas.

    // Exemplos de exibição das habilidades:
    // Exemplo para habilidade em cone:
    // 0 0 1 0 0
    // 0 1 1 1 0
    // 1 1 1 1 1
    
    // Exemplo para habilidade em octaedro:
    // 0 0 1 0 0
    // 0 1 1 1 0
    // 0 0 1 0 0

    // Exemplo para habilidade em cruz:
    // 0 0 1 0 0
    // 1 1 1 1 1
    // 0 0 1 0 0

    // Cone:
    int cone[LINHAS][COlUNAS];
    int gatilho = 2;
    int paraGatilho = 0;
    
    for (int i = 0; i < LINHAS; i++)
    {
        

        for (int j = 0; j< COlUNAS; j++){
            
            if (j >= (gatilho - i) && j <= (gatilho + i) && paraGatilho < 3) {
                printf("1 ");
                tabuleiro[i][j] = 5;
            } else {
                printf("0 ");
            }                
            
        }
        paraGatilho++;
        printf("\n");
    }
    printf("\n");

    // octaedro:
    int octaedro[LINHAS][COlUNAS];
    int centro[2] = {2, 7};

    for (int i = 0; i < LINHAS; i++)
    {
        for (int j = 0; j < COlUNAS; j++)
        {
          
            if (j == centro[1] && (i >= (centro[0]-1) && i <= (centro[0] + 1)))
            {
                printf("1 ");
                tabuleiro[i][j] = 5;
            } else if (i == centro[0] && j != centro[1] && (j >= (centro[1] - 1) && j <= (centro[1] + 1)))
            {
                printf("1 ");
                tabuleiro[i][j] = 5;
            } else 
            {
                printf("0 ");
            } 

        }
        printf("\n");
    }
    printf("\n");


    // Cruz:
    int cruz[LINHAS][COlUNAS];
    int centroCruz[2] = {6, 2};

    for (int i = 0; i < LINHAS; i++)
    {
        for (int j = 0; j < COlUNAS; j++)
        {
          
            if (j == centroCruz[1] && (i >= (centroCruz[0]-1) && i <= (centroCruz[0] + 1)))
            {
                printf("1 ");
                tabuleiro[i][j] = 5;
            } else if (i == centroCruz[0] && j != centroCruz[1] && (j >= (centroCruz[1] - 2) && j <= (centroCruz[1] + 2)))
            {
                printf("1 ");
                tabuleiro[i][j] = 5;
            } else 
            {
                printf("0 ");
            } 

        }
        printf("\n");
    }
    printf("\n");

    exibirTabuleiro(tabuleiro);

    return 0;
}
