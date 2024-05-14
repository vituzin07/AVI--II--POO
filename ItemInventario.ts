import { Item } from "./Item";

export class ItemInventario {
    private quantidade:number;
    private item:Item

    constructor(item:Item, quantidade:number){
        this.item = item
        this.quantidade = quantidade

    }
     aplicarBeneficios(Personagem):void {

    }
     removerBeneficios(Personagem):void{
        
     }
   
}