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






