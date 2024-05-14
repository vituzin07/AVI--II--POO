import { Item } from "./Item";
import { ItemInventario } from "./ItemInventario";

class Inventario {
    private ItensInventario: [] = []
    private quantidaeMaximaItens:Number;
    getquantidademax(){
        return this.quantidaeMaximaItens
    }
    getItemInventario(){
        return this.ItensInventario
    }

    setquantidademax(qtmx: number){
        this.quantidaeMaximaItens = qtmx
    }
    setItemInventario(itinv: ItemInventario){
        this.ItensInventario               = itinv
    }



    adcionarItem(item:Item){

        this.ItensInventario.push(new ItensInventario(item ,0))
    }


}