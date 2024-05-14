import { Item } from "./Item";

class pocao extends Item{
    aplicarBeneficios(Personagem):void{
        Personagem.hp =+ Personagem.hp * 0.5
        Personagem.mp =+ Personagem.mp * 0.2 
    } 
    removerBeneficios(Personagem):void{}

}