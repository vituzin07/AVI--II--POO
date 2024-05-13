export  abstract class Item {
    protected nome: string;
    protected descricao: string;

    constructor(n: string, desc: string){
        this.nome = n;
        this.descricao = desc;
    }
    abstract aplicarBeneficios(Personagem):void 
    abstract removerBeneficios(Personagem):void
     
}



class Inventario {
    private ItemInventario: [] = []
    private quantidaeMaximaItens:Number;

    constructor(qntditns: number){
        this.quantidaeMaximaItens =qntditns;
    }

    adcionarItem(){

    }


}

class ItemMenu {
    private opcao: string;
    private textoopcao: string;

    constructor(o:string, txtop:string){
        this.opcao = o;
        this.textoopcao = txtop;
    }
}
class Menu {
    private ItemMenu: [] = []
    imprimirMenu(){

    }


}
class Personagem {
    private nome: string;
    private HP: number;
    private MP: number;
    private forca: number;
    private defesa: number;
    private inventario: string;
    private arma: string;

    abrirInventario(){

    }
    usarItem(){

    }
    info(){

    }
    desequiparArmas(){

    }

}
