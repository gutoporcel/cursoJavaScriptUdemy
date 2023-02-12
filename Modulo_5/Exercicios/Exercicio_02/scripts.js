class Carrinho {

    constructor (itens,qtd,valorTotal){

        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal =valorTotal
     

    }

    adicionaItens(item) {
        let contador = 0; 
      
        for (let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
              this.itens[itemCarrinho].qtd += item.qtd; 
              contador = 1;

            }
        }

        if(contador == 0){

            this.itens.push(item);

        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

    }
    removeItem(item){

        for (let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){

              let obj = this.itens[itemCarrinho];
              let index  = this.itens.findIndex(function(obj){return obj.id == item.id});
              
              this.qtd -= this.itens[itemCarrinho].qtd;
              this.valorTotal -= this.itens[itemCarrinho].preco *this.itens[itemCarrinho].qtd;
            
              this.itens.splice(index, 1);
            }
        }




    }

}
let compra = new Carrinho([{
    
    id:01,
    nome:"camiseta",
    qtd:1,
    preco:50   
},
{
    id:02,
    nome:"calça",
    qtd:2,
    preco:50 
}    

],3,120);

console.log(compra);
compra.adicionaItens({id:03,nome:"camisa",qtd:2,preco:50});
console.log(compra);
compra.adicionaItens({id:05,nome:"bone",qtd:1,preco:100});
console.log(compra);
compra.removeItem({id:03,nome:"camisa",qtd:2,preco:50});
console.log(compra);