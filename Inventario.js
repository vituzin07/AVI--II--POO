"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.ItensInventario = [];
    }
    Inventario.prototype.getquantidademax = function () {
        return this.quantidaeMaximaItens;
    };
    Inventario.prototype.getItemInventario = function () {
        return this.ItensInventario;
    };
    Inventario.prototype.setquantidademax = function (qtmx) {
        this.quantidaeMaximaItens = qtmx;
    };
    Inventario.prototype.setItemInventario = function (itinv) {
        if (itinv === void 0) { itinv = []; }
        this.ItensInventario = itinv;
    };
    Inventario.prototype.adcionarItem = function (item) {
    };
    return Inventario;
}());
