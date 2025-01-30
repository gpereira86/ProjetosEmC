#include <stdio.h>

// Desafio Super Trunfo - Países
// Tema 1 - Cadastro das Cartas
// Este código inicial serve como base para o desenvolvimento do sistema de cadastro de cartas de cidades.
// Siga os comentários para implementar cada parte do desafio.
//Teste larissa

int main() {
    // Sugestão: Defina variáveis separadas para cada atributo da cidade.
    // Exemplos de atributos: código da cidade, nome, população, área, PIB, número de pontos turísticos.
    
    // Cadastro das Cartas:
    // Sugestão: Utilize a função scanf para capturar as entradas do usuário para cada atributo.
    // Solicite ao usuário que insira as informações de cada cidade, como o código, nome, população, área, etc.
    
    // Exibição dos Dados das Cartas:
    // Sugestão: Utilize a função printf para exibir as informações das cartas cadastradas de forma clara e organizada.
    // Exiba os valores inseridos para cada atributo da cidade, um por linha.


    char cod_cidade_c1[4], cod_cidade_c2[4];
    char nome_cidade_c1[57], nome_cidade_c2[57]; // considerado maior nome de cidade do mundo com 58 letras para determinar tamanho do char

    int populacao_c1, populacao_c2;
    float area_c1, area_c2;
    float pib_c1, pib_c2;
    int pontos_turisticos_c1, pontos_turisticos_c2;
    float densidadePopulacional_c1, densidadePopulacional_c2;
    float pibPerCapita_c1, pibPerCapita_c2;
    float superPoder_c1, superPoder_c2;
    int teste;
    int resultado_c1;

    
    printf("Cadastro de Cartas\n");
    printf("------------------\n\n");

    printf("Obs.: O código da cidade deve ser composto pela letra de 'A a H' que representa o estado,\nseguido do numeral de '01' a '04' que representa a cidade (ex.:A01, B02)\n\n");

    printf("=> Cadastre a primeira carta: \n\n");
    printf("Digite o código da Cidade:\n");
    scanf("%s", cod_cidade_c1);
    
    printf("Digite o nome da Cidade:\n");
    scanf("%s", nome_cidade_c1);

    printf("Digite a população da Cidade:\n");
    scanf("%d", &populacao_c1);

    printf("Digite a área da Cidade (em km²):\n");
    scanf("%f", &area_c1);

    printf("Digite o PIB da Cidade (em Milhões):\n");
    scanf("%f", &pib_c1);

    printf("Digite a quantidade de pontos turísticos da Cidade:\n");
    scanf("%d", &pontos_turisticos_c1);

    densidadePopulacional_c1 = (float)populacao_c1 / area_c1;
    pibPerCapita_c1 = (pib_c1 * 1000000.0) / (float)populacao_c1;
    superPoder_c1 = (float)(populacao_c1 + pontos_turisticos_c1) + area_c1 + pib_c1 + densidadePopulacional_c1 + pibPerCapita_c1;
    
    
    printf("\n------------------------------------\n");
    printf("Carta %s cadastrada com sucesso\n", cod_cidade_c1);
    printf("------------------------------------\n");
    printf("Cidade: %s\n", nome_cidade_c1);
    printf("População: %d habitantes\n", populacao_c1);
    printf("Área da Cidade: %.2f km²\n", area_c1);
    printf("PIB: %.2f milhões de UM$\n", pib_c1);
    printf("Número de pontos turísticos: %d\n", pontos_turisticos_c1);
    printf("Densidade Populacional: %.5f habitantes/km²\n", densidadePopulacional_c1);
    printf("PIB per capita Populacional: %.2f UM$ por habidatente\n", pibPerCapita_c1);
    printf("Super poder: %.3f", superPoder_c1);
    printf("------------------------------------\n");
    printf("\n************************************\n\n");


    printf("=> Cadastre a segunda carta: \n\n");

    printf("Digite o código da Cidade:\n");
    scanf("%s", cod_cidade_c2);
    
    printf("Digite o nome da Cidade:\n");
    scanf("%s", nome_cidade_c2);

    printf("Digite a população da Cidade:\n");
    scanf("%d", &populacao_c2);

    printf("Digite a área da Cidade (em km²):\n");
    scanf("%f", &area_c2);

    printf("Digite o PIB da Cidade (em Milhões):\n");
    scanf("%f", &pib_c2);

    printf("Digite a quantidade de pontos turísticos da Cidade:\n");
    scanf("%d", &pontos_turisticos_c2);

    densidadePopulacional_c2 = (float)populacao_c2 / area_c2;
    pibPerCapita_c2 = (pib_c2 * 1000000.0) / (float)populacao_c2;
    superPoder_c2 = (float)(populacao_c2 + pontos_turisticos_c2) + area_c2 + pib_c2 + densidadePopulacional_c2 + pibPerCapita_c2;
    
    printf("\n------------------------------------\n");
    printf("Carta %s cadastrada com sucesso\n", cod_cidade_c2);
    printf("------------------------------------\n");
    printf("Cidade: %s\n", nome_cidade_c2);
    printf("População: %d habitantes\n", populacao_c2);
    printf("Área da Cidade: %.2f km²\n", area_c2);
    printf("PIB: %.2f milhões de UM$\n", pib_c2);
    printf("Número de pontos turísticos: %d\n", pontos_turisticos_c2);
    printf("Densidade Populacional: %.5f habitantes/km²\n", densidadePopulacional_c2);
    printf("PIB per capita Populacional: %.2f UM$ por habidatente\n", pibPerCapita_c2);
    printf("Super poder: %.3f", superPoder_c2);
    printf("------------------------------------\n");
    printf("\n************************************\n\n"); 


    printf("Compando as cartas\n");
    printf("==================\n\n");

    printf("obs.: Na tabela abaixo ganha a carta com nota '1' para o critério,\nconsequentemente quem obteve resultado '0' perde.\nNo final a carta com maior pontuação total ganha a disputa.\n\n"); 
    
    printf("====================================================\n");  
    printf("Critério ---------------- Carta %s ------ Carta %s\n", cod_cidade_c1, cod_cidade_c2);
    printf("====================================================\n");  

    teste = populacao_c1 > populacao_c2;
    resultado_c1 += teste;
    printf("População: --------------     %d    ------     %d   \n", teste, (1 - teste));

    teste = area_c1 > area_c2;
    resultado_c1 += teste;
    printf("Área: -------------------     %d    ------     %d   \n", teste, (1 - teste));

    teste = pib_c1 > pib_c2;
    resultado_c1 += teste;
    printf("PIB: --------------------     %d    ------     %d   \n", teste, (1 - teste));

    teste = pontos_turisticos_c1 > pontos_turisticos_c2;
    resultado_c1 += teste;
    printf("Pontos turísticos: ------     %d    ------     %d   \n", teste, (1 - teste));

    teste = densidadePopulacional_c1 < densidadePopulacional_c2;
    resultado_c1 += teste;
    printf("Densidade populacional: -     %d    ------     %d   \n", teste, (1 - teste));

    teste = pibPerCapita_c1 > pibPerCapita_c2;
    resultado_c1 += teste;
    printf("PIB per capita: ---------     %d    ------     %d   \n", teste, (1 - teste));

    teste = superPoder_c1 > superPoder_c2;
    resultado_c1 += teste;
    printf("Super poder: ------------     %d    ------     %d   \n", teste, (1 - teste));

    printf("====================================================\n\n");
    printf("TOTAL: ------------------     %d    ------     %d   \n", resultado_c1, (7 - resultado_c1));
    printf("====================================================\n\n");   
    
    return 0;
}

