#include <stdio.h>

int main(){
    int condicao1, condicao2;

    // estrutura aninhada
    if (condicao1) {
        if (condicao2) {
            // Código a ser executado se condicao1 e condicao2 forem verdadeiras
        }        
    }
    
    // estrutura encadeada
    if (condicao1) {
        // Código a ser executado se condicao1 for verdadeira
    } else if (condicao2) {
        // Código a ser executado se condicao1 for fals e condicao2 for verdadeira
    } else {
        // Código a ser executado se todas as condições anteriores forem falsas
    }
    
    return 0;
}