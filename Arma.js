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
var Arma = /** @class */ (function (_super) {
    __extends(Arma, _super);
    function Arma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arma.prototype.aplicarBeneficios = function (Personagem) {
        Personagem.forca = +Personagem.forca + 10;
        Personagem.defesa = +Personagem.defesa + 5;
    };
    Arma.prototype.removerBeneficios = function (Personagem) {
    };
    return Arma;
}(Item_1.Item));
