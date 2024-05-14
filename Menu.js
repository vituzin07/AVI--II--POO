var Menu = /** @class */ (function () {
    function Menu() {
        this.ItemMenu = [];
    }
    Menu.prototype.getItemMenu = function () {
        return this.ItemMenu;
    };
    Menu.prototype.setItemMenu = function (im) {
        this.ItemMenu = im;
    };
    Menu.prototype.imprimirMenu = function () {
        var entrada = require('prompt-sync')();
        var v = entrada('Escolha uma das opções');
        console.log(v + "1 - Equipar arma/n2 - Tomar poção/n3 - Adcionar arma no inventário/n4 - Adcionar poção ao inventario/n5 - Imprimir info/n6 - Desequipar arma/n0 - Sair");
    };
    return Menu;
}());
