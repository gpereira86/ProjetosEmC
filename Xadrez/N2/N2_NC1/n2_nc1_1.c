#include <stdio.h>

int main() {
    
    for (int i = 1; i <= 10; i++)
    {
        for (int j = 1; j <= 10; j++)
        {
            printf("%2.d x %2.d = %3.d\n", i, j, (i * j));
        }        
        printf("--------------\n");
    }
    
    return 0;
}