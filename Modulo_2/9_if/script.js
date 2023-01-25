//estrura condicional if controle maior de idade 

let idade = prompt("Qual é sua idade: ");

if(idade>=18){
    alert(`Pode entrar, sua idade e ${idade}`);
}else{
alert(`Só pode entra maiores de 18 a sua idade é ${idade}`);
}

let idade1 = 19;
if (idade1 == 19) {
    console.log("A idade é maior  que 25");
}

if (idade1 >25) {
    console.log ("A idade é maior que 25");
    
}

let nome = "jose";

if (nome =="jose" && idade1 > 10 ) {
    console.log("liberado"); 
}

let passaporte = true;

if ((nome =="jose" && idade1 > 30)||passaporte == true ) {
    console.log("Liberado 2!");
    
}


