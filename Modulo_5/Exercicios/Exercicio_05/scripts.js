
class ContaBanco{

    constructor(saldoc,saldop, jurosp=0.010 ){
        this.saldoc = saldoc;
        this.saldop = saldop;
        this.jurosp = jurosp;
    }
    set setSaldoC(saldocn){

        this.saldoc= saldocn;
    }
    get getSaldoC(){

       return this.saldoc;
    }
    set setSaldoP(saldopn){

        this.saldop= saldopn;
    }
    get getSaldoP(){

        return this.saldop;
    }

   set setJurosP(jurospn){

        this.jurosp = jurospn;
    }
    get getJurosP(){
        return this.jurosp;
    }
    
    depositoConta(conta,valor){
        if(conta == "corrente" && valor > 0 ){

            this.setSaldoC =(this.getSaldoC + valor) ;
            console.log("O deposito foi de: R$"+valor +"\nO saldo da sua cota corrente é: R$" + this.getSaldoC);


        }else if(conta == "poupança" && valor > 0 ){

           /* console.log(this.getJurosP);
            console.log(this.saldop);
            
*/

            this.setSaldoP =(this.getSaldoP + valor) ;
            this.setJurosP =(this.getSaldoP * this.getJurosP * 30);//perido de 30 dias 
            this.setSaldoP =(this.getSaldoP + this.getJurosP) ;
            console.log("O deposito foi de: R$"+valor +"\nO saldo da sua cota poupança é: R$" + this.getSaldoP);
            


        }else{
            console.log("coloque um valor valido");
        }
     
    }

    saque(conta,valor){
        if(conta == "corrente" && valor <= this.getSaldoC ){

            this.setSaldoC =(this.getSaldoC - valor) ;
            console.log("O deposito foi de: R$"+valor +"\nO saldo da sua cota corrente é: R$" + this.getSaldoC);


        }else if(conta == "poupança" && valor <= this.getSaldoP ){

            
            this.setSaldoP =(this.getSaldoP - valor) ;
            console.log("O saque foi de: R$"+valor +"\nO saldo da sua cota poupança é: R$" + this.getSaldoP);


        }else{
            console.log("valor incorreto coloque um valor valido");
            
        }
     
    }

    transferecia(valor){
        
        this.setSaldoC =(this.getSaldoC - valor) ;
        this.setSaldoP =(this.getSaldoP + valor);
        console.log("Foi feita uma transferencia de: R$"+valor +" no saldo da sua cota corrente para sua conta popança");
        console.log("conta corrente: "+this.getSaldoC);
        console.log("conta Poupança: "+this.getSaldoP );

    }

}

class especial  extends ContaBanco{
    constructor(saldocn,saldopn,jurospex = 0.020){
        super(saldocn,saldopn,jurospex);
        //this.jurospex = jurospex;
    
    
    }


}
let contaEx =new especial(0,0);

let conta = new ContaBanco(0,0);


console.log("//////////////////////////////////")
console.log(conta);


conta.depositoConta("poupança",100); 
conta.depositoConta("corrente",100 );
conta.transferecia(50);
console.log(conta);

/*conta.saque("corrente",20);
conta.saque("poupança",20);
conta.saque("poupança",140);
conta.saque("poupança",130);
conta.depositoConta("poupança",100);*/

console.log("//////////////////////////////////");
console.log(contaEx);
contaEx.depositoConta("poupança",100); 
contaEx.depositoConta("corrente",100 );
contaEx.transferecia(50);
console.log(contaEx);


    
    
    
    
   
    
    
    
    
   
    