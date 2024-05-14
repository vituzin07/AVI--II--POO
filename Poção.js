"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Item");
var pocao = /** @class */ (function (_super) {
    __extends(pocao, _super);
    function pocao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pocao.prototype.aplicarBeneficios = function (Personagem) {
        Personagem.hp = +Personagem.hp * 0.5;
        Personagem.mp = +Personagem.mp * 0.2;
    };
    pocao.prototype.removerBeneficios = function (Personagem) { };
    return pocao;
}(Item_1.Item));
