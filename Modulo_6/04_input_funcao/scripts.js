function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        alert("Apenas numeros") ;
        
    }else{

        return number;
    }
    
}

checarNumero(1);
checarNumero('dsdsds');

let number =  prompt("Digite um numero");
checarNumero(number)
