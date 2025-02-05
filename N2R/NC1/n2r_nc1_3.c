#include <stdio.h>

int main(){

    int a = 5;
    int b = -10;
    int c = 1;

    /*
    a > 0 => Vedadeiro
    b < 0 => Vedadeiro
    Verdadeiro && Vedadeiro => Vedadeiro
    Vedadeiro || C == 0 --> c == 0 => Falso
    Vedadeiro || Falso => Vedadeiro
    */

    b = 10;

    /*
    a > 0 => Vedadeiro
    b < 0 => Falso
    Verdadeiro && Falso => Falso
    Falso || C == 0 --> c == 0 => Falso
    Falso || Falso => Falso
    */

    if (a > 0 && b < 0 || c == 0) {
        printf("A condição é verdadeira\n");
    } else {
        printf("A condição é falsa\n");
    }
    

    return 0;
}