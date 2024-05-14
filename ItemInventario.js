"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemInventario = void 0;
var ItemInventario = /** @class */ (function () {
    function ItemInventario(item, quantidade) {
        this.item = item;
        this.quantidade = quantidade;
    }
    ItemInventario.prototype.aplicarBeneficios = function (Personagem) {
    };
    ItemInventario.prototype.removerBeneficios = function (Personagem) {
    };
    return ItemInventario;
}());
exports.ItemInventario = ItemInventario;
