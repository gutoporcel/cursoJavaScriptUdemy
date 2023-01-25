//estrutura de condicçao else e if

let a = 5;
let b = 3;

if (a +b ==3) {
    console.log("o resultado é 3");    
}else if(a == 4){
    console.log("o valoe de a é: 4");  

} else if(b==3){
    console.log("O valor de b é: 3")
}else {
    console.log ("nenhuma das condiçoes acima!");
    
}

/////////////////////////////////////////////////////////////

let nome = "jose";
let idade = 50;

if (nome != undefined && nome == "jo")  {
    console.log("Nome  esta definido")
    
}else if (nome == "jose" && nome.length > 3 && idade ==18){
console.log("O nome e jose");
}else{
    console.log("Nao e jose");
}
  
////////////////////////////////////////////////////

if(1>2){
    console.log("teste1");
} else if (1==1){
    console.log("testando");
}