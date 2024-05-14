import { Item } from "./Item";

class Arma extends Item{
aplicarBeneficios(Personagem):void{
    Personagem.forca =+ Personagem.forca + 10
    Personagem.defesa =+ Personagem.defesa + 5
} 
removerBeneficios(Personagem):void{

}
}