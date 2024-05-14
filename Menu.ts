class Menu {
    private ItemMenu: [] = []
    getItemMenu(){
        return this.ItemMenu
    }
    setItemMenu(im:[]){
        this.ItemMenu = im

    }
    imprimirMenu(){
        let entrada = require('prompt-sync')()
        let v = entrada('Escolha uma das opções')
        console.log(v + "1 - Equipar arma/n2 - Tomar poção/n3 - Adcionar arma no inventário/n4 - Adcionar poção ao inventario/n5 - Imprimir info/n6 - Desequipar arma/n0 - Sair")
        
    }

}

