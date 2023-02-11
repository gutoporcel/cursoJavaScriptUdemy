class Banco {

    constructor (saldo=0){

        this.saldo = saldo;

    }

    get getSaldo(){

        return this.saldo;

    }

    set setSaldo (saldo){

        this.saldo = saldo;

    }
    
    deposito(valor) {
       
        this.setSaldo=(this.getSaldo + valor);
        console.log ("Seu saldo é = "+this.getSaldo);

    }

    saque(valor){

        if (this.getSaldo >= valor) {

            this.setSaldo=(this.getSaldo - valor);
            console.log ("Seu saldo é = "+ this.getSaldo);
            
        }else{

            console.log("voce nao tem saldo para saque ");
            console.log ("Seu saldo é = "+this.getSaldo);

        }

    }
    
}

letconta = new Banco();
    
conta.deposito(10);
conta.deposito(10);
conta.saque(5);
conta.saque(15);
conta.deposito(100);
conta.saque(15);
console.log (conta.saldo);




