#include <stdio.h>

int main() {
    int opcao;
    float nota1, nota2, media;

    printf("Menu de Gerenciamento de Estudandes\n");
    printf("1. Calcular Média\n");
    printf("2. Determinar Status\n");
    printf("3. Sair\n");
    printf("Escolha uma opção: ");
    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
        printf("Calcular a média");
        printf("Digite a primeira nota: ");
        scanf("%f", &nota1);
        printf("Digite a segunda nota: ");
        scanf("%f", &nota2);

        // Testar a ciondição se a nota é >= a 0 e <= 10
        if ((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10)) {
            media = (nota1 + nota2) / 2;
            printf("\nA média é: %.2f\n", media);
        } else {
            printf("\nEntrada com valores errados de notas!\n");
        }

        break;
    case 2:
        printf("Determinar status");

        printf("Entrar com a media: ");
        scanf("%f", &media);

        // media >= 5 ? printf("Aprovado!") : printf("Reprovado!"); // ternário

        if( media >= 7 ){
            printf("Aprovado!");
        } else if ( media >= 5 ){
            printf("Recuperaçao!");
        } else {
            printf("Reprovado!");
        }

        break;
    case 3:
        printf("Saindo do programa...");
    break;
    default:
        printf("Opção inválida!");
        break;
    }
    
    return 0;
}