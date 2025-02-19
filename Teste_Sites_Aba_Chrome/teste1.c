#include <windows.h>
#include <stdlib.h>
#include <shellapi.h>

int main() {
    // Abre o Chrome em tela cheia
    ShellExecute(0, "open", "chrome", "--new-window --start-fullscreen https://www.google.com", 0, SW_SHOWNORMAL);

    // Aguarda um tempo para o Chrome abrir
    Sleep(3000);

    // Obtém o identificador da janela do Chrome
    HWND hwnd = FindWindow("Chrome_WidgetWin_1", NULL);
    if (hwnd) {
        // Move a janela para a tela 2 (ajuste os valores conforme necessário)
        SetWindowPos(hwnd, HWND_TOP, 1920, 0, 1920, 1080, SWP_NOZORDER | SWP_SHOWWINDOW);
    }

    return 0;
}